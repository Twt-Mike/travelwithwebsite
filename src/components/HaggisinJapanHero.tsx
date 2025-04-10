
import { ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';

const HaggisinJapanHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-japan-indigo overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//HaggisBanner1.jpeg"
          alt="Japan Tour with HaggisinJapan"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="japan-container z-10 pt-24 md:pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            <span className="text-3xl md:text-4xl lg:text-5xl block opacity-90 mb-2">TravelWith</span>
            Craig from <span className="inline-block bg-japan-pink text-white px-4 py-1 rounded-lg">@Haggis.in.Japan</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            11 Days | 6 Locations | October 11 - 21, 2025
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              className="bg-japan-pink hover:bg-japan-pink/80 text-white font-medium px-8"
              onClick={() => {
                const bookingElement = document.getElementById('booking');
                if (bookingElement) {
                  bookingElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Book Your Spot Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => {
                const itineraryElement = document.getElementById('itinerary');
                if (itineraryElement) {
                  itineraryElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Detailed Itinerary
            </Button>
          </div>
          
          <div className="text-white/80 text-lg mb-12 animate-pulse">
            <p>Only 19 total spots! Limited left!</p>
          </div>
          
          <div className="flex justify-center">
            <ScrollLink
              to="tour-details"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white hover:text-japan-pink cursor-pointer transition-colors"
            >
              <div className="flex flex-col items-center">
                <span className="mb-2">Scroll to discover more</span>
                <ArrowDown className="animate-bounce" />
              </div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaggisinJapanHero;
