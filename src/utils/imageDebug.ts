
// This utility helps debug image loading issues

/**
 * Logs whether an image loaded successfully or failed
 */
export const logImageStatus = (imagePath: string, success: boolean) => {
  console.log(
    `Image ${success ? '✅' : '❌'} ${imagePath} ${success ? 'loaded' : 'failed to load'}`
  );
  
  if (!success) {
    // Log additional information that might help debug the issue
    console.error(`Failed to load image: ${imagePath}`);
    console.info('Current origin:', window.location.origin);
    console.info('Image absolute path would be:', new URL(imagePath, window.location.origin).href);
  }
  
  return success;
};

/**
 * Preloads an image and returns a promise that resolves with success/failure
 */
export const preloadImage = (src: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      logImageStatus(src, true);
      resolve(true);
    };
    img.onerror = () => {
      logImageStatus(src, false);
      resolve(false);
    };
    img.src = src;
  });
};

/**
 * Test all image URLs in an array and log results
 */
export const testImageUrls = async (imageUrls: string[]): Promise<void> => {
  console.log('Testing image URLs:', imageUrls);
  
  for (const url of imageUrls) {
    await preloadImage(url);
  }
};
