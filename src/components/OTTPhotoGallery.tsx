
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CarouselFullScreenDialog from '@/components/carousel/CarouselFullScreenDialog';

// Gallery photos with placeholder images for OurTravelTreatsJpn page
const galleryPhotos = [
  {
    src: "https://images.unsplash.com/photo-1492571350019-22de08371fd3",
    alt: "Japan scenery with Mount Fuji"
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    alt: "Traditional Japanese temple"
  },
  {
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9",
    alt: "Cherry blossoms in Japan"
  },
  {
    src: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26",
    alt: "Japanese street at night"
  },
  {
    src: "https://images.unsplash.com/photo-1528164344705-47542687000d",
    alt: "Japanese market"
  },
  {
    src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d",
    alt: "Traditional Japanese garden"
  },
  {
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
    alt: "Tokyo skyline"
  },
  {
    src: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3",
    alt: "Japanese street food"
  },
  {
    src: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1",
    alt: "Bamboo forest in Japan"
  },
  {
    src: "https://images.unsplash.com/photo-1580694503595-a6154d40ca55",
    alt: "Japanese shrine gates"
  },
  {
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186",
    alt: "Japanese pagoda"
  },
  {
    src: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde",
    alt: "Busy crossing in Tokyo"
  }
];

const OTTPhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (selectedImage === null) return;
    
    const totalImages = galleryPhotos.length;
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % totalImages);
    } else {
      setSelectedImage((selectedImage - 1 + totalImages) % totalImages);
    }
  };

  return (
    <section className="py-16 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo">
            Tour Photos
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => openLightbox(index)}
            >
              <AspectRatio ratio={1} className="bg-gray-100">
                <img 
                  src={photo.src} 
                  alt={photo.alt} 
                  className={`object-cover w-full h-full transition-transform duration-500 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`}
                  loading="lazy"
                  onError={(e) => {
                    console.error(`Error loading image at index ${index}:`, photo.src);
                    e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjFmMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==';
                  }}
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>

      <CarouselFullScreenDialog
        selectedImage={selectedImage}
        imageSources={galleryPhotos}
        closeImageDialog={closeLightbox}
        navigateFullscreen={navigateLightbox}
      />
    </section>
  );
};

export default OTTPhotoGallery;
