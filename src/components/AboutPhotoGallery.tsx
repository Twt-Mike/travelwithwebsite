
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CarouselFullScreenDialog from '@/components/carousel/CarouselFullScreenDialog';

// Gallery photos for the About page
const aboutGalleryPhotos = [
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//OsakaMikeGroupRunningman.jpeg", 
    alt: "Group in Osaka having fun with poses"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//20191231_175418_HDR%20(1).jpg", 
    alt: "Group photo at iconic location"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//Sri%20Lanka%20Train%20Selfi.jpg", 
    alt: "Group selfie on a train in Sri Lanka"
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
    <div className="mt-8 mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
