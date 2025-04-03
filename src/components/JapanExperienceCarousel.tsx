import { useState, useEffect, useRef, useCallback } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

// Debug logging to help identify image loading issues
console.log("Loading JapanExperienceCarousel component");

// Using reliable Unsplash URLs for the carousel images
const tourImages = [
  {
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186',
    alt: 'Group of friends at an Irish pub in Japan',
    caption: 'Enjoying local nightlife with friends'
  },
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    alt: 'Red torii gates at Fushimi Inari shrine',
    caption: 'Exploring the famous torii gates at Fushimi Inari'
  },
  {
    src: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3',
    alt: 'Group in kimonos in Kyoto',
    caption: 'Experiencing traditional kimono wearing in historic Kyoto'
  },
  {
    src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d',
    alt: 'Men in traditional Japanese robes',
    caption: 'Immersing in Japanese culture with traditional yukata'
  },
  {
    src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
    alt: 'Cherry blossoms and deer in Nara',
    caption: 'Nara Park: where cherry blossoms and friendly deer create magic'
  },
  {
    src: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9',
    alt: 'Japanese tea ceremony',
    caption: 'Participating in an authentic Japanese tea ceremony'
  },
  {
    src: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc',
    alt: 'Group in colorful kimonos',
    caption: 'Creating memories with friends in beautiful kimono'
  },
  {
    src: 'https://images.unsplash.com/photo-1590559899731-a382839e5549',
    alt: 'Group at Arashiyama Bamboo Forest',
    caption: 'Exploring the magical Arashiyama Bamboo Forest'
  }
];

// This type helps us manage image replacements
type ImageReplacement = {
  index: number;
  newSrc: string;
}

const JapanExperienceCarousel = () => {
  const [api, setApi] = useState<any>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  const [imageSources, setImageSources] = useState(tourImages);
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});
  
  // Simple check that we have the images loaded
  useEffect(() => {
    console.log("Tour images in carousel:", tourImages.map(img => img.src));
    
    // Pre-check all images to make sure they load
    tourImages.forEach((image, index) => {
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
        prev === imageSources.length - 1 ? 0 : (prev as number) + 1
      );
    } else {
      setSelectedImage((prev) => 
        prev === 0 ? imageSources.length - 1 : (prev as number) - 1
      );
    }
  };

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

  // New function to replace multiple images at once
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

  // Usage example in the console for easier reference
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
                  isMobile ? "basis-4/5" : "basis-1/3",
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
                  {currentSlide === index && (
                    <p className="text-sm text-center mt-3 text-gray-600 transition-opacity duration-300">
                      {image.caption}
                    </p>
                  )}
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
      
      <Dialog open={selectedImage !== null} onOpenChange={(open) => {
        if (!open) closeImageDialog();
      }}>
        <DialogContent className="sm:max-w-5xl max-h-[90vh] p-0 bg-transparent border-none shadow-none">
          {selectedImage !== null && (
            <div className="relative">
              <img 
                src={imageSources[selectedImage].src} 
                alt={imageSources[selectedImage].alt} 
                className="w-full h-auto rounded-md object-contain"
                onError={(e) => {
                  // Fallback for lightbox view
                  (e.target as HTMLImageElement).src = `https://images.unsplash.com/photo-149${3976040374 + selectedImage}-85c8e12f0c0e?q=80&w=1200`;
                }}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center rounded-b-md">
                {imageSources[selectedImage].caption}
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
