
import { CalendarDays } from 'lucide-react';
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
            <span className="text-3xl md:text-4xl lg:text-5xl opacity-90 block mb-2">TravelWith</span>
            <span className="inline-block bg-[#599d9f] text-white px-4 py-1 rounded-lg">Craig from @Haggis.in.Japan</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 text-white/90 bg-black/30 inline-block px-4 py-2 rounded-lg mb-6">
            <CalendarDays className="h-5 w-5" />
            <span className="font-medium">October 11 - 21, 2025 • 11 Days</span>
          </div>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Join Craig for this once-in-a-lifetime adventure through Japan's most iconic destinations.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#599d9f] hover:bg-[#599d9f]/90 text-white px-8 py-6 text-lg"
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
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
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
          
          <div className="text-white/80 text-sm mt-2">
            <p>Only 19 total spots!</p>
          </div>
        </div>
      </div>
      
      {/* Curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full h-auto">
          <path 
            fill="#F9F7F3" 
            fillOpacity="1" 
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default HaggisinJapanHero;
