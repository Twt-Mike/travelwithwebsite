import { ArrowDown } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import heroImage from '@/assets/haggis-japan-hero.jpg';

const HaggisinJapanHero = () => {
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

  const parallaxFactor = isMobile ? 0.15 : 0.3;
  const translateY = scrollPosition * parallaxFactor;
  
  return (
    <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Mount Fuji with cherry blossoms - Japan Tour with HaggisinJapan"
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: "center 30%",
            transform: `translateY(${translateY}px) scale(1.1)`,
            transition: 'transform 0.1s ease-out'
          }}
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/70" />
      </div>
      
      {/* Content */}
      <div className="japan-container z-10 pt-20 md:pt-24 pb-16 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading with elegant styling */}
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-rose-200 font-medium mb-3 animate-fade-in">
            Exclusive Group Tour
          </p>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 drop-shadow-lg">
            TravelWith
          </h1>
          
          {/* Host name with sakura-inspired accent */}
          <div className="relative inline-block mb-6">
            <div className="bg-gradient-to-r from-rose-500/90 via-pink-500/90 to-rose-400/90 py-3 px-6 md:px-8 rounded-full shadow-xl backdrop-blur-sm">
              <p className="text-xl md:text-3xl text-white font-bold tracking-wide">
                Craig from @Haggis.in.Japan
              </p>
            </div>
          </div>
          
          {/* Tour details */}
          <div className="mb-8 space-y-2">
            <p className="text-lg md:text-2xl text-white font-light tracking-wide">
              11 October - 21 October 2025 • 11 Days
            </p>
            <p className="text-rose-200 font-medium text-sm md:text-base">
              Only 19 total spots - Limited spots left!
            </p>
          </div>
          
          {/* Buttons with sakura theme */}
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-500 hover:to-pink-500 text-white font-semibold px-8 py-6 text-base rounded-full shadow-lg shadow-rose-500/30 transition-all duration-300 hover:scale-105"
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
              className="border-2 border-white/70 text-white hover:bg-white/20 bg-white/10 backdrop-blur-sm px-8 py-6 text-base rounded-full transition-all duration-300 hover:scale-105"
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
          
          {/* Scroll indicator */}
          <div className="flex justify-center">
            <ScrollLink
              to="tour-details"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-white/80 hover:text-white cursor-pointer transition-colors group"
            >
              <div className="flex flex-col items-center">
                <span className="mb-2 text-sm tracking-wide">Scroll to discover more</span>
                <ArrowDown className="animate-bounce group-hover:text-rose-300 transition-colors" />
              </div>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HaggisinJapanHero;
