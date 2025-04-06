
import Layout from '@/components/Layout';
import InfluencerHero from '@/components/InfluencerHero';
import TourDetails from '@/components/TourDetails';
import HostSection from '@/components/HostSection';
import TourItinerary from '@/components/TourItinerary';
import TourFAQ from '@/components/TourFAQ';
import BookingCta from '@/components/BookingCta';
import PhotoGallery from '@/components/PhotoGallery';
import HeroNavLinks from '@/components/HeroNavLinks';
import StickyBookButton from '@/components/StickyBookButton';

// Define the WooCommerce product URL - make sure to use your actual URL
const BOOKING_URL = "https://travelwith.tours/product/japan-tour-with-ourtraveltreats";

const InfluencerTour = () => {
  const handleBookNow = () => {
    window.open(BOOKING_URL, '_blank');
  };

  return (
    <Layout>
      <InfluencerHero />
      <HeroNavLinks />
      <div>
        <HostSection />
        <div id="tour-details">
          <TourDetails />
        </div>
      </div>
      <div id="itinerary">
        <TourItinerary />
      </div>
      <PhotoGallery />
      <div id="faq">
        <TourFAQ />
      </div>
      
      <div id="booking">
        <BookingCta onBookNow={handleBookNow} />
      </div>
      
      <StickyBookButton />
    </Layout>
  );
};

export default InfluencerTour;
