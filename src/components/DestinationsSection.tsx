
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { logImageStatus } from '@/utils/imageDebug';

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

  // Function to check if townphotos bucket exists and create it if not
  useEffect(() => {
    const checkTownphotosBucket = async () => {
      const { data: buckets, error } = await supabase
        .storage
        .listBuckets();
      
      console.log("Available buckets:", buckets);
      
      const townphotosBucket = buckets?.find(bucket => bucket.name === 'townphotos');
      if (!townphotosBucket) {
        console.error("The 'townphotos' bucket doesn't exist in Supabase storage");
      } else {
        console.log("Found townphotos bucket:", townphotosBucket);

        // List files in the townphotos bucket
        const { data: files, error: listError } = await supabase
          .storage
          .from('townphotos')
          .list('');
        
        if (listError) {
          console.error("Error listing files in townphotos bucket:", listError);
        } else {
          console.log("Files in townphotos bucket:", files);
        }
      }
    };

    checkTownphotosBucket();
  }, []);

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
      };
      img.src = destination.image;
    });
  }, []);

  // For demonstration purposes, get public URL dynamically
  useEffect(() => {
    const getPublicUrl = async () => {
      try {
        const { data } = supabase
          .storage
          .from('townphotos')
          .getPublicUrl('TakayamaQuietStreet.jpg');
        
        console.log('Generated Takayama public URL:', data.publicUrl);
      } catch (error) {
        console.error('Error getting Takayama public URL:', error);
      }
    };

    getPublicUrl();
  }, []);

  return (
    <section className="py-20 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Inspire Your Audience – Explore Japan's Iconic Destinations</h2>
          <p className="section-subtitle mx-auto">
            Every Travel With journey is entirely custom-built around your vision. Here are some incredible places we can include in your bespoke itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg h-72 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={imageStatus[index] === false && destination.fallbackImage ? destination.fallbackImage : destination.image} 
                alt={destination.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                onError={(e) => {
                  // If fallback image is available, use it
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
