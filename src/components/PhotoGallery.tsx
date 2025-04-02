
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image, Images, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const tourPhotos = [
  {
    src: '/public/lovable-uploads/631cae86-0380-474a-8d28-e5c3279b1f75.png',
    alt: 'Group of travelers in kimonos posing in front of traditional Japanese building',
    caption: 'Our group enjoying a kimono experience in Kyoto'
  },
  {
    src: '/public/lovable-uploads/fd61c39b-8af5-4bf8-b89f-41124ae11f4c.png',
    alt: 'Group photo at Dotonbori in Osaka with neon signs in background',
    caption: 'Taking in the vibrant energy of Dotonbori in Osaka'
  },
  {
    src: '/public/lovable-uploads/9abf267f-565f-4115-aa8a-4e13d94ae178.png',
    alt: 'Group photo at Arashiyama Bamboo Forest in Kyoto',
    caption: 'Exploring the magical Arashiyama Bamboo Forest'
  },
  {
    src: '/public/lovable-uploads/23b752e1-79a5-4bdd-a621-524ec294f9c0.png',
    alt: 'Red pagoda temple with autumn trees',
    caption: 'Discovering Japan\'s stunning temple architecture'
  },
  {
    src: '/public/lovable-uploads/a59319ad-1dd2-47b5-83c7-cde5d9d7c1fd.png',
    alt: 'Woman looking at city view from window at night',
    caption: 'Taking in Tokyo\'s dazzling nightscape'
  },
  {
    src: '/public/lovable-uploads/c3a655bd-5fa5-45e7-8d10-0560af6aa958.png',
    alt: 'Woman in traditional kimono',
    caption: 'Experience wearing a traditional Japanese kimono'
  },
  {
    src: '/public/lovable-uploads/4d093c78-b110-4e0c-aa42-bcff7a34daeb.png',
    alt: 'Woman sitting with view of Kinkaku-ji Golden Pavilion',
    caption: 'Admiring the iconic Kinkaku-ji Golden Pavilion in Kyoto'
  },
  {
    src: '/public/lovable-uploads/287f4b7e-a1e9-4ed3-afc2-d06510cd0eca.png',
    alt: 'Temple building with traditional Japanese architecture',
    caption: 'Discovering hidden temples away from the crowds'
  },
  {
    src: '/public/lovable-uploads/a68155f1-e4ca-43b2-b4a0-0fe2985b695e.png',
    alt: 'Japanese sushi plates and dishes',
    caption: 'Indulging in authentic Japanese cuisine'
  },
  {
    src: '/public/lovable-uploads/69be1cf2-7a2c-4284-947e-0e2f5f55c5ee.png',
    alt: 'Elderly Japanese woman preparing traditional street food',
    caption: 'Meeting locals and experiencing authentic street food'
  },
  {
    src: '/public/lovable-uploads/c530b749-edd3-4e48-9e0d-5ad658c1d11b.png',
    alt: 'Woman in interactive light museum exhibit',
    caption: 'Visiting the TeamLab digital art museum in Tokyo'
  }
];

const PhotoGallery = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setIsFullScreen(true);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === tourPhotos.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? tourPhotos.length - 1 : prev - 1));
  };

  const handleClose = () => {
    setIsFullScreen(false);
  };

  // Keyboard controls for fullscreen mode
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isFullScreen) {
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrevious();
      if (event.key === 'Escape') handleClose();
    }
  };

  return (
    <section className="py-16 bg-japan-cream relative" onKeyDown={handleKeyDown} tabIndex={0}>
      <div className="japan-container">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Images size={24} className="text-japan-indigo" />
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo">
              Create Memories Like These
            </h2>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Explore moments from previous influencer-hosted trips. Your journey will be uniquely yours, but equally memorable.
            <br /><span className="text-sm italic">(Note: Photos provided by guests who granted permission or owned by us.)</span>
          </p>
        </div>
        
        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {tourPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => handleThumbnailClick(index)}
            >
              <AspectRatio ratio={1} className="bg-gray-100">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Gallery */}
      {isFullScreen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-[60]"
            aria-label="Close gallery"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 z-[60]"
            aria-label="Previous image"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="max-w-4xl w-full max-h-[80vh] relative">
            <img 
              src={tourPhotos[activeIndex].src} 
              alt={tourPhotos[activeIndex].alt} 
              className="object-contain w-full h-auto max-h-[80vh] mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
              {tourPhotos[activeIndex].caption}
            </div>
          </div>

          <button 
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 z-[60]"
            aria-label="Next image"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center">
            <div className="flex gap-2">
              {tourPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-colors",
                    index === activeIndex ? "bg-white" : "bg-gray-500 hover:bg-gray-300"
                  )}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Mobile Carousel - Visible on smaller screens */}
      <div className="mt-8 md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {tourPhotos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <AspectRatio ratio={1} className="bg-gray-100 rounded-lg overflow-hidden">
                    <img 
                      src={photo.src} 
                      alt={photo.alt} 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                  <p className="text-center text-sm mt-2 text-gray-700">
                    {photo.caption}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </section>
  );
};

export default PhotoGallery;
