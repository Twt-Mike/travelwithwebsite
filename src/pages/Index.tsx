
import Layout from '@/components/Layout';
import HeroSection from '@/components/HeroSection';
import FeaturedTours from '@/components/FeaturedTours';
import Testimonials from '@/components/Testimonials';
import ExperienceSection from '@/components/ExperienceSection';
import DestinationsSection from '@/components/DestinationsSection';
import CtaSection from '@/components/CtaSection';
import NewsletterSection from '@/components/NewsletterSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ExperienceSection />
      <FeaturedTours />
      <DestinationsSection />
      <Testimonials />
      <CtaSection />
      <NewsletterSection />
    </Layout>
  );
};

export default Index;
