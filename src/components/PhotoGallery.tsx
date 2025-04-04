
import { useState, useEffect } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Skeleton } from '@/components/ui/skeleton';
import { getImagesFromBucket } from '@/utils/supabaseStorage';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';

// Type for our photo objects
type Photo = {
  src: string;
  alt: string;
};

const PhotoGallery = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);

  // Fetch photos from Supabase on component mount
  useEffect(() => {
    const fetchPhotos = async () => {
      console.log('PhotoGallery: Starting to fetch photos...');
      setIsLoading(true);
      setError(null);
      
      try {
        const result = await getImagesFromBucket('ip');
        
        if (result.error) {
          console.error('PhotoGallery: Error fetching photos:', result.error);
          setError(result.error);
          return;
        }
        
        if (result.photos && result.photos.length > 0) {
          console.log(`PhotoGallery: Successfully fetched ${result.photos.length} photos`);
          setPhotos(result.photos);
        } else {
          console.warn('PhotoGallery: No photos returned from Supabase');
          setError('No photos found in the gallery');
        }
      } catch (e) {
        console.error('PhotoGallery: Unexpected error:', e);
        setError('Unexpected error loading photos');
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchPhotos();
  }, [retryCount]);
  
  const refreshGallery = () => {
    console.log('PhotoGallery: Manually refreshing gallery');
    setRetryCount(prev => prev + 1);
  };

  return (
    <section className="py-16 bg-japan-cream relative">
      <div className="japan-container">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo">
            Photo Gallery
          </h2>
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
            <div className="flex justify-center mt-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 text-amber-700 border-amber-300 hover:bg-amber-100"
                onClick={refreshGallery}
              >
                <RefreshCw size={16} />
                Retry Loading Photos
              </Button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="overflow-hidden rounded-lg hover:opacity-90 transition-opacity"
              >
                <AspectRatio ratio={1} className="bg-gray-100">
                  <img 
                    src={photo.src} 
                    alt={photo.alt} 
                    className="object-cover w-full h-full"
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
        )}
      </div>
    </section>
  );
};

export default PhotoGallery;
