
import { useState } from 'react';
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import DestinationsSection from '@/components/DestinationsSection';
import CtaSection from '@/components/CtaSection';
import WhyTravelWith from '@/components/WhyTravelWith';
import IndexPhotoGallery from '@/components/IndexPhotoGallery';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <WhyTravelWith />
      <DestinationsSection />
      <IndexPhotoGallery />
      <ContactSection />
      <CtaSection />
    </Layout>
  );
};

export default Index;
