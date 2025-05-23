
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CarouselFullScreenDialog from '@/components/carousel/CarouselFullScreenDialog';

// Gallery photos with direct URLs for the Index page
const indexGalleryPhotos = [
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//5.jpg",
    alt: "Japan Tour Memory 1"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//6.jpg",
    alt: "Japan Tour Memory 2"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//7.jpg",
    alt: "Japan Tour Memory 3"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//9.jpg",
    alt: "Japan Tour Memory 4"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//10.jpeg",
    alt: "Japan Tour Memory 5"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//11.jpg",
    alt: "Japan Tour Memory 6"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//12.jpg",
    alt: "Japan Tour Memory 7"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//13.jpg",
    alt: "Japan Tour Memory 8"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//14.jpg",
    alt: "Japan Tour Memory 9"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//16.jpg",
    alt: "Japan Tour Memory 10"
  }
];

const IndexPhotoGallery = () => {
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
    
    const totalImages = indexGalleryPhotos.length;
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
          {indexGalleryPhotos.map((photo, index) => (
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
        imageSources={indexGalleryPhotos}
        closeImageDialog={closeLightbox}
        navigateFullscreen={navigateLightbox}
      />
    </section>
  );
};

export default IndexPhotoGallery;
