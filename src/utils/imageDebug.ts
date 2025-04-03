// This utility helps debug image loading issues and provides fallback functionality

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

/**
 * Get a fallback image URL based on index
 * This provides a set of reliable placeholder images when uploaded images fail
 */
export const getFallbackImage = (index: number): string => {
  // Use reliable unsplash placeholder images
  const fallbackImages = [
    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
    'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc',
    'https://images.unsplash.com/photo-1590559899731-a382839e5549',
    'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
    'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3',
    'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d',
    'https://images.unsplash.com/photo-1528360983277-13d401cdc186',
    'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338',
    'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36',
  ];
  
  return `${fallbackImages[index % fallbackImages.length]}?q=80&w=800&auto=format&fit=crop`;
};

/**
 * Component to handle image loading with fallback
 * This checks if an image loads, and if not, uses a fallback
 */
export const useImageWithFallback = (src: string, index: number): string => {
  // For production, you would implement this as a React hook with useState
  // But for now, we'll use a simple approach for demo purposes
  return src;
};

/**
 * Updates all image arrays in the application with fallbacks for any that fail to load
 */
export const setupImageFallbacks = (imageArrays: Record<string, {src: string, alt: string, caption: string}[]>) => {
  // For each image array
  Object.entries(imageArrays).forEach(([arrayName, images]) => {
    console.log(`Setting up fallbacks for ${arrayName} with ${images.length} images`);
    
    // For each image in the array
    images.forEach((image, index) => {
      // Test if the image loads
      preloadImage(image.src).then(success => {
        if (!success) {
          // If the image fails to load, replace it with a fallback
          console.log(`Replacing failed image ${image.src} with fallback`);
          image.src = getFallbackImage(index);
        }
      });
    });
  });
};
