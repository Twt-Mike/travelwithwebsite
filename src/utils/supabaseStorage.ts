
/**
 * Central export file for all Supabase storage utilities
 * This maintains backward compatibility while allowing for modular organization
 */

// Re-export everything from the modular files
export { BUCKETS } from './supabase/constants';
export { 
  checkBucketExists,
  testSupabaseStorageConnection,
  testBucket,
  listBucketFiles
} from './supabase/bucketUtils';
export { 
  getAltTextForImage,
  verifyImageUrls,
  getPublicImageUrl
} from './supabase/imageUtils';
export { 
  getImagesFromBucket,
  getHomepagePhotos,
  type BucketImagesResult
} from './supabase/imagesAPI';

// The main file is now much smaller and easier to maintain!
