
import { useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCarouselAutoplay } from './carousel/useCarouselAutoplay';
import CarouselFullScreenDialog from './carousel/CarouselFullScreenDialog';

// Cherry blossom specific carousel images with direct URLs
const carouselImages = [
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/cherryblossom//cb5.JPG",
    alt: "Cherry blossom viewing in Japan"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/cherryblossom//cb1.jpg",
    alt: "Cherry blossoms in Japan"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/carousel-images//AnonSakuraPortraitSolo.jpg",
    alt: "Person enjoying sakura cherry blossoms"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/carousel-images//GroupJumpKimonoLanscape.jpg",
    alt: "Group jumping in kimonos"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/carousel-images//GroupPortraitBambooPikachu.jpg",
    alt: "Group portrait at bamboo forest with Pikachu"
  }
];

const CherryBlossomExperienceCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const isMobile = useIsMobile();
  
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
        prev === carouselImages.length - 1 ? 0 : (prev as number) + 1
      );
    } else {
      setSelectedImage((prev) => 
        prev === 0 ? carouselImages.length - 1 : (prev as number) - 1
      );
    }
  };

  return (
    <div className="py-8">
      <h3 className="text-center text-2xl mb-6 text-gray-700 font-medium">Experience Japan during Cherry Blossom Season</h3>
      
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
            {carouselImages.map((image, index) => (
              <CarouselItem 
                key={index} 
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  isMobile ? "basis-3/4" : "basis-1/3",
                  currentSlide === index ? "scale-105 z-10" : "opacity-85 hover:opacity-100"
                )}
                onClick={() => openImageDialog(index)}
              >
                <div className="overflow-hidden rounded-lg shadow-lg">
                  <AspectRatio ratio={2/3} className="bg-gray-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        console.error(`Error loading image at index ${index}:`, image.src);
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjFmMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==';
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
        imageSources={carouselImages}
        closeImageDialog={closeImageDialog}
        navigateFullscreen={navigateFullscreen}
      />
    </div>
  );
};

export default CherryBlossomExperienceCarousel;
