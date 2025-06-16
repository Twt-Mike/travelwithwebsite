

import { ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const HaggisinJapanCherryBlossomHero = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate the transform offset for parallax effect
  // Use a smaller parallax factor on mobile for subtler effect
  const parallaxFactor = isMobile ? 0.15 : 0.3;
  const translateY = scrollPosition * parallaxFactor;
  
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-japan-indigo overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://travelwith.tours/images/cherryblossom/banner.jpg"
          alt="Japan Cherry Blossom Tour with HaggisinJapan"
          className="w-full h-full object-cover object-center opacity-90"
          style={{ 
            objectPosition: "center 40%",
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
      </div>
      
      <div className="japan-container z-10 pt-16 md:pt-20 pb-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
            TravelWith
          </h1>
          
          <div className="bg-japan-pink bg-opacity-85 py-3 px-4 mb-4 inline-block rounded-md">
            <p className="text-2xl md:text-4xl text-white font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Craig from @Haggis.in.Japan - Cherry Blossom Edition
            </p>
            
            <p className="text-lg md:text-xl text-white font-medium mt-1 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              March 30 - April 9 2026 • 11 Days
            </p>
          </div>
          
          <div className="mb-6">
            <p className="text-white mt-2 font-medium text-sm italic drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              Only 20 total spots - Limited spots left!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-japan-pink hover:bg-japan-pink/80 text-white font-bold px-10 py-3 text-lg shadow-[0_4px_12px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.5)] transform hover:scale-105 transition-all duration-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}
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
              className="border-white text-white hover:bg-white/10 bg-japan-pink bg-opacity-60 hover:bg-japan-pink/70 shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] transition-all duration-200"
              onClick={() => {
                const detailsElement = document.getElementById('tour-details');
                if (detailsElement) {
                  detailsElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              View Detailed Itinerary
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

export default HaggisinJapanCherryBlossomHero;

