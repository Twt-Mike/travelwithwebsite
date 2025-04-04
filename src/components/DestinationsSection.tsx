import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { logImageStatus } from '@/utils/imageDebug';
import { toast } from "sonner";
import { 
  checkBucketExists, 
  listBucketFiles, 
  getImageUrl, 
  testSupabaseStorageConnection,
  BUCKETS 
} from '@/utils/supabaseStorage';

const destinations = [
  {
    id: 1,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1836&auto=format&fit=crop",
    description: "Iconic cityscapes and cultural fusion"
  },
  {
    id: 2,
    name: "Kyoto",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1980&auto=format&fit=crop",
    description: "Ancient traditions, temples, and serene gardens"
  },
  {
    id: 3,
    name: "Osaka",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1974&auto=format&fit=crop",
    description: "Culinary adventures and vibrant nightlife"
  },
  {
    id: 4,
    name: "Takayama",
    image: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/townphotos/TakayamaQuietStreet.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop",
    description: "Authentic rural Japan and historical charm"
  },
  {
    id: 5,
    name: "Koyasan",
    image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1920&auto=format&fit=crop",
    description: "Spiritual experiences and serene mountain temples"
  },
  {
    id: 6,
    name: "Hiroshima",
    image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?q=80&w=1920&auto=format&fit=crop",
    description: "Historical landmarks and beautiful coastal scenery"
  }
];

const DestinationsSection = () => {
  const [imageStatus, setImageStatus] = useState<Record<number, boolean>>({});
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [bucketStatus, setBucketStatus] = useState<{
    exists: boolean;
    checked: boolean;
    fileCount: number;
  }>({
    exists: false,
    checked: false,
    fileCount: 0
  });

  // Test Supabase connection and check bucket status
  useEffect(() => {
    const checkStorage = async () => {
      // First, test general Supabase storage connectivity
      const connected = await testSupabaseStorageConnection();
      
      if (!connected) {
        toast.error("Couldn't connect to Supabase storage");
        return;
      }
      
      // Then check for the townphotos bucket specifically
      const bucketExists = await checkBucketExists(BUCKETS.TOWNPHOTOS);
      
      if (!bucketExists) {
        toast.error(`The ${BUCKETS.TOWNPHOTOS} bucket is missing. Please create it in Supabase`);
        setBucketStatus({ exists: false, checked: true, fileCount: 0 });
        return;
      }
      
      // List files in the bucket to see what's available
      const files = await listBucketFiles(BUCKETS.TOWNPHOTOS);
      const fileCount = files.length;
      
      setBucketStatus({ 
        exists: true, 
        checked: true, 
        fileCount: fileCount
      });
      
      if (fileCount === 0) {
        toast.warning("Storage bucket exists but no files found");
      } else {
        toast.success(`Found ${fileCount} images in storage`);
        
        // Log the available files to help with debugging
        console.log("Available images in townphotos bucket:", 
          files.map(file => `${file.name} (${file.metadata?.mimetype || 'unknown type'})`));
      }
    };

    checkStorage();
  }, [refreshTrigger]);

  // Pre-check image loading
  useEffect(() => {
    destinations.forEach((destination, index) => {
      const img = new Image();
      img.onload = () => {
        logImageStatus(destination.image, true);
        setImageStatus(prev => ({...prev, [index]: true}));
      };
      img.onerror = () => {
        logImageStatus(destination.image, false);
        setImageStatus(prev => ({...prev, [index]: false}));
        
        // Log specific error for Supabase images
        if (destination.image.includes('supabase.co')) {
          console.error(`Supabase image failed to load: ${destination.image}`);
          console.log(`Check if the file exists in the bucket and the bucket policies allow public access`);
        }
      };
      img.src = destination.image;
    });
  }, [refreshTrigger]);

  // Generate and test the Takayama image URL specifically
  useEffect(() => {
    const checkTakayamaImage = async () => {
      if (!bucketStatus.exists || !bucketStatus.checked) return;
      
      try {
        const takayamaUrl = getImageUrl(BUCKETS.TOWNPHOTOS, 'TakayamaQuietStreet.jpg');
        console.log('Generated Takayama public URL:', takayamaUrl);
        
        // Actual fetch test to verify the image loads
        try {
          const response = await fetch(takayamaUrl, { method: 'HEAD' });
          if (response.ok) {
            console.log('✅ Takayama image URL is accessible');
          } else {
            console.error(`❌ Takayama image URL returns status: ${response.status}`);
            console.log('This might be due to:');
            console.log('1. The file does not exist in the bucket');
            console.log('2. The bucket policies do not allow public access');
          }
        } catch (error) {
          console.error('Error testing Takayama image URL:', error);
        }
      } catch (error) {
        console.error('Error getting Takayama public URL:', error);
      }
    };

    checkTakayamaImage();
  }, [bucketStatus, refreshTrigger]);

  // Function to manually refresh images
  const handleRefreshImages = () => {
    setRefreshTrigger(prev => prev + 1);
    toast.info("Refreshing images...");
  };

  // Helper function to determine which image to display
  const getImageSrc = (destination: typeof destinations[0], index: number) => {
    // If image has loaded successfully, use it
    if (imageStatus[index] === true) {
      return destination.image;
    }
    
    // If image failed to load and fallback is available, use fallback
    if (imageStatus[index] === false && destination.fallbackImage) {
      return destination.fallbackImage;
    }
    
    // Otherwise use the original image (will be replaced if it fails to load)
    return destination.image;
  };

  return (
    <section className="py-20 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Inspire Your Audience – Explore Japan's Iconic Destinations</h2>
          <p className="section-subtitle mx-auto">
            Every Travel With journey is entirely custom-built around your vision. Here are some incredible places we can include in your bespoke itinerary.
          </p>
          
          <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button 
              onClick={handleRefreshImages} 
              className="text-sm bg-japan-indigo text-white px-4 py-2 rounded-md hover:bg-japan-indigo/90 transition-colors"
            >
              Refresh Images
            </button>
            
            {bucketStatus.checked && (
              <div className={`text-sm px-3 py-1 rounded-full ${
                bucketStatus.exists 
                  ? bucketStatus.fileCount > 0 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-yellow-100 text-yellow-800'
                  : 'bg-red-100 text-red-800'
              }`}>
                {bucketStatus.exists 
                  ? bucketStatus.fileCount > 0 
                    ? `✅ Bucket ready with ${bucketStatus.fileCount} files` 
                    : '⚠️ Bucket exists but empty'
                  : '❌ Bucket missing'
                }
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg h-72 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={getImageSrc(destination, index)}
                alt={destination.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // If image fails to load and fallback is available, use it
                  if (destination.fallbackImage) {
                    console.log(`Using fallback image for ${destination.name}`);
                    e.currentTarget.src = destination.fallbackImage;
                  }
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">{destination.name}</h3>
                  <p className="text-white/80 mb-4 text-sm">{destination.description}</p>
                  
                  {imageStatus[index] === false && (
                    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded absolute top-2 right-2">
                      Image Error
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="outline" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white px-8">
              Plan Your Custom Trip
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
