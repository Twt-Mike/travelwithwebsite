
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CarouselFullScreenDialog from '@/components/carousel/CarouselFullScreenDialog';

// Gallery photos with placeholder URLs
const galleryPhotos = [
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 1"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 2"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 3"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 4"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 5"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 6"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 7"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 8"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 9"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 10"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 11"
  },
  {
    src: "/placeholder.svg",
    alt: "Japan Tour Memory 12"
  }
];

const PhotoGallery = () => {
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
            Tour Memories
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
                    e.currentTarget.src = '/placeholder.svg';
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

export default PhotoGallery;
