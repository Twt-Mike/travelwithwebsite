
import Layout from '@/components/Layout';
import InfluencerHero from '@/components/InfluencerHero';
import TourDetails from '@/components/TourDetails';
import HostSection from '@/components/HostSection';
import TourItinerary from '@/components/TourItinerary';
import TourFAQ from '@/components/TourFAQ';
import BookingCta from '@/components/BookingCta';
import BookingForm from '@/components/BookingForm';
import PhotoGallery from '@/components/PhotoGallery';
import HeroNavLinks from '@/components/HeroNavLinks';
import StickyBookButton from '@/components/StickyBookButton';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const InfluencerTour = () => {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <Layout>
      <InfluencerHero />
      <HeroNavLinks />
      <div id="overview">
        <HostSection />
        <TourDetails />
      </div>
      <div id="itinerary">
        <TourItinerary />
      </div>
      <PhotoGallery />
      <div id="faq">
        <TourFAQ />
      </div>
      
      {showBookingForm ? (
        <section id="booking" className="py-16 bg-gray-50">
          <div className="japan-container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo mb-4">
                Book Your Japan Tour with Laura
              </h2>
              <p className="text-gray-700 max-w-2xl mx-auto">
                Complete the form below to secure your spot on this exclusive Japan tour.
              </p>
              <p className="text-japan-indigo font-medium mt-2">
                €2,750 per person • Save €50 when paying by bank transfer
              </p>
            </div>
            <BookingForm />
            <div className="mt-8 text-center">
              <Button 
                variant="outline" 
                onClick={() => setShowBookingForm(false)}
                className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo/10"
              >
                Return to Tour Information
              </Button>
            </div>
          </div>
        </section>
      ) : (
        <div id="booking">
          <BookingCta onBookNow={() => setShowBookingForm(true)} />
        </div>
      )}
      
      <StickyBookButton />
    </Layout>
  );
};

export default InfluencerTour;
