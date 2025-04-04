
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const BUCKETS = {
  TOWNPHOTOS: 'townphotos',
  CAROUSEL: 'carousel-images',
  HOMEPAGEPHOTOS: 'homepagephotos'
};

// Check if a bucket exists, show appropriate notifications
export async function checkBucketExists(bucketName: string): Promise<boolean> {
  try {
    const { data: buckets, error } = await supabase
      .storage
      .listBuckets();
    
    if (error) {
      console.error(`Error checking buckets:`, error);
      return false;
    }
    
    const bucket = buckets?.find(b => b.name === bucketName);
    if (!bucket) {
      console.error(`The '${bucketName}' bucket doesn't exist in Supabase storage`);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error(`Error checking bucket ${bucketName}:`, error);
    return false;
  }
}

// Get public URL for an image in a bucket
export function getImageUrl(bucketName: string, fileName: string): string {
  try {
    const { data } = supabase
      .storage
      .from(bucketName)
      .getPublicUrl(fileName);
    
    return data.publicUrl;
  } catch (error) {
    console.error(`Error getting public URL for ${fileName}:`, error);
    return '';
  }
}

// For backwards compatibility with useCarouselImages.ts
export function getPublicImageUrl(fileName: string): string {
  return getImageUrl(BUCKETS.CAROUSEL, fileName);
}

// Get alt text from file name by removing extension and replacing dashes/underscores with spaces
export function getAltTextForImage(fileName: string): string {
  // Remove file extension
  const nameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
  // Replace dashes and underscores with spaces, then capitalize words
  return nameWithoutExtension
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

// Fetch images from the carousel bucket
export async function getCarouselImages() {
  try {
    // We'll assume the bucket exists since we've verified it's public and accessible
    const { data: files, error } = await supabase
      .storage
      .from(BUCKETS.CAROUSEL)
      .list('', {
        sortBy: { column: 'name', order: 'asc' }
      });
    
    if (error) {
      console.error('Error listing carousel images:', error);
      return [];
    }
    
    if (files && files.length > 0) {
      console.log('Found files in carousel-images bucket:', files.map(f => f.name).join(', '));
    } else {
      console.log('No files found in carousel-images bucket');
    }
    
    return files || [];
  } catch (error) {
    console.error('Error getting carousel images:', error);
    return [];
  }
}

// Get homepage photos from the homepagephotos bucket
export async function getHomepagePhotos() {
  try {
    console.log('Attempting to fetch photos from homepagephotos bucket');
    
    const { data: files, error } = await supabase
      .storage
      .from(BUCKETS.HOMEPAGEPHOTOS)
      .list('', {
        sortBy: { column: 'name', order: 'asc' }
      });
    
    if (error) {
      console.error('Error listing homepage photos:', error);
      toast.error('Failed to load homepage photos');
      return [];
    }
    
    if (!files || files.length === 0) {
      console.log('No files found in homepagephotos bucket');
      return [];
    }
    
    console.log('Found files in homepagephotos bucket:', files.map(f => f.name).join(', '));
    
    // Filter for image files only
    const imageFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '');
    });
    
    if (imageFiles.length === 0) {
      console.log('No image files found in homepagephotos bucket');
      return [];
    }
    
    // Convert files to photo objects with URLs and alt text
    const photos = imageFiles.map(file => {
      const publicUrl = getImageUrl(BUCKETS.HOMEPAGEPHOTOS, file.name);
      const altText = getAltTextForImage(file.name);
      
      console.log(`Processing image: ${file.name} → ${publicUrl}`);
      
      return {
        src: publicUrl,
        alt: altText,
        caption: altText
      };
    });
    
    // Verify the first few URLs to make sure they're valid
    const sampleUrls = photos.slice(0, 3).map(photo => photo.src);
    const urlResults = await verifyImageUrls(sampleUrls);
    
    // If all sample URLs failed, there might be an issue with the bucket configuration
    if (sampleUrls.length > 0 && Object.values(urlResults).every(result => result === false)) {
      console.error('All sample image URLs failed to load. Check bucket permissions and CORS settings.');
      toast.error('Failed to load photos - please check bucket permissions');
    }
    
    return photos;
  } catch (error) {
    console.error('Error in getHomepagePhotos:', error);
    toast.error('Error loading photos');
    return [];
  }
}

