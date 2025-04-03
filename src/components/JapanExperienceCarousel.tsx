import { useState, useEffect, useRef, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const tourImages = [
  {
    src: '/lovable-uploads/50a813be-bf94-4c5d-bae3-e06056c3ef84.png',
    alt: 'Group of friends at an Irish pub in Japan',
    caption: 'Enjoying local nightlife with friends'
  },
  {
    src: '/lovable-uploads/b7c8e478-d29b-45ac-90ae-fdb4ffda39e6.png',
    alt: 'Red torii gates at Fushimi Inari shrine',
    caption: 'Exploring the famous torii gates at Fushimi Inari'
  },
  {
    src: '/lovable-uploads/9ce8fa14-5c49-403e-9193-da5328bfa12a.png',
    alt: 'Group in kimonos in Kyoto',
    caption: 'Experiencing traditional kimono wearing in historic Kyoto'
  },
  {
    src: '/lovable-uploads/8bc66f8b-37f2-42ae-bf40-387256a40acc.png',
    alt: 'Men in traditional Japanese robes',
    caption: 'Immersing in Japanese culture with traditional yukata'
  },
  {
    src: '/lovable-uploads/b98facf5-77cc-400f-9f97-d2c6c607bea3.png',
    alt: 'Cherry blossoms and deer in Nara',
    caption: 'Nara Park: where cherry blossoms and friendly deer create magic'
  },
  {
    src: '/lovable-uploads/c0b32cc9-3717-464f-8906-36e4c7d7e74d.png',
    alt: 'Japanese tea ceremony',
    caption: 'Participating in an authentic Japanese tea ceremony'
  },
  {
    src: '/lovable-uploads/915b5a51-ac59-4768-8338-e46e60d70eaf.png',
    alt: 'Group in colorful kimonos',
    caption: 'Creating memories with friends in beautiful kimono'
  },
  {
    src: '/lovable-uploads/ed939812-a386-4d06-b195-5824fc4f6dbe.png',
    alt: 'Group at Arashiyama Bamboo Forest',
    caption: 'Exploring the magical Arashiyama Bamboo Forest'
  }
];

const JapanExperienceCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    autoplayRef.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3500);
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
  
  const openImageDialog = (index: number) => {
    setSelectedImage(index);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  
  const closeImageDialog = () => {
    setSelectedImage(null);
    startAutoplay();
  };
  
  const navigateFullscreen = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    if (direction === 'next') {
      setSelectedImage((prev) => 
        prev === tourImages.length - 1 ? 0 : (prev as number) + 1
      );
    } else {
      setSelectedImage((prev) => 
        prev === 0 ? tourImages.length - 1 : (prev as number) - 1
      );
    }
  };

  return (
    <div className="py-6">
      <h3 className="text-center text-xl mb-4 text-gray-700 font-medium">Experience Japan with your community</h3>
      
      <div 
        className="relative w-full max-w-5xl mx-auto px-2 md:px-10" 
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
            {tourImages.map((image, index) => (
              <CarouselItem 
                key={index} 
                className={cn(
                  "cursor-pointer transition-all duration-300",
                  isMobile ? "basis-3/4" : "basis-1/4",
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
                    />
                  </AspectRatio>
                  {currentSlide === index && (
                    <p className="text-xs text-center mt-2 text-gray-600 transition-opacity duration-300">
                      {image.caption}
                    </p>
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none">
            <CarouselPrevious className="pointer-events-auto h-10 w-10 rounded-full opacity-70 hover:opacity-100" />
            <CarouselNext className="pointer-events-auto h-10 w-10 rounded-full opacity-70 hover:opacity-100" />
          </div>
        </Carousel>
      </div>
      
      <Dialog open={selectedImage !== null} onOpenChange={(open) => {
        if (!open) closeImageDialog();
      }}>
        <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 bg-transparent border-none shadow-none">
          {selectedImage !== null && (
            <div className="relative">
              <img 
                src={tourImages[selectedImage].src} 
                alt={tourImages[selectedImage].alt} 
                className="w-full h-auto rounded-md object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center rounded-b-md">
                {tourImages[selectedImage].caption}
              </div>
              
              <button 
                onClick={() => navigateFullscreen('prev')}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button 
                onClick={() => navigateFullscreen('next')}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              <button 
                onClick={closeImageDialog}
                className="absolute top-2 right-2 bg-black bg-opacity-50 rounded-full p-2 text-white hover:bg-opacity-70 transition-all"
                aria-label="Close lightbox"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JapanExperienceCarousel;
