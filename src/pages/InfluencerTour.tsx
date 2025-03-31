
import Layout from '@/components/Layout';
import InfluencerHero from '@/components/InfluencerHero';
import TourDetails from '@/components/TourDetails';
import HostSection from '@/components/HostSection';
import TourItinerary from '@/components/TourItinerary';
import TourFAQ from '@/components/TourFAQ';
import BookingCta from '@/components/BookingCta';

const InfluencerTour = () => {
  return (
    <Layout>
      <InfluencerHero />
      <HostSection />
      <TourDetails />
      <TourItinerary />
      <TourFAQ />
      <BookingCta />
    </Layout>
  );
};

export default InfluencerTour;
