
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import CarouselFullScreenDialog from '@/components/carousel/CarouselFullScreenDialog';

// Gallery photos with new URLs
const galleryPhotos = [
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//16.jpg",
    alt: "Japan Tour Memory 1"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Omoid.jpeg",
    alt: "Japan Tour Memory 2"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//1.jpeg",
    alt: "Japan Tour Memory 3"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Craig4.jpeg",
    alt: "Japan Tour Memory 4"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Group2.jpeg",
    alt: "Japan Tour Memory 5"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//4.jpg",
    alt: "Japan Tour Memory 6"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//12.jpg",
    alt: "Japan Tour Memory 7"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//3.jpg",
    alt: "Japan Tour Memory 8"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Craig6.jpeg",
    alt: "Japan Tour Memory 9"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//5.jpg",
    alt: "Japan Tour Memory 10"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/carousel-images//GroupPortraitBambooPikachu.jpg",
    alt: "Japan Tour Memory 11"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//SelfieAkiba.jpeg",
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
