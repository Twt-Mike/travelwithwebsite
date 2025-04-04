
import { useState, useEffect } from 'react';
import { defaultTourImages, ImageReplacement } from './carouselData';
import { logImageStatus } from '@/utils/imageDebug';
import { getImagesFromBucket, BUCKETS, getAltTextForImage } from '@/utils/supabaseStorage';

export function useCarouselImages() {
  const [imageSources, setImageSources] = useState(defaultTourImages);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isLoadingSupabaseImages, setIsLoadingSupabaseImages] = useState(true);
  
  // Fetch images from Supabase
  useEffect(() => {
    const fetchSupabaseImages = async () => {
      try {
        setIsLoadingSupabaseImages(true);
        const result = await getImagesFromBucket(BUCKETS.CAROUSEL);
        
        if (result.photos && result.photos.length > 0) {
          const supabaseImages = result.photos;
          
          // Immediately test each image URL
          supabaseImages.forEach(img => {
            const testImg = new Image();
            testImg.onload = () => console.log(`Image loaded successfully: ${img.src}`);
            testImg.onerror = () => console.error(`Failed to load image: ${img.src}`);
            testImg.src = img.src;
          });
          
          setImageSources(prevImages => {
            // Merge with default images if we don't have enough from Supabase
            if (supabaseImages.length < 8) {
              return [...supabaseImages, ...prevImages.slice(supabaseImages.length)];
            }
            return supabaseImages;
          });
          
          console.log('Successfully loaded Supabase images:', supabaseImages.length);
        } else {
          console.log('No images found in bucket, using default images');
        }
      } catch (error) {
        console.error('Error fetching Supabase images:', error);
      } finally {
        setIsLoadingSupabaseImages(false);
      }
    };
    
    fetchSupabaseImages();
  }, []);
  
  // Pre-check all images to make sure they load
  useEffect(() => {
    if (isLoadingSupabaseImages) return;
    
    imageSources.forEach((image, index) => {
      const img = new Image();
      img.onload = () => {
        logImageStatus(image.src, true);
        setImagesLoaded(prev => ({...prev, [index]: true}));
      };
      img.onerror = () => {
        logImageStatus(image.src, false);
        setImagesLoaded(prev => ({...prev, [index]: false}));
      };
      img.src = image.src;
    });
  }, [imageSources, isLoadingSupabaseImages]);

  // Function to replace a single image
  const replaceImage = (index: number, newSrc: string) => {
    setImageSources(current => {
      const updated = [...current];
      updated[index] = { ...updated[index], src: newSrc };
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
  const replaceMultipleImages = (replacements: ImageReplacement[]) => {
    setImageSources(current => {
      const updated = [...current];
      replacements.forEach(({ index, newSrc }) => {
        if (index >= 0 && index < updated.length) {
          updated[index] = { ...updated[index], src: newSrc };
          
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