// Lists all files in a bucket
export async function listBucketFiles(bucketName: string) {
  try {
    const { data: files, error } = await supabase
      .storage
      .from(bucketName)
      .list('');
    
    if (error) {
      console.error(`Error listing files in ${bucketName} bucket:`, error);
      toast.error(`Error accessing files in ${bucketName} bucket`);
      return [];
    }
    
    console.log(`Files in ${bucketName} bucket:`, files);
    return files || [];
  } catch (error) {
    console.error(`Error listing files in ${bucketName} bucket:`, error);
    return [];
  }
}

// Verify image URLs work by preloading them
export async function verifyImageUrls(imageUrls: string[]): Promise<Record<string, boolean>> {
  const results: Record<string, boolean> = {};
  
  for (const url of imageUrls) {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      results[url] = response.ok;
      console.log(`Image URL check: ${url} - ${response.ok ? 'OK' : 'FAILED'}`);
    } catch (error) {
      results[url] = false;
      console.error(`Error checking image URL ${url}:`, error);
    }
  }
  
  return results;
}

// Test connectivity to Supabase storage
export async function testSupabaseStorageConnection(): Promise<boolean> {
  try {
    const { data: buckets, error } = await supabase
      .storage
      .listBuckets();
    
    if (error) {
      console.error('Failed to connect to Supabase storage:', error);
      toast.error('Failed to connect to Supabase storage');
      return false;
    }
    
    toast.success('Successfully connected to Supabase storage');
    console.log('Available storage buckets:', buckets);
    
    // Check for our required buckets
    const requiredBuckets = [BUCKETS.HOMEPAGEPHOTOS, BUCKETS.CAROUSEL];
    const missingBuckets = requiredBuckets.filter(
      bucket => !buckets?.some(b => b.name === bucket)
    );
    
    if (missingBuckets.length > 0) {
      console.warn('Missing required buckets:', missingBuckets);
    }
    
    return true;
  } catch (error) {
    console.error('Error connecting to Supabase storage:', error);
    toast.error('Error connecting to Supabase storage');
    return false;
  }
}

// Test a specific bucket's accessibility
export async function testBucket(bucketName: string): Promise<boolean> {
  try {
    console.log(`Testing bucket: ${bucketName}`);
    
    // Check if bucket exists
    const { data: buckets, error: bucketsError } = await supabase
      .storage
      .listBuckets();
      
    if (bucketsError) {
      console.error(`Error listing buckets:`, bucketsError);
      return false;
    }
    
    const bucket = buckets?.find(b => b.name === bucketName);
    if (!bucket) {
      console.error(`Bucket '${bucketName}' not found`);
      return false;
    }
    
    // Try to list files
    const { data: files, error: listError } = await supabase
      .storage
      .from(bucketName)
      .list('');
      
    if (listError) {
      console.error(`Error listing files in ${bucketName}:`, listError);
      return false;
    }
    
    console.log(`Successfully accessed ${bucketName} bucket. Found ${files?.length || 0} files.`);
    
    if (files && files.length > 0) {
      console.log(`Files in ${bucketName}:`, files.map(f => f.name).join(', '));
      
      // Test the first file's URL
      const fileName = files[0].name;
      const publicUrl = getImageUrl(bucketName, fileName);
      
      const urlTest = await verifyImageUrls([publicUrl]);
      if (!urlTest[publicUrl]) {
        console.error(`Public URL for ${fileName} is not accessible`);
        return false;
      }
      
      console.log(`Public URL for ${fileName} is accessible`);
    }
    
    return true;
  } catch (error) {
    console.error(`Error testing bucket ${bucketName}:`, error);
    return false;
  }
}

export { BUCKETS };
