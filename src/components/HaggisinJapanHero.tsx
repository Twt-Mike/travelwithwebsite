
import { ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';

const HaggisinJapanHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-japan-indigo overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/placeholder.svg"
          alt="Japan Tour with HaggisinJapan"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="japan-container z-10 pt-24 md:pt-32 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Japan Adventure with Craig
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            11 Days | 6 Locations | October 11 - 21, 2025
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
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
              Book Now
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-white text-white hover:bg-white/10"
              onClick={() => {
                const detailsElement = document.getElementById('tour-details');
                if (detailsElement) {
                  detailsElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Tour Details
            </Button>
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
