
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CarouselFullScreenDialog from '@/components/carousel/CarouselFullScreenDialog';

// Updated gallery photos for OurTravelTreatsJpn page with new images
const galleryPhotos = [
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//group1.jpeg",
    alt: "Group photo from Japan tour"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//6.jpg",
    alt: "Japan tour experience"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//group3.jpg",
    alt: "Group photo from Japan tour"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//8.jpg",
    alt: "Japan tour experience"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//group4.jpeg",
    alt: "Group photo from Japan tour"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//4.jpg",
    alt: "Japan tour experience"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//9.jpg",
    alt: "Japan tour experience"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//Group5.jpg",
    alt: "Group photo from Japan tour"
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
