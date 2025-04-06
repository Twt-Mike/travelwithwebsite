
/**
 * Returns a fallback image when a source image fails to load
 */
export const getFallbackImage = (index: number): string => {
  return 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjFmMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==';
};

/**
 * Logs image loading status to console for debugging purposes
 * @param imageSrc The source URL of the image
 * @param success Whether the image loaded successfully
 */
export const logImageStatus = (imageSrc: string, success: boolean): void => {
  if (success) {
    console.log(`✅ Image loaded successfully: ${imageSrc}`);
  } else {
    console.error(`❌ Failed to load image: ${imageSrc}`);
  }
};
