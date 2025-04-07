
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CarouselFullScreenDialog from '@/components/carousel/CarouselFullScreenDialog';

// Gallery photos for the About page
const aboutGalleryPhotos = [
  {
    src: "/public/lovable-uploads/e6ee5cc2-79df-4146-aa4c-7d6fe020b556.png", 
    alt: "Travel group at iconic Osaka location"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//OsakaMikeGroupRunningman.jpeg", 
    alt: "Mike with a tour group in Osaka playing games"
  },
  {
    src: "/public/lovable-uploads/52102cf7-5b6e-4650-ac71-1b62806ec702.png", 
    alt: "Group of travelers on train in Sri Lanka"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//Sri%20Lanka%20group%20photo.JPG", 
    alt: "Tour group photo in Sri Lanka"
  },
  {
    src: "/public/lovable-uploads/d213e559-da7f-4014-91de-8649f6e85a12.png", 
    alt: "Travel group at Sigiriya Rock in Sri Lanka"
  },
  {
    src: "/public/lovable-uploads/c6909194-5f12-4ee2-a69e-182e9874d1b8.png", 
    alt: "Travel group at Sensoji Temple in Tokyo"
  }
];

const AboutPhotoGallery = () => {
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
    
    const totalImages = aboutGalleryPhotos.length;
    if (direction === 'next') {
      setSelectedImage((selectedImage + 1) % totalImages);
    } else {
      setSelectedImage((selectedImage - 1 + totalImages) % totalImages);
    }
  };

  return (
    <div className="mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {aboutGalleryPhotos.map((photo, index) => (
          <div 
            key={index} 
            className="overflow-hidden rounded-lg transition-all duration-300 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => openLightbox(index)}
          >
            <AspectRatio ratio={4/3} className="bg-gray-100">
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

      <CarouselFullScreenDialog
        selectedImage={selectedImage}
        imageSources={aboutGalleryPhotos}
        closeImageDialog={closeLightbox}
        navigateFullscreen={navigateLightbox}
      />
    </div>
  );
};

export default AboutPhotoGallery;
