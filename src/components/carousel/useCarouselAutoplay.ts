
import { useState, useEffect, useRef, useCallback } from 'react';

export function useCarouselAutoplay(api: any) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    autoplayRef.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 5000); // Increased from 3500 to 5000ms for better viewing of larger images
  }, [api]);
  
  useEffect(() => {
    if (!api) return;
    
    startAutoplay();
    
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      api.off('select', onSelect);
    };
  }, [api, startAutoplay]);
  
  const handleMouseEnter = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  
  const handleMouseLeave = () => {
    startAutoplay();
  };

  return {
    currentSlide,
    handleMouseEnter,
    handleMouseLeave,
    startAutoplay
  };
}
