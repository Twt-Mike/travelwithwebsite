
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';

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
  return (
    <div className="py-10">
      <h3 className="text-center text-xl mb-6 text-gray-700 font-medium">Experience Japan with your community</h3>
      
      <div className="hidden md:block">
        <Carousel className="w-full max-w-6xl mx-auto">
          <CarouselContent>
            {tourImages.map((image, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <AspectRatio ratio={4/3} className="bg-gray-100 overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                  </AspectRatio>
                  <p className="text-sm text-center mt-2 text-gray-600">{image.caption}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-end gap-2 mt-4">
            <CarouselPrevious className="relative inset-auto translate-y-0 static" />
            <CarouselNext className="relative inset-auto translate-y-0 static" />
          </div>
        </Carousel>
      </div>
      
      {/* Mobile carousel - shows one image at a time */}
      <div className="md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {tourImages.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={4/3} className="bg-gray-100 overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <p className="text-sm text-center mt-2 text-gray-600">{image.caption}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center gap-2 mt-4">
            <CarouselPrevious className="relative inset-auto translate-y-0 static" />
            <CarouselNext className="relative inset-auto translate-y-0 static" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default JapanExperienceCarousel;
