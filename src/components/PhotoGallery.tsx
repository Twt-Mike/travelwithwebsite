
import { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Image as ImageIcon, Images, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { logImageStatus, getFallbackImage } from '@/utils/imageDebug';

// Debug logging
console.log("Loading PhotoGallery component");

const tourPhotos = [
  {
    src: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    alt: 'Group of travelers in kimonos posing in front of traditional Japanese building',
    caption: 'Our group enjoying a kimono experience in Kyoto'
  },
  {
    src: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc',
    alt: 'Group photo at Dotonbori in Osaka with neon signs in background',
    caption: 'Taking in the vibrant energy of Dotonbori in Osaka'
  },
  {
    src: 'https://images.unsplash.com/photo-1590559899731-a382839e5549',
    alt: 'Group photo at Arashiyama Bamboo Forest in Kyoto',
    caption: 'Exploring the magical Arashiyama Bamboo Forest'
  },
  {
    src: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65',
    alt: 'Red pagoda temple with autumn trees',
    caption: 'Discovering Japan\'s stunning temple architecture'
  },
  {
    src: 'https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3',
    alt: 'Woman looking at city view from window at night',
    caption: 'Taking in Tokyo\'s dazzling nightscape'
  },
  {
    src: 'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d',
    alt: 'Woman in traditional kimono',
    caption: 'Experience wearing a traditional Japanese kimono'
  },
  {
    src: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186',
    alt: 'Woman sitting with view of Kinkaku-ji Golden Pavilion',
    caption: 'Admiring the iconic Kinkaku-ji Golden Pavilion in Kyoto'
  },
  {
    src: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989',
    alt: 'Temple building with traditional Japanese architecture',
    caption: 'Discovering hidden temples away from the crowds'
  },
  {
    src: 'https://images.unsplash.com/photo-1504109586057-7a2ae83d1338',
    alt: 'Japanese sushi plates and dishes',
    caption: 'Indulging in authentic Japanese cuisine'
  },
  {
    src: 'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36',
    alt: 'Elderly Japanese woman preparing traditional street food',
    caption: 'Meeting locals and experiencing authentic street food'
  },
  {
    src: 'https://images.unsplash.com/photo-1528164344705-47542687000d',
    alt: 'Woman in interactive light museum exhibit',
    caption: 'Visiting the TeamLab digital art museum in Tokyo'
  }
];

const PhotoGallery = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [photos, setPhotos] = useState(tourPhotos);

  // No need to check images, we're now using reliable Unsplash URLs
  useEffect(() => {
    console.log("PhotoGallery component mounted with reliable Unsplash images");
  }, []);
  
  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setIsFullScreen(true);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  };

  const handleClose = () => {
    setIsFullScreen(false);
  };

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
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
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

      {/* Full screen image view */}
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
              src={photos[activeIndex].src} 
              alt={photos[activeIndex].alt} 
              className="object-contain w-full h-auto max-h-[80vh] mx-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-center">
              {photos[activeIndex].caption}
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
              {photos.map((_, index) => (
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

      {/* Mobile carousel view */}
      <div className="mt-8 md:hidden">
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {photos.map((photo, index) => (
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
