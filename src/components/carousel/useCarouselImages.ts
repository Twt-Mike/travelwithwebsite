
import { useState, useEffect } from 'react';
import { defaultTourImages, ImageReplacement } from './carouselData';
import { logImageStatus } from '@/utils/imageDebug';
import { getCarouselImages, getPublicImageUrl, getAltTextForImage } from '@/utils/supabaseStorage';

export function useCarouselImages() {
  const [imageSources, setImageSources] = useState(defaultTourImages);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  const [isLoadingSupabaseImages, setIsLoadingSupabaseImages] = useState(true);
  const [hasSupabaseImages, setHasSupabaseImages] = useState(false);
  
  // Fetch images from Supabase
  useEffect(() => {
    const fetchSupabaseImages = async () => {
      try {
        setIsLoadingSupabaseImages(true);
        const files = await getCarouselImages();
        
        if (files && files.length > 0) {
          const supabaseImages = files.map(file => ({
            src: getPublicImageUrl(file.name),
            alt: getAltTextForImage(file.name)
          }));
          
          setImageSources(prevImages => {
            // Merge with default images if we don't have enough from Supabase
            if (supabaseImages.length < 8) {
              return [...supabaseImages, ...prevImages.slice(supabaseImages.length)];
            }
            return supabaseImages;
          });
          
          console.log('Successfully loaded Supabase images:', supabaseImages.length);
          setHasSupabaseImages(true);
        } else {
          console.log('No images found in Supabase or error occurred, using default images');
          setHasSupabaseImages(false);
        }
      } catch (error) {
        console.error('Error fetching Supabase images:', error);
        setHasSupabaseImages(false);
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
    isLoading: isLoadingSupabaseImages,
    hasSupabaseImages
  };
}
