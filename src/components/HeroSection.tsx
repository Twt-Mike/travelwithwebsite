
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative hero-image">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("/public/lovable-uploads/d2eb9e50-b99f-4a8e-98fc-70839f0e480f.png")',
        }}
      >
        <div className="absolute inset-0 bg-japan-indigo/50 mix-blend-multiply" />
      </div>

      <div className="japan-container relative z-10 flex flex-col justify-center h-full min-h-[90vh] pt-24 pb-20">
        <div className="max-w-2xl text-white space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight">
            Travel With Your Community
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Join creator-led tours designed specifically for passionate communities. 
            Authentic experiences, like-minded travelers, unforgettable memories.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/ourtraveltreats-japan">
              <Button size="lg" className="btn-primary px-8 py-6 text-lg">
                Explore Our Japan Tour
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                <span>Learn More</span>
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
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
