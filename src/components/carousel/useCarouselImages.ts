
import { useState, useEffect } from 'react';
import { defaultTourImages, ImageReplacement } from './carouselData';

export function useCarouselImages() {
  const [imageSources, setImageSources] = useState(defaultTourImages);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  
  // Pre-check all images to make sure they load
  useEffect(() => {
    console.log("Tour images in carousel:", imageSources.map(img => img.src));
    
    defaultTourImages.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        console.log(`✅ Image loaded: ${image.src}`);
        setImagesLoaded(prev => ({...prev, [index]: true}));
      };
      img.onerror = () => {
        console.error(`❌ Image failed to load: ${image.src}`);
        setImagesLoaded(prev => ({...prev, [index]: false}));
      };
      img.src = image.src;
    });
  }, []);

  // Function to replace a single image
  const replaceImage = (index: number, newSrc: string) => {
    console.log(`Replacing image at index ${index} with ${newSrc}`);
    
    setImageSources(current => {
      const updated = [...current];
      updated[index] = { ...updated[index], src: newSrc };
      return updated;
    });
    
    // Also check if the new image loads
    const img = new Image();
    img.onload = () => {
      console.log(`✅ Replacement image loaded: ${newSrc}`);
      setImagesLoaded(prev => ({...prev, [index]: true}));
    };
    img.onerror = () => {
      console.error(`❌ Replacement image failed to load: ${newSrc}`);
      setImagesLoaded(prev => ({...prev, [index]: false}));
    };
    img.src = newSrc;
  };

  // Function to replace multiple images at once
  const replaceMultipleImages = (replacements: ImageReplacement[]) => {
    console.log(`Replacing ${replacements.length} images`);
    
    setImageSources(current => {
      const updated = [...current];
      replacements.forEach(({ index, newSrc }) => {
        if (index >= 0 && index < updated.length) {
          updated[index] = { ...updated[index], src: newSrc };
          
          // Check if the new image loads
          const img = new Image();
          img.onload = () => {
            console.log(`✅ Replacement image loaded: ${newSrc}`);
            setImagesLoaded(prev => ({...prev, [index]: true}));
          };
          img.onerror = () => {
            console.error(`❌ Replacement image failed to load: ${newSrc}`);
            setImagesLoaded(prev => ({...prev, [index]: false}));
          };
          img.src = newSrc;
        }
      });
      return updated;
    });
  };

  // Expose helper functions for console use
  useEffect(() => {
    console.log("To replace images from the console, use:");
    console.log("const carousel = document.querySelector('.carousel-component');");
    console.log("const replaceImg = carousel.__replaceImage;");
    console.log("replaceImg(0, 'your-image-url-here'); // Replace first image");
    console.log("");
    console.log("Or for multiple images:");
    console.log("const replaceMultiple = carousel.__replaceMultipleImages;");
    console.log("replaceMultiple([{index: 0, newSrc: 'url1'}, {index: 1, newSrc: 'url2'}]);");
    
    // Expose the replacement functions for console use
    const carouselElement = document.querySelector('.carousel-component');
    if (carouselElement) {
      (carouselElement as any).__replaceImage = replaceImage;
      (carouselElement as any).__replaceMultipleImages = replaceMultipleImages;
    }
  }, []);

  return {
    imageSources,
    imagesLoaded,
    replaceImage,
    replaceMultipleImages
  };
}
