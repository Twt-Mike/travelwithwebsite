
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';
import { logImageStatus } from '@/utils/imageDebug';

interface CompactCarouselProps {
  images: { url: string; alt: string }[];
}

const CompactCarousel: React.FC<CompactCarouselProps> = ({ images }) => {
  const isMobile = useIsMobile();
  const [imagesPreloaded, setImagesPreloaded] = useState<Record<string, boolean>>({});

  // Preload images to ensure they're in the browser cache
  useEffect(() => {
    const preloadImages = async () => {
      const preloadStatus: Record<string, boolean> = {};

      for (const image of images) {
        try {
          // Create a new image to preload
          const img = new Image();
          
          img.onload = () => {
            console.log(`✅ Successfully preloaded: ${image.url}`);
            preloadStatus[image.url] = true;
            setImagesPreloaded(prev => ({...prev, [image.url]: true}));
          };
          
          img.onerror = () => {
            console.error(`❌ Failed to preload image: ${image.url}`);
            preloadStatus[image.url] = false;
            setImagesPreloaded(prev => ({...prev, [image.url]: false}));
          };
          
          img.src = image.url;
        } catch (error) {
          console.error(`Error preloading image ${image.url}:`, error);
          preloadStatus[image.url] = false;
          setImagesPreloaded(prev => ({...prev, [image.url]: false}));
        }
      }
    };

    preloadImages();
  }, [images]);

  // Log image URLs for debugging
  useEffect(() => {
    console.log("Images in carousel:", images.map(img => img.url));
    console.log("Cherry blossom image URLs:", 
      images.filter(img => img.url.includes('cherryblossom')).map(img => img.url));
  }, [images]);

  return (
    <section className="py-10 bg-white">
      <div className="japan-container">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="flex justify-center">
            {images.map((image, index) => (
              <CarouselItem key={index} className={`${isMobile ? 'basis-3/4' : 'basis-1/3'} md:basis-1/3`}>
                <div className="relative h-52 md:h-64 overflow-hidden rounded-lg">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    loading="eager" /* Change to eager loading for these important images */
                    onLoad={() => logImageStatus(image.url, true)}
                    onError={(e) => {
                      logImageStatus(image.url, false);
                      console.error(`Error loading image at index ${index}:`, image.url);
                      e.currentTarget.src = "/placeholder.svg";
                    }}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:left-4 bg-white/80" />
          <CarouselNext className="right-2 md:right-4 bg-white/80" />
        </Carousel>
      </div>
    </section>
  );
};

export default CompactCarousel;
