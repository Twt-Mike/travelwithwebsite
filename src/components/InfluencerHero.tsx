
import { CalendarDays } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfluencerHero = () => {
  return (
    <section className="relative influencer-hero">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/public/lovable-uploads/c78032d5-5066-4019-85f8-7a16228cffdf.png")',
        }}
      >
        <div className="absolute inset-0 bg-japan-indigo/60 mix-blend-multiply" />
      </div>

      <div className="japan-container relative z-10 flex flex-col justify-center h-full min-h-[90vh] pt-24 pb-20">
        <div className="max-w-3xl text-white space-y-6 animate-fade-in">
          <div className="inline-block bg-japan-pink/90 px-4 py-2 rounded-lg text-white font-medium mb-2">
            Exclusive Tour with Laura
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
            Journey Through Japan with <span className="text-japan-pink">Laura</span>
          </h1>
          <div className="flex items-center gap-2 text-white/90 bg-black/30 inline-block px-4 py-2 rounded-lg">
            <CalendarDays className="h-5 w-5" />
            <span className="font-medium">September 22 - October 3, 2025 • 11 Days</span>
          </div>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl">
            Join Laura on this once-in-a-lifetime adventure through Japan's most iconic destinations. 
            Experience authentic culture, cuisine, and breathtaking landscapes alongside like-minded travelers.
          </p>
          <div className="flex flex-wrap gap-4 pt-6">
            <Button size="lg" className="bg-japan-pink hover:bg-japan-pink/90 text-white px-8 py-6 text-lg">
              Book Your Spot Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              View Detailed Itinerary
            </Button>
          </div>
          <div className="text-white/80 text-sm mt-6">
            <p>Only 16 spots available • Limited spaces remain</p>
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
    </section>
  );
};

export default InfluencerHero;
