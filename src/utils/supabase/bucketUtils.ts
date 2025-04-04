
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

/**
 * Check if a bucket exists, show appropriate notifications
 */
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

/**
 * Test connectivity to Supabase storage
 */
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

/**
 * Test a specific bucket's accessibility
 */
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

/**
 * Lists all files in a bucket
 */
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
