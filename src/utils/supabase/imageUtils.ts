
import { supabase } from '@/integrations/supabase/client';
import { BUCKETS } from './constants';

/**
 * Get alt text from file name by removing extension and replacing dashes/underscores with spaces
 */
export function getAltTextForImage(fileName: string): string {
  // Remove file extension
  const nameWithoutExtension = fileName.split('.').slice(0, -1).join('.');
  // Replace dashes and underscores with spaces, then capitalize words
  return nameWithoutExtension
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase());
}

/**
 * Verify image URLs work by preloading them
 */
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

/**
 * Get public URL for an image in a specified bucket
 */
export function getPublicImageUrl(fileName: string, bucketName = BUCKETS.CAROUSEL): string {
  const { data } = supabase.storage.from(bucketName).getPublicUrl(fileName);
  return data?.publicUrl || '';
}
