
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const HaggisinJapanHero = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollPosition = window.scrollY;
        // Move the background image down slightly as user scrolls
        parallaxRef.current.style.transform = `translateY(${scrollPosition * 0.15}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-japan-indigo overflow-hidden">
      {/* Parallax Background Image with ref */}
      <div className="absolute inset-0 z-0" ref={parallaxRef}>
        <img
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//HaggisBanner1.jpeg"
          alt="Japan Tour with HaggisinJapan"
          className="w-full h-full object-cover opacity-70 object-bottom"
        />
      </div>
      
      <div className="japan-container z-10 py-16 text-center mt-[-60px]">
        <div className="max-w-4xl mx-auto p-6 rounded-lg">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-3 drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)]">
            TravelWith
          </h1>
          
          <div className="bg-japan-indigo bg-opacity-70 py-4 px-5 mb-5 inline-block rounded-md">
            <p className="text-3xl md:text-5xl text-white font-bold drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
              Craig from @Haggis.in.Japan
            </p>
          </div>
          
          <div className="mb-8">
            <p className="text-xl md:text-2xl text-white font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)]">
              11 October - 21 October 2025 • 11 Days
            </p>
            <p className="text-white mt-2 font-medium text-base italic drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
              Only 19 total spots - Limited spots left!
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-japan-indigo hover:bg-japan-indigo/80 text-white font-medium px-8 text-lg shadow-md"
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
              className="border-white text-white hover:bg-white/10 bg-japan-green bg-opacity-80 hover:bg-japan-green/90 text-lg shadow-md"
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
        </div>
      </div>
    </div>
  );
};

export default HaggisinJapanHero;
