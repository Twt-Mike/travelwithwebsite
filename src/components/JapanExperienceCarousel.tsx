
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCarouselImages } from './carousel/useCarouselImages';
import { useCarouselAutoplay } from './carousel/useCarouselAutoplay';
import CarouselFullScreenDialog from './carousel/CarouselFullScreenDialog';

// Debug logging to help identify image loading issues
console.log("Loading JapanExperienceCarousel component");

const JapanExperienceCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
  const { imageSources } = useCarouselImages();
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
                  isMobile ? "basis-3/4" : "basis-1/4", // Slightly larger images
                  currentSlide === index ? "scale-125 z-10" : "opacity-70 hover:opacity-90"
                )}
                onClick={() => openImageDialog(index)}
              >
                <div className="overflow-hidden rounded-md">
                  <AspectRatio ratio={4/3} className="bg-gray-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.error(`Image failed to load: ${image.src}`);
                        // Fallback to a guaranteed working Unsplash image
                        (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-149${3976040374 + index}-85c8e12f0c0e?q=80&w=800`;
                      }}
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
        imageSources={imageSources}
        closeImageDialog={closeImageDialog}
        navigateFullscreen={navigateFullscreen}
      />
    </div>
  );
};

export default JapanExperienceCarousel;
