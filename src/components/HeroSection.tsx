
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useEffect, useState, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const hostNames = [
  "Craig from HaggisInJapan",
  "OurTravelTreats",
  "ExploreWithEm",
  "Tessa Travels",
  "Katie in Kyoto",
  "WanderWithWendy",
  "Nomad with Nate",
  "TokyoTalks",
  "Jenna's TravelFam",
  "Your Brand Here"
];

const HeroSection = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const animationRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();

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

  // Handle the name animation
  useEffect(() => {
    // Start the animation
    let index = 0;
    const animationSpeed = 3000 / hostNames.length; // Complete all names in 3 seconds
    
    // Clear any existing interval
    if (animationRef.current) {
      clearInterval(animationRef.current);
    }
    
    // Set up new interval
    animationRef.current = setInterval(() => {
      index++;
      
      if (index >= hostNames.length) {
        // Stop at the last name
        setCurrentNameIndex(hostNames.length - 1);
        setIsAnimationComplete(true);
        if (animationRef.current) {
          clearInterval(animationRef.current);
          animationRef.current = null;
        }
      } else {
        setCurrentNameIndex(index);
      }
    }, animationSpeed);
    
    // Clean up on unmount
    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current);
        animationRef.current = null;
      }
    };
  }, []);

  return (
    <section className="relative hero-image">
      {/* Background image - using new masked image */}
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url("https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ip//Bannernew.png")',
          backgroundPosition: 'center'
        }}
      />

      <div className="japan-container relative z-10 flex flex-col justify-center h-full min-h-[90vh] pt-24 pb-20">
        <div className="max-w-full sm:max-w-[40%] text-white space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="mb-2">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-wide drop-shadow-md" style={{ fontFamily: "'DM Serif Display', serif", textShadow: '0px 2px 4px rgba(0,0,0,0.3)' }}>
              TravelWith
            </h1>
            <div className="relative h-12 mt-1 overflow-hidden">
              <div 
                className={`text-3xl md:text-4xl lg:text-5xl font-medium leading-tight drop-shadow-md transition-transform duration-300 ease-in-out italic ${isAnimationComplete ? 'text-japan-pink' : 'text-white'}`} 
                style={{ 
                  fontFamily: "'DM Serif Display', serif", 
                  textShadow: '0px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                {hostNames[currentNameIndex]}
              </div>
            </div>
          </div>
          <p className={`text-lg md:text-xl ${isMobile ? 'bg-black/30 p-3 rounded backdrop-blur-sm' : 'opacity-90'} drop-shadow-sm`} style={{ textShadow: isMobile ? 'none' : '0px 1px 2px rgba(0,0,0,0.2)' }}>
            Custom-built group travel experiences for your audience, community, or brand. Your vision, our expertise—completely unique journeys.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <HashLink to="#cta-section" smooth>
              <Button size="lg" className="btn-primary px-8 py-6 text-lg shadow-md hover:shadow-lg transition-shadow">
                Plan Your Trip
              </Button>
            </HashLink>
            <HashLink to="#experience-section" smooth>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg shadow-md hover:shadow-lg transition-shadow">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </HashLink>
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
