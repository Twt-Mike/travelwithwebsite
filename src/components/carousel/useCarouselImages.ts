
import { useState, useEffect } from 'react';
import { carouselImages } from './carouselData';
import { logImageStatus } from '@/utils/imageDebug';
import { getImagesFromBucket, BUCKETS, getAltTextForImage } from '@/utils/supabaseStorage';

export function useCarouselImages() {
  const [imageSources, setImageSources] = useState(carouselImages);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isLoadingSupabaseImages, setIsLoadingSupabaseImages] = useState(false);
  
  // Pre-check all images to make sure they load
  useEffect(() => {
    imageSources.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        logImageStatus(image.url, true);
        setImagesLoaded(prev => ({...prev, [index]: true}));
      };
      img.onerror = () => {
        logImageStatus(image.url, false);
        setImagesLoaded(prev => ({...prev, [index]: false}));
      };
      img.src = image.url;
    });
  }, [imageSources]);

  // Function to replace a single image
  const replaceImage = (index: number, newSrc: string) => {
    setImageSources(current => {
      const updated = [...current];
      updated[index] = { ...updated[index], url: newSrc };
      return updated;
    });
    
    // Also check if the new image loads
    const img = new Image();
    img.onload = () => {
      logImageStatus(newSrc, true);
      setImagesLoaded(prev => ({...prev, [index]: true}));
    };
    img.onerror = () => {
      logImageStatus(newSrc, false);
      setImagesLoaded(prev => ({...prev, [index]: false}));
    };
    img.src = newSrc;
  };

  // Function to replace multiple images at once
  const replaceMultipleImages = (replacements: Array<{index: number, newSrc: string}>) => {
    setImageSources(current => {
      const updated = [...current];
      replacements.forEach(({ index, newSrc }) => {
        if (index >= 0 && index < updated.length) {
          updated[index] = { ...updated[index], url: newSrc };
          
          // Check if the new image loads
          const img = new Image();
          img.onload = () => {
            logImageStatus(newSrc, true);
            setImagesLoaded(prev => ({...prev, [index]: true}));
          };
          img.onerror = () => {
            logImageStatus(newSrc, false);
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
    replaceMultipleImages,
    isLoading: isLoadingSupabaseImages
  };
}
