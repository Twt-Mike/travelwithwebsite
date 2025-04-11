
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect } from 'react';

const HeroSection = () => {
  // Add DM Serif Display font to the document head
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:wght@400&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <section className="relative hero-image overflow-hidden">
      {/* Split hero layout */}
      <div className="flex h-full min-h-[90vh]">
        {/* Left side - Text content with solid background */}
        <div className="w-full lg:w-[45%] bg-japan-cream z-10 relative flex items-center justify-center">
          <div className="japan-container py-16 px-6 lg:px-10 max-w-3xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-wide font-serif text-japan-indigo" style={{ fontFamily: "'DM Serif Display', serif" }}>
                TravelWith
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight text-japan-indigo mb-4" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Create unforgettable journeys
            </h2>
            <p className="text-lg md:text-xl text-japan-slate opacity-90 mb-8">
              Custom-built group travel experiences for your audience, community, or brand. Your vision, our expertise—completely unique journeys.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <HashLink to="#contact-form" smooth>
                <Button size="lg" className="btn-primary px-8 py-6 text-lg">
                  Plan Your Trip
                </Button>
              </HashLink>
              <Link to="/about">
                <Button variant="outline" size="lg" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo/10 px-8 py-6 text-lg">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Diagonal shape to create the angled edge */}
          <div className="absolute top-0 right-0 h-full w-[15%] lg:block hidden" style={{
            background: 'linear-gradient(135deg, transparent 50%, #F9F7F3 50%)',
          }}></div>
        </div>
        
        {/* Right side - Image with diagonal mask */}
        <div className="w-[55%] absolute right-0 top-0 h-full lg:block hidden overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url("https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//homebanner.png")',
              backgroundPosition: 'center 15%',
              clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
            }}
          >
            <div className="absolute inset-0 bg-japan-indigo/30 mix-blend-multiply" />
          </div>
        </div>
        
        {/* Mobile background (full-width image) */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
          style={{
            backgroundImage: 'url("https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//homebanner.png")',
            backgroundPosition: 'center 15%',
          }}
        >
          <div className="absolute inset-0 bg-japan-indigo/50 mix-blend-multiply" />
        </div>
        
        {/* Mobile text overlay */}
        <div className="japan-container relative z-10 flex flex-col justify-center h-full min-h-[90vh] pt-24 pb-20 lg:hidden">
          <div className="max-w-2xl text-white space-y-6 animate-fade-in bg-japan-indigo/40 backdrop-blur-sm p-6 rounded-lg" style={{ animationDelay: '0.2s' }}>
            <div className="mb-2">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-wide" style={{ fontFamily: "'DM Serif Display', serif" }}>
                TravelWith
              </h1>
            </div>
            <h2 className="text-3xl md:text-4xl font-medium leading-tight" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Create unforgettable journeys
            </h2>
            <p className="text-lg md:text-xl opacity-90">
              Custom-built group travel experiences for your audience, community, or brand. Your vision, our expertise—completely unique journeys.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <HashLink to="#contact-form" smooth>
                <Button size="lg" className="btn-primary px-8 py-6 text-lg">
                  Plan Your Trip
                </Button>
              </HashLink>
              <Link to="/about">
                <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
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

export default HeroSection;
