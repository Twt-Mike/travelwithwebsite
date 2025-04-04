
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const BUCKETS = {
  TOWNPHOTOS: 'townphotos',
  CAROUSEL: 'carousel-images'
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
    return true;
  } catch (error) {
    console.error('Error connecting to Supabase storage:', error);
    toast.error('Error connecting to Supabase storage');
    return false;
  }
}

export { BUCKETS };
