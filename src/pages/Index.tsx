
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import DestinationsSection from '@/components/DestinationsSection';
import CtaSection from '@/components/CtaSection';
import WhyTravelWith from '@/components/WhyTravelWith';
import PhotoGallery from '@/components/PhotoGallery';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  const [photoGalleryKey, setPhotoGalleryKey] = useState(0);
  
  // Function to reload the photo gallery
  const reloadPhotoGallery = () => {
    setPhotoGalleryKey(prevKey => prevKey + 1);
  };
  
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <WhyTravelWith />
      <DestinationsSection />
      <PhotoGallery key={photoGalleryKey} />
      <TestimonialsSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
