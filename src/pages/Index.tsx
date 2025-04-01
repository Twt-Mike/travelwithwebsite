
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedTours from '@/components/FeaturedTours';
import Testimonials from '@/components/Testimonials';
import ExperienceSection from '@/components/ExperienceSection';
import DestinationsSection from '@/components/DestinationsSection';
import CtaSection from '@/components/CtaSection';
import NewsletterSection from '@/components/NewsletterSection';
import WhyTravelWith from '@/components/WhyTravelWith';
import PhotoGallery from '@/components/PhotoGallery';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyTravelWith />
      <ExperienceSection />
      <FeaturedTours />
      <DestinationsSection />
      <PhotoGallery />
      <Testimonials />
      <CtaSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
