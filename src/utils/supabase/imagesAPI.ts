
import { supabase } from '@/integrations/supabase/client';
import { BUCKETS } from './constants';
import { getAltTextForImage } from './imageUtils';
import { checkBucketExists } from './bucketUtils';

/**
 * Type definition for the result of getImagesFromBucket
 */
export type BucketImagesResult = {
  photos: { src: string; alt: string }[];
  error: string | null;
};

/**
 * Get images from a specific bucket
 */
export async function getImagesFromBucket(bucketName: string): Promise<BucketImagesResult> {
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
    
    // Log the raw file list for debugging
    console.log(`Raw file list from '${bucketName}' bucket:`, files);
    
    if (!files || files.length === 0) {
      console.warn(`No files found in '${bucketName}' bucket`);
      return {
        photos: [],
        error: `No files found in '${bucketName}' bucket`
      };
    }
    
    console.log(`Found ${files.length} files in '${bucketName}':`, files.map(f => f.name).join(', '));
    
    // Filter for image files only
    const supportedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'JPG', 'JPEG', 'PNG'];
    const imageFiles = files.filter(file => {
      const extension = file.name.split('.').pop()?.toLowerCase();
      return supportedExtensions.includes(extension || '');
    });
    
    console.log(`After filtering by extension: ${imageFiles.length} image files found`);
    
    if (imageFiles.length === 0) {
      console.warn(`No image files found in '${bucketName}' bucket`);
      return {
        photos: [],
        error: `No image files found in '${bucketName}' bucket`
      };
    }
    
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

/**
 * Legacy function for backward compatibility
 */
export async function getHomepagePhotos() {
  return getImagesFromBucket(BUCKETS.IP);
}
