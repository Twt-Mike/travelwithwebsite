
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { getFallbackImage } from '@/utils/imageDebug';

// Images from Supabase
const CAROUSEL_IMAGES = [
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//20.jpeg",
    alt: "Japan Travel Experience 1"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//21.jpg",
    alt: "Japan Travel Experience 2" 
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//22.jpg",
    alt: "Japan Travel Experience 3"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//23.jpg",
    alt: "Japan Travel Experience 4"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//24.jpg",
    alt: "Japan Travel Experience 5"
  }
];

const CompactPhotoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  return (
    <section className="py-16 bg-japan-cream overflow-hidden">
      <div className="japan-container">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-serif font-medium text-japan-indigo mb-2">
            Experience Japan with Laura
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Preview the unforgettable moments awaiting you on this exclusive journey
          </p>
        </div>
        
        <div className="relative mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {CAROUSEL_IMAGES.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <div className="overflow-hidden rounded-lg shadow-md h-full">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
                        onError={(e) => {
                          console.error(`Error loading image: ${image.src}`);
                          (e.target as HTMLImageElement).src = getFallbackImage(index);
                        }}
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CompactPhotoCarousel;
