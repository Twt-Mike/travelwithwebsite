
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCarouselImages } from './carousel/useCarouselImages';
import { useCarouselAutoplay } from './carousel/useCarouselAutoplay';
import CarouselFullScreenDialog from './carousel/CarouselFullScreenDialog';
import { getFallbackImage } from '@/utils/imageDebug';

const JapanExperienceCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadErrors, setLoadErrors] = useState<Record<number, boolean>>({});
  const isMobile = useIsMobile();
  
  const { imageSources, isLoading } = useCarouselImages();
  const { currentSlide, handleMouseEnter, handleMouseLeave, startAutoplay } = useCarouselAutoplay(api);
  
  const openImageDialog = (index: number) => {
    setSelectedImage(index);
    if (api) {
      const autoplayPause = api.plugins().autoplay?.stop;
      if (typeof autoplayPause === 'function') autoplayPause();
    }
  };
  
  const closeImageDialog = () => {
    setSelectedImage(null);
    startAutoplay();
  };
  
  const navigateFullscreen = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((prev) => 
        prev === imageSources.length - 1 ? 0 : (prev as number) + 1
      );
    } else {
      setSelectedImage((prev) => 
        prev === 0 ? imageSources.length - 1 : (prev as number) - 1
      );
    }
  };
  
  const handleImageError = (index: number) => {
    setLoadErrors(prev => ({...prev, [index]: true}));
  };

  if (isLoading) {
    return (
      <div className="py-8 text-center">
        <h3 className="text-center text-2xl mb-6 text-gray-700 font-medium">Loading images...</h3>
        <div className="w-full flex justify-center">
          <div className="animate-pulse bg-gray-200 h-64 w-64 rounded-lg"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      <h3 className="text-center text-2xl mb-6 text-gray-700 font-medium">Experience Japan with your community</h3>
      
      <div 
        className="relative w-full max-w-6xl mx-auto px-2 md:px-6 carousel-component" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <Carousel 
          opts={{ 
            align: "center",
            loop: true,
            containScroll: false,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="flex items-center">
            {imageSources.map((image, index) => (
              <CarouselItem 
                key={index} 
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  isMobile ? "basis-3/4" : "basis-1/4", // Exactly 4 images on desktop
                  currentSlide === index ? "scale-105 z-10" : "opacity-85 hover:opacity-100"
                )}
                onClick={() => openImageDialog(index)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <AspectRatio ratio={2/3} className="bg-gray-100 overflow-hidden">
                    <img
                      src={loadErrors[index] ? getFallbackImage(index) : image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      onError={() => handleImageError(index)}
                    />
                  </AspectRatio>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <CarouselPrevious className="pointer-events-auto h-12 w-12 rounded-full opacity-70 hover:opacity-100" />
            <CarouselNext className="pointer-events-auto h-12 w-12 rounded-full opacity-70 hover:opacity-100" />
          </div>
        </Carousel>
      </div>
      
      <CarouselFullScreenDialog
        selectedImage={selectedImage}
        imageSources={imageSources.map((img, idx) => ({
          ...img,
          src: loadErrors[idx] ? getFallbackImage(idx) : img.src
        }))}
        closeImageDialog={closeImageDialog}
        navigateFullscreen={navigateFullscreen}
      />
    </div>
  );
};

export default JapanExperienceCarousel;
