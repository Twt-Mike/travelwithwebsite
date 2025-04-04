import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const BUCKETS = {
  TOWNPHOTOS: 'townphotos',
  CAROUSEL: 'carousel-images',
  IP: 'ip',
  HOMEPAGEPHOTOS: 'homepagephotos'
};

// Get images from a specific bucket
export async function getImagesFromBucket(bucketName: string) {
  try {
    console.log(`Getting images from bucket: ${bucketName}`);
    
    // List files in the bucket
    const { data: files, error: listError } = await supabase
      .storage
      .from(bucketName)
      .list('', {
        sortBy: { column: 'name', order: 'asc' }
      });
    
    if (listError) {
      console.error(`Error listing files in '${bucketName}':`, listError);
      return {
        photos: [],
        error: `Failed to list files in bucket: ${listError.message}`
      };
    }
    
    if (!files || files.length === 0) {
      console.warn(`No files found in '${bucketName}' bucket`);
      return {
        photos: [],
        error: `No files found in '${bucketName}' bucket`
      };
    }
    
    console.log(`Found ${files.length} files in '${bucketName}':`, files.map(f => f.name).join(', '));
    
    // Filter for image files only
    const supportedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'JPG', 'JPEG'];
    const imageFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return supportedExtensions.includes(extension || '');
    });
    
    if (imageFiles.length === 0) {
      console.warn(`No image files found in '${bucketName}' bucket`);
      return {
        photos: [],
        error: `No image files found in '${bucketName}' bucket`
      };
    }
    
    console.log(`Found ${imageFiles.length} image files out of ${files.length} total files`);
    
    // Convert files to photo objects with URLs
    const photos = imageFiles.map(file => {
      const { data } = supabase.storage.from(bucketName).getPublicUrl(file.name);
      const publicUrl = data?.publicUrl || '';
      const altText = getAltTextForImage(file.name);
      
      console.log(`Processing image: ${file.name} → ${publicUrl}`);
      
      return {
        src: publicUrl,
        alt: altText
      };
    });
    
    // Filter out any photos with missing URLs
    const validPhotos = photos.filter(photo => photo.src);
    
    if (validPhotos.length === 0) {
      console.error('No valid photos found (all URLs failed to generate)');
      return {
        photos: [],
        error: 'Failed to generate valid URLs for the images'
      };
    }
    
    console.log(`Successfully processed ${validPhotos.length} photos from '${bucketName}' bucket`);
    return {
      photos: validPhotos,
      error: null
    };
  } catch (error) {
    console.error('Unexpected error getting images from bucket:', error);
    return {
      photos: [],
      error: `Unexpected error: ${error instanceof Error ? error.message : String(error)}`
    };
  }
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
    
    // Debug: Log all available buckets to help diagnose issues
    console.log(`Available buckets:`, buckets?.map(b => b.name).join(', '));
    
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
    toast.success('Successfully connected to Supabase storage');
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
    toast.success(`Successfully accessed ${bucketName} bucket`);
    
    return true;
  } catch (error) {
    console.error(`Error testing bucket ${bucketName}:`, error);
    return false;
  }
}

// Get homepage photos from the homepagephotos bucket (keeping this for backwards compatibility)
export async function getHomepagePhotos() {
  return getImagesFromBucket(BUCKETS.IP);
}

// For backwards compatibility with useCarouselImages.ts
export function getPublicImageUrl(fileName: string): string {
  const { data } = supabase.storage.from(BUCKETS.CAROUSEL).getPublicUrl(fileName);
  return data?.publicUrl || '';
}

export { BUCKETS };

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
