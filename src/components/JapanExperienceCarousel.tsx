
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Slider } from '@/components/ui/slider';
import { useState, useEffect } from 'react';

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
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const handleSliderChange = (value: number[]) => {
    setCurrentSlide(value[0]);
  };

  return (
    <div className="py-6">
      <h3 className="text-center text-xl mb-4 text-gray-700 font-medium">Experience Japan with your community</h3>
      
      {/* Desktop carousel */}
      <div className="hidden md:block">
        <div className="w-full max-w-4xl mx-auto">
          <Carousel 
            opts={{ 
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => {
              if (api) {
                api.scrollTo(currentSlide);
              }
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {tourImages.map((image, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4">
                  <div className="overflow-hidden rounded-md">
                    <AspectRatio ratio={1/1} className="bg-gray-100 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      />
                    </AspectRatio>
                    <p className="text-xs text-center mt-1 text-gray-600">{image.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-end gap-2 mt-2">
              <CarouselPrevious className="relative inset-auto translate-y-0 static h-7 w-7" />
              <CarouselNext className="relative inset-auto translate-y-0 static h-7 w-7" />
            </div>
          </Carousel>
          
          <div className="w-full mt-4 px-4">
            <Slider
              value={[currentSlide]}
              max={tourImages.length - 1}
              step={1}
              onValueChange={handleSliderChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
      
      {/* Mobile carousel - compact version */}
      <div className="md:hidden">
        <div className="w-full max-w-xs mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            setApi={(api) => {
              if (api) {
                api.scrollTo(currentSlide);
              }
            }}
          >
            <CarouselContent>
              {tourImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="overflow-hidden rounded-md">
                    <AspectRatio ratio={1/1} className="bg-gray-100 overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full"
                      />
                    </AspectRatio>
                    <p className="text-xs text-center mt-1 text-gray-600">{image.caption}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-2">
              <CarouselPrevious className="relative inset-auto translate-y-0 static h-7 w-7" />
              <CarouselNext className="relative inset-auto translate-y-0 static h-7 w-7" />
            </div>
          </Carousel>
          
          <div className="w-full mt-4 px-2">
            <Slider
              value={[currentSlide]}
              max={tourImages.length - 1}
              step={1}
              onValueChange={handleSliderChange}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JapanExperienceCarousel;
