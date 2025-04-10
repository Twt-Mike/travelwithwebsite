
import { Button } from '@/components/ui/button';

interface BookingCtaProps {
  onBookNow: () => void;
}

const HaggisinJapanBookingCta = ({ onBookNow }: BookingCtaProps) => {
  return (
    <section className="py-24 relative overflow-hidden bg-japan-indigo">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Japan tour booking"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      <div className="japan-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Ready for the Adventure of a Lifetime in Japan?
          </h2>
          
          <p className="text-xl text-white/90 mb-8">
            Join Craig for an unforgettable 11-day journey through Japan's most incredible locations.
            Limited to just 19 guests — secure your spot now!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 md:p-8 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-white text-lg font-medium mb-1">Dates</p>
                <p className="text-white/80">October 11 - 21, 2025</p>
              </div>
              
              <div>
                <p className="text-white text-lg font-medium mb-1">Group Size</p>
                <p className="text-white/80">Maximum 19 Guests</p>
              </div>
              
              <div>
                <p className="text-white text-lg font-medium mb-1">Price</p>
                <p className="text-white/80">£2200 per person</p>
              </div>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="bg-japan-indigo hover:bg-japan-indigo/80 text-white font-medium px-10 py-6 text-lg"
            onClick={onBookNow}
          >
            Book Your Adventure Now
          </Button>
          
          <p className="text-white/70 mt-6 text-sm">
            Limited spots available. A £300 deposit secures your place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HaggisinJapanBookingCta;
