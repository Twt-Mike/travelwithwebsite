
import Layout from '@/components/Layout';
import HaggisinJapanHero from '@/components/HaggisinJapanHero';
import HaggisinJapanTourDetails from '@/components/HaggisinJapanTourDetails';
import HaggisinJapanHostSection from '@/components/HaggisinJapanHostSection';
import HaggisinJapanTourItinerary from '@/components/HaggisinJapanTourItinerary';
import TourFAQ from '@/components/TourFAQ';
import HaggisinJapanBookingCta from '@/components/HaggisinJapanBookingCta';
import PhotoGallery from '@/components/PhotoGallery';
import HeroNavLinks from '@/components/HeroNavLinks';
import StickyBookButton from '@/components/StickyBookButton';
import CompactCarousel from '@/components/CompactCarousel';
import { Card } from '@/components/ui/card';

// Define the WooCommerce product URL - real WooCommerce product
const BOOKING_URL = "https://travelwith.tours/product/japan-11-day-tour-with-craig-haggisinjapan/";

// Images for the compact carousel
const japanImages = [
  { url: "/placeholder.svg", alt: "Japan experience" },
  { url: "/placeholder.svg", alt: "Japan experience" },
  { url: "/placeholder.svg", alt: "Japan experience" },
  { url: "/placeholder.svg", alt: "Japan experience" },
  { url: "/placeholder.svg", alt: "Japan experience" }
];

// Custom FAQs for HaggisinJapan
const haggisinJapanFaqs = [
  {
    question: "Where should I book my flights in & out of?",
    answer: "The tour starts in Tokyo and finishes in Osaka. So I recommend flying into Tokyo (any airport) and out of Osaka (any airport). I'll advise you on how to navigate them to the hotel closer to the time."
  },
  {
    question: "Should I book extra days outside of the tour?",
    answer: "Yes! definitely try to arrive 1/2 days before to beat the jet lag. And definitely stay an extra 1/2 days in Osaka before heading home. It's my favourite city with so much to do!"
  },
  {
    question: "Can you help with pre-accommodation & things to do after the tour?",
    answer: "While we cannot make the booking for you, your host & guide Craig is always available to give advice to any questions! He is happy to offer suggestions for you!"
  },
  {
    question: "What is the fitness level required for the tour?",
    answer: "Japan is a LOT of walking. So make sure you bring comfortable shoes and are ready to do 20,000+ steps a day. It's the best way to see this beautiful country. – we also take the best public transportation in the world so make sure whatever luggage you have you're comfortable carrying. Sometimes stairs might be our only option at a train station."
  },
  {
    question: "Suitcase or backpack?",
    answer: "Either one is fine 🙂 However we recommend to pack as light as possible! If you have a suitcase you must be able to pick it up and carry it up one flight of stairs. As we move throughout the metro stations there are some elevators, but not all will be accessible near our specific train. The Shinkansen also has luggage size restrictions. While they have never enforced this on any of our tours, the luggage size restriction does exist, and we cannot be liable if they charge extra for this."
  },
  {
    question: "How much spending cash should I bring for the trip?",
    answer: "For the 11 days on tour. £450 / €500 / $550 should be fine for some souvenirs and extra meals and drinks. If you're looking to spend a bit more time in Japan then £1,000 / €1,200 / $1,500 I'd suggest. There's a lot of amazing things to buy!"
  },
  {
    question: "Is there free time on the tour?",
    answer: "Yes! I give a decent amount of free time at every location for people to tick off their own bucket list things. I'll also have a lot of suggestion for each place we go to help you plan your free time in advance."
  }
];

const HaggisinJapan = () => {
  const handleBookNow = () => {
    // Open the booking URL in a new tab
    window.open(BOOKING_URL, '_blank');
  };

  return (
    <Layout>
      <HaggisinJapanHero />
      <HeroNavLinks />
      <div>
        <HaggisinJapanHostSection />
        <CompactCarousel images={japanImages} />
        <div id="tour-details">
          <HaggisinJapanTourDetails />
        </div>
        
        {/* Image after Tour Overview section */}
        <div className="py-10 bg-white">
          <div className="japan-container">
            <img 
              src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Osakagroup.jpeg" 
              alt="Tour group in Osaka"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div id="itinerary">
        <HaggisinJapanTourItinerary />
      </div>
      
      {/* Booking CTA section */}
      <div id="booking">
        <HaggisinJapanBookingCta onBookNow={handleBookNow} />
      </div>
      
      {/* Tour Memories (Photo Gallery) */}
      <div id="tour-memories">
        <PhotoGallery />
      </div>
      
      {/* FAQ section */}
      <div id="faq">
        <TourFAQ faqs={haggisinJapanFaqs} />
      </div>
      
      <StickyBookButton onBookNow={handleBookNow} />
    </Layout>
  );
};

export default HaggisinJapan;
