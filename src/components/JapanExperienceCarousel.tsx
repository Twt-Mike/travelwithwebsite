
import { useState, useEffect, useRef, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

const tourImages = [
  {
    src: '/public/lovable-uploads/50a813be-bf94-4c5d-bae3-e06056c3ef84.png',
    alt: 'Group of friends at an Irish pub in Japan',
    caption: 'Enjoying local nightlife with friends'
  },
  {
    src: '/public/lovable-uploads/b7c8e478-d29b-45ac-90ae-fdb4ffda39e6.png',
    alt: 'Red torii gates at Fushimi Inari shrine',
    caption: 'Exploring the famous torii gates at Fushimi Inari'
  },
  {
    src: '/public/lovable-uploads/9ce8fa14-5c49-403e-9193-da5328bfa12a.png',
    alt: 'Group in kimonos in Kyoto',
    caption: 'Experiencing traditional kimono wearing in historic Kyoto'
  },
  {
    src: '/public/lovable-uploads/8bc66f8b-37f2-42ae-bf40-387256a40acc.png',
    alt: 'Men in traditional Japanese robes',
    caption: 'Immersing in Japanese culture with traditional yukata'
  },
  {
    src: '/public/lovable-uploads/b98facf5-77cc-400f-9f97-d2c6c607bea3.png',
    alt: 'Cherry blossoms and deer in Nara',
    caption: 'Nara Park: where cherry blossoms and friendly deer create magic'
  },
  {
    src: '/public/lovable-uploads/c0b32cc9-3717-464f-8906-36e4c7d7e74d.png',
    alt: 'Japanese tea ceremony',
    caption: 'Participating in an authentic Japanese tea ceremony'
  },
  {
    src: '/public/lovable-uploads/915b5a51-ac59-4768-8338-e46e60d70eaf.png',
    alt: 'Group in colorful kimonos',
    caption: 'Creating memories with friends in beautiful kimono'
  },
  {
    src: '/public/lovable-uploads/ed939812-a386-4d06-b195-5824fc4f6dbe.png',
    alt: 'Group at Arashiyama Bamboo Forest',
    caption: 'Exploring the magical Arashiyama Bamboo Forest'
  }
];

const JapanExperienceCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Auto-scroll functionality
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    
    autoplayRef.current = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 3000); // Change image every 3 seconds
  }, [api]);
  
  // Set up autoplay when component mounts or api changes
  useEffect(() => {
    if (!api) return;
    
    startAutoplay();
    
    // Track the current slide
    const onSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on('select', onSelect);
    
    // Cleanup
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      api.off('select', onSelect);
    };
  }, [api, startAutoplay]);
  
  // Pause autoplay when user interacts with carousel
  const handleMouseEnter = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  
  // Resume autoplay when user leaves carousel
  const handleMouseLeave = () => {
    startAutoplay();
  };
  
  // Open image dialog when clicked
  const openImageDialog = (index: number) => {
    setSelectedImage(index);
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };
  
  // Close dialog and resume autoplay
  const closeImageDialog = () => {
    setSelectedImage(null);
    startAutoplay();
  };

  return (
    <div className="py-4">
      <h3 className="text-center text-xl mb-3 text-gray-700 font-medium">Experience Japan with your community</h3>
      
      <div className="w-full max-w-3xl mx-auto" 
           onMouseEnter={handleMouseEnter} 
           onMouseLeave={handleMouseLeave}>
        <Carousel 
          opts={{ 
            align: "center",
            loop: true,
          }}
          setApi={setApi}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {tourImages.map((image, index) => (
              <CarouselItem 
                key={index} 
                className={cn(
                  "pl-2 md:pl-4 cursor-pointer transition-all duration-300 md:basis-1/3 lg:basis-1/4",
                  currentSlide === index ? "md:scale-110" : "md:opacity-70"
                )}
                onClick={() => openImageDialog(index)}
              >
                <div className="overflow-hidden rounded-md">
                  <AspectRatio ratio={1/1} className="bg-gray-100 overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <p className="text-xs text-center mt-1 text-gray-600">{currentSlide === index ? image.caption : ""}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-2">
            <CarouselPrevious className="relative inset-auto translate-y-0 static h-7 w-7" />
            <CarouselNext className="relative inset-auto translate-y-0 static h-7 w-7" />
          </div>
        </Carousel>
      </div>
      
      {/* Image Dialog for expanded view */}
      <Dialog open={selectedImage !== null} onOpenChange={(open) => {
        if (!open) closeImageDialog();
      }}>
        <DialogContent className="sm:max-w-2xl max-h-[90vh] p-0 bg-transparent border-none shadow-none">
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
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JapanExperienceCarousel;
