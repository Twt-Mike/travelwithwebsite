import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { logImageStatus } from '@/utils/imageDebug';

// Updated images for Haggis in Japan Cherry Blossom tour
const initialTourImages = [
  {
    url: "https://travelwith.tours/images/haggis/Bar.Jpeg",
    alt: "Bar experience in Japan"
  },
  {
    url: "https://travelwith.tours/images/haggis/Craig4.jpeg",
    alt: "Craig enjoying Japan"
  },
  {
    url: "https://travelwith.tours/images/haggis/craig6.jpeg",
    alt: "Craig in traditional setting"
  },
  {
    url: "https://travelwith.tours/images/haggis/FujiGroup.jpeg",
    alt: "Group photo at Mount Fuji"
  },
  {
    url: "https://travelwith.tours/images/haggis/Group1.jpeg",
    alt: "Group photo 1"
  },
  {
    url: "https://travelwith.tours/images/haggis/Group2.jpeg",
    alt: "Group photo 2"
  },
  {
    url: "https://travelwith.tours/images/haggis/HaggisBanner1.jpeg",
    alt: "Haggis in Japan banner"
  },
  {
    url: "https://travelwith.tours/images/haggis/Karaokegroup.jpeg",
    alt: "Karaoke group experience"
  },
  {
    url: "https://travelwith.tours/images/haggis/monkeymountain.jpg",
    alt: "Monkey mountain experience"
  },
  {
    url: "https://travelwith.tours/images/haggis/Omoid.jpeg",
    alt: "Omoide Yokocho experience"
  },
  {
    url: "https://travelwith.tours/images/haggis/Osakagroup.jpeg",
    alt: "Osaka group photo"
  },
  {
    url: "https://travelwith.tours/images/haggis/SelfieAkiba.jpeg",
    alt: "Selfie in Akihabara"
  }
];

// Individual photo item component to ensure consistent hook usage
const PhotoItem = ({ image, index, onOpenModal }: { 
  image: { url: string; alt: string }, 
  index: number, 
  onOpenModal: (index: number) => void 
}) => {
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    logImageStatus(image.url, false);
    setHasError(true);
  };

  const handleImageLoad = () => {
    logImageStatus(image.url, true);
  };

  // Don't render if image has error
  if (hasError) {
    return null;
  }

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group transition-all duration-700 opacity-0 transform translate-y-8 gallery-fade-in"
      style={{ animationDelay: `${index * 50}ms` }}
      onClick={() => onOpenModal(index)}
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
    </div>
  );
};

const HaggisinJapanCherryBlossomPhotoGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [validImages, setValidImages] = useState(initialTourImages);
  const isMobile = useIsMobile();

  // Filter out images that have errors
  useEffect(() => {
    // This will be handled by individual PhotoItem components
  }, []);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % validImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? validImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-japan-indigo mb-4">
            Tour Photos
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get a glimpse of the incredible experiences waiting for you on our Japan Cherry Blossom tour
          </p>
        </div>

        <div className={`grid ${isMobile ? 'grid-cols-2' : 'grid-cols-3 md:grid-cols-4'} gap-4`}>
          {validImages.map((image, index) => (
            <PhotoItem
              key={`${image.url}-${index}`}
              image={image}
              index={index}
              onOpenModal={openModal}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && validImages[selectedImage] && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
              >
                <X className="h-4 w-4" />
              </Button>
              
              <img
                src={validImages[selectedImage].url}
                alt={validImages[selectedImage].alt}
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              <Button
                variant="ghost"
                size="sm"
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default HaggisinJapanCherryBlossomPhotoGallery;
