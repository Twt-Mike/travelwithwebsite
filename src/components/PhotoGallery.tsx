
import { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Images, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Skeleton } from '@/components/ui/skeleton';
import { toast } from 'sonner';
import { supabase } from '@/integrations/supabase/client';
import { BUCKETS } from '@/utils/supabaseStorage';

// Types for our photo objects
type Photo = {
  src: string;
  alt: string;
  caption: string;
};

// Fallback photos in case Supabase photos aren't available
const fallbackPhotos: Photo[] = [
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
  }
];

const PhotoGallery = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [photos, setPhotos] = useState<Photo[]>(fallbackPhotos);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch photos from Supabase on component mount
  useEffect(() => {
    const fetchPhotos = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        console.log('Fetching photos from homepagephotos bucket...');
        
        // Check if bucket exists
        const { data: buckets, error: bucketsError } = await supabase
          .storage
          .listBuckets();
        
        if (bucketsError) {
          console.error('Error listing buckets:', bucketsError);
          setError('Failed to access storage buckets');
          setIsLoading(false);
          return;
        }
        
        const bucket = buckets?.find(b => b.name === BUCKETS.HOMEPAGEPHOTOS);
        
        if (!bucket) {
          console.error(`Bucket '${BUCKETS.HOMEPAGEPHOTOS}' does not exist`);
          setError(`The '${BUCKETS.HOMEPAGEPHOTOS}' bucket doesn't exist`);
          setIsLoading(false);
          return;
        }
        
        console.log(`Found ${BUCKETS.HOMEPAGEPHOTOS} bucket, listing files...`);
        
        // List files in the bucket
        const { data: files, error: listError } = await supabase
          .storage
          .from(BUCKETS.HOMEPAGEPHOTOS)
          .list('', {
            sortBy: { column: 'name', order: 'asc' }
          });
        
        if (listError) {
          console.error('Error listing files:', listError);
          setError('Error accessing files in the bucket');
          setIsLoading(false);
          return;
        }
        
        if (!files || files.length === 0) {
          console.warn('No files found in bucket');
          setError('No images found in the gallery');
          setIsLoading(false);
          return;
        }
        
        console.log(`Found ${files.length} files in ${BUCKETS.HOMEPAGEPHOTOS} bucket:`, 
          files.map(f => f.name).join(', '));
        
        // Filter for image files
        const imageFiles = files.filter(file => {
          const extension = file.name.split('.').pop()?.toLowerCase();
          return ['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(extension || '');
        });
        
        if (imageFiles.length === 0) {
          console.warn('No image files found in bucket');
          setError('No valid images found in the gallery');
          setIsLoading(false);
          return;
        }
        
        // Convert files to photo objects with URLs and alt text
        const supabasePhotos = imageFiles.map(file => {
          // Get public URL for the file
          const { data } = supabase
            .storage
            .from(BUCKETS.HOMEPAGEPHOTOS)
            .getPublicUrl(file.name);
          
          const publicUrl = data.publicUrl;
          
          // Generate alt text from file name
          const nameWithoutExtension = file.name.split('.').slice(0, -1).join('.');
          const altText = nameWithoutExtension
            .replace(/[-_]/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase());
          
          console.log(`Processing image: ${file.name} → ${publicUrl}`);
          
          return {
            src: publicUrl,
            alt: altText,
            caption: altText
          };
        });
        
        console.log('Successfully prepared gallery photos:', supabasePhotos.length);
        setPhotos(supabasePhotos);
      } catch (e) {
        console.error('Unexpected error in photo gallery:', e);
        setError('Unexpected error loading photos');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPhotos();
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
            Explore moments from previous Japan tour experiences. Your journey will be uniquely yours, but equally memorable.
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="rounded-lg bg-gray-200 animate-pulse">
                <AspectRatio ratio={1}>
                  <Skeleton className="w-full h-full" />
                </AspectRatio>
              </div>
            ))}
          </div>
        ) : error ? (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
            <p className="text-amber-800 mb-2 font-medium">Gallery Error</p>
            <p className="text-amber-700">{error}</p>
            <p className="text-amber-600 text-sm mt-4">
              Using fallback images. Please check that your homepagephotos bucket exists and contains valid images.
            </p>
          </div>
        ) : (
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
                    loading="lazy"
                    onError={(e) => {
                      console.error(`Error loading image at index ${index}:`, photo.src);
                      // Don't replace with fallback here to prevent infinite loops
                      // Just show a broken image indicator
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjFmMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==';
                    }}
                  />
                </AspectRatio>
              </div>
            ))}
          </div>
        )}
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
              onError={(e) => {
                console.error('Error loading fullscreen image');
                e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzIyMjIyMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNlZWVlZWUiPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==';
              }}
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
                      loading="lazy"
                      onError={(e) => {
                        console.error(`Error loading carousel image at index ${index}`);
                        e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YxZjFmMSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiPkltYWdlIEVycm9yPC90ZXh0Pjwvc3ZnPg==';
                      }}
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
