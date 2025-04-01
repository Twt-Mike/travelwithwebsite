
import Layout from '@/components/Layout';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1465778893808-b7af58d9a8e0?q=80&w=2075&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-japan-indigo/70 mix-blend-multiply" />
        </div>

        <div className="japan-container relative z-10 py-20">
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold leading-tight mb-6">
              Our Story
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Connecting communities through authentic travel experiences
            </p>
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

      {/* Our Mission */}
      <section className="py-20 bg-white">
        <div className="japan-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="section-title text-center mb-10">Our Mission</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                TravelWith was founded with a simple mission: to create authentic travel experiences that connect creators and their communities.
              </p>
              
              <p>
                We believe that travel is about more than just seeing new places—it's about sharing meaningful experiences with people who share your interests and passions. That's why we partner with creators to design custom tours specifically for their communities.
              </p>
              
              <h3 className="text-xl font-serif font-medium text-japan-indigo mt-10 mb-4">The TravelWith Difference</h3>
              
              <p>
                Unlike traditional tour operators who offer the same experiences to everyone, we build each tour from the ground up, working directly with creators to craft itineraries that reflect their unique perspective and resonate with their community.
              </p>
              
              <p>
                With over a decade of travel industry expertise and experience guiding more than 1,000 travelers across 60+ tours, we combine creator-led vision with professional operational excellence to deliver unforgettable journeys.
              </p>
              
              <h3 className="text-xl font-serif font-medium text-japan-indigo mt-10 mb-4">Our Approach</h3>
              
              <p>
                Every TravelWith tour is built on three core principles:
              </p>
              
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Community Connection:</strong> Travel with like-minded people who share your interests</li>
                <li><strong>Creator-Led Vision:</strong> Experience destinations through the unique lens of creators you know and trust</li>
                <li><strong>Operational Excellence:</strong> Enjoy seamless logistics and exceptional service throughout your journey</li>
              </ul>
              
              <p>
                We handle all the complex details—from accommodations and transportation to exclusive experiences and local connections—so you can focus on creating memories with your community.
              </p>
            </div>
            
            <div className="mt-12 text-center">
              <Button 
                size="lg" 
                className="btn-primary px-8 py-6 text-lg"
                onClick={() => window.location.href = '/ourtraveltreats-japan'}
              >
                Explore Our Tours <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
