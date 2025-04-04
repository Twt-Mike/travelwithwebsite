
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
    console.log(`Checking if bucket ${bucketName} exists...`);
    
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
    
    console.log(`Bucket ${bucketName} exists.`);
    return true;
  } catch (error) {
    console.error(`Error checking bucket ${bucketName}:`, error);
    return false;
  }
}

// Get public URL for an image in a bucket
export function getImageUrl(bucketName: string, fileName: string): string {
  try {
    if (!bucketName || !fileName) {
      console.error('Invalid bucket name or file name provided to getImageUrl');
      return '';
    }
    
    const { data } = supabase
      .storage
      .from(bucketName)
      .getPublicUrl(fileName);
    
    if (!data || !data.publicUrl) {
      console.error(`Failed to get public URL for ${fileName} in ${bucketName}`);
      return '';
    }
    
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
    // Check if bucket exists
    const bucketExists = await checkBucketExists(BUCKETS.CAROUSEL);
    if (!bucketExists) {
      console.error(`Carousel images bucket '${BUCKETS.CAROUSEL}' doesn't exist or isn't accessible`);
      return [];
    }
    
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
    
    // Check if bucket exists first
    const bucketExists = await checkBucketExists(BUCKETS.HOMEPAGEPHOTOS);
    if (!bucketExists) {
      console.error(`Homepage photos bucket '${BUCKETS.HOMEPAGEPHOTOS}' doesn't exist or isn't accessible`);
      toast.error('Failed to access homepage photos');
      return [];
    }
    
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
      const isImage = ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '');
      if (!isImage) {
        console.log(`Skipping non-image file: ${file.name}`);
      }
      return isImage;
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
      
      if (!publicUrl) {
        console.error(`Failed to generate public URL for ${file.name}`);
      }
      
      return {
        src: publicUrl,
        alt: altText,
        caption: altText
      };
    });
    
    // Filter out any photos with missing URLs
    const validPhotos = photos.filter(photo => photo.src);
    
    if (validPhotos.length === 0) {
      console.error('No valid photos found (all URLs failed to generate)');
      return [];
    }
    
    console.log(`Successfully processed ${validPhotos.length} photos from homepagephotos bucket`);
    return validPhotos;
  } catch (error) {
    console.error('Error in getHomepagePhotos:', error);
    toast.error('Error loading photos');
    return [];
  }
}

// Lists all files in a bucket
export async function listBucketFiles(bucketName: string) {
  try {
    // Check if bucket exists first
    const bucketExists = await checkBucketExists(bucketName);
    if (!bucketExists) {
      console.error(`Cannot list files: Bucket '${bucketName}' doesn't exist or isn't accessible`);
      return [];
    }
    
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
    if (!url) {
      console.error('Attempted to verify empty URL');
      results['empty'] = false;
      continue;
    }
    
    try {
      console.log(`Verifying image URL: ${url}`);
      const response = await fetch(url, { method: 'HEAD' });
      results[url] = response.ok;
      console.log(`Image URL check: ${url} - ${response.ok ? 'OK' : 'FAILED'} (status: ${response.status})`);
      
      if (!response.ok) {
        console.error(`Image failed verification with status: ${response.status}`);
      }
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
    console.log('Testing connection to Supabase storage...');
    const { data: buckets, error } = await supabase
      .storage
      .listBuckets();
    
    if (error) {
      console.error('Failed to connect to Supabase storage:', error);
      toast.error('Failed to connect to Supabase storage');
      return false;
    }
    
    console.log('Successfully connected to Supabase storage');
    console.log('Available storage buckets:', buckets?.map(b => b.name));
    
    // Check for our required buckets
    const requiredBuckets = [BUCKETS.HOMEPAGEPHOTOS, BUCKETS.CAROUSEL];
    const availableBuckets = buckets?.map(b => b.name) || [];
    
    const missingBuckets = requiredBuckets.filter(
      bucket => !availableBuckets.includes(bucket)
    );
    
    if (missingBuckets.length > 0) {
      console.warn('Missing required buckets:', missingBuckets);
      toast.warning(`Some required storage buckets are missing: ${missingBuckets.join(', ')}`);
    } else {
      toast.success('Successfully connected to Supabase storage');
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
      
      if (!publicUrl) {
        console.error(`Failed to generate public URL for ${fileName}`);
        return false;
      }
      
      console.log(`Testing public URL for ${fileName}: ${publicUrl}`);
      const urlTest = await verifyImageUrls([publicUrl]);
      
      if (!urlTest[publicUrl]) {
        console.error(`Public URL for ${fileName} is not accessible`);
        
        // Test with direct URL to diagnose CORS/permissions issues
        const { data } = supabase.storage.from(bucketName).getPublicUrl(fileName);
        console.log(`Raw public URL data:`, data);
        
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
