
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import DestinationsSection from '@/components/DestinationsSection';
import CtaSection from '@/components/CtaSection';
import WhyTravelWith from '@/components/WhyTravelWith';
import PhotoGallery from '@/components/PhotoGallery';
import TestimonialsSection from '@/components/TestimonialsSection';
import { Button } from '@/components/ui/button';
import { RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { testSupabaseStorageConnection, testBucket, BUCKETS } from '@/utils/supabaseStorage';

const Index = () => {
  const [photoGalleryKey, setPhotoGalleryKey] = useState(0);
  
  // Function to reload the photo gallery
  const reloadPhotoGallery = () => {
    setPhotoGalleryKey(prevKey => prevKey + 1);
    toast.info('Reloading photo gallery...');
  };
  
  // Function to test Supabase connection
  const testSupabaseConnection = async () => {
    toast.info('Testing Supabase storage connection...');
    
    const connected = await testSupabaseStorageConnection();
    if (connected) {
      const ipBucketOk = await testBucket(BUCKETS.IP);
      if (ipBucketOk) {
        toast.success('IP bucket is accessible');
        reloadPhotoGallery();
      } else {
        toast.error('IP bucket test failed');
      }
    }
  };
  
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <WhyTravelWith />
      <DestinationsSection />
      <div className="relative">
        <PhotoGallery key={photoGalleryKey} />
        {/* Admin tools - only visible during development */}
        {import.meta.env.DEV && (
          <div className="fixed bottom-4 right-4 flex gap-2 z-40">
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white bg-opacity-75 backdrop-blur-sm shadow-md flex items-center gap-1"
              onClick={reloadPhotoGallery}
            >
              <RefreshCw size={14} />
              Reload Gallery
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="bg-white bg-opacity-75 backdrop-blur-sm shadow-md flex items-center gap-1"
              onClick={testSupabaseConnection}
            >
              Test IP Bucket
            </Button>
          </div>
        )}
      </div>
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
