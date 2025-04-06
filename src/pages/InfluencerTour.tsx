
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
import CompactCarousel from '@/components/CompactCarousel';

// Define the WooCommerce product URL - make sure to use your actual URL
const BOOKING_URL = "https://travelwith.tours/product/japan-tour-with-ourtraveltreats";

// Images for the compact carousel
const japanImages = [
  { url: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//20.jpeg", alt: "Japan experience" },
  { url: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//21.jpg", alt: "Japan experience" },
  { url: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//22.jpg", alt: "Japan experience" },
  { url: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//23.jpg", alt: "Japan experience" },
  { url: "https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//24.jpg", alt: "Japan experience" }
];

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
        <CompactCarousel images={japanImages} />
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
