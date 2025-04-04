
import { useState } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';

// Gallery photos with direct URLs
const galleryPhotos = [
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//1.jpeg",
    alt: "Japan Photo 1"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/kyoto-temple.jpg",
    alt: "Kyoto Temple"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/cherry-blossoms.jpg",
    alt: "Cherry Blossoms"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/tokyo-street.jpg",
    alt: "Tokyo Street"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/fuji-mountain.jpg",
    alt: "Mount Fuji"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/japanese-garden.jpg",
    alt: "Japanese Garden"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/osaka-night.jpg",
    alt: "Osaka Night"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/nara-deer.jpg",
    alt: "Nara Deer"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip/shinjuku.jpg",
    alt: "Shinjuku"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//5.jpg",
    alt: "Japan Photo 5"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//6.jpg",
    alt: "Japan Photo 6"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//7.jpg",
    alt: "Japan Photo 7"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//9.jpg",
    alt: "Japan Photo 9"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//10.jpeg",
    alt: "Japan Photo 10"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//11.jpg",
    alt: "Japan Photo 11"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//12.jpg",
    alt: "Japan Photo 12"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//13.jpg",
    alt: "Japan Photo 13"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//14.jpg",
    alt: "Japan Photo 14"
  },
  {
    src: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//16.jpg",
    alt: "Japan Photo 16"
  }
];

const PhotoGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo">
            Photo Gallery
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg transition-all duration-300"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
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
    </section>
  );
};

export default PhotoGallery;
