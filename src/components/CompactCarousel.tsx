
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from '@/hooks/use-mobile';

interface CompactCarouselProps {
  images: { url: string; alt: string }[];
}

const CompactCarousel: React.FC<CompactCarouselProps> = ({ images }) => {
  const isMobile = useIsMobile();

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
                    onError={(e) => {
                      console.error(`Error loading image: ${image.url}`);
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
