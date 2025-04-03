
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import JapanExperienceCarousel from './JapanExperienceCarousel';

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Your Custom-Built Japan Trip Awaits</h2>
          <p className="section-subtitle mx-auto">
            Partner with TravelWith to design an exclusive trip for your audience or community. Together we craft a fully personalized experience, showcasing Japan your way.
          </p>
          <div className="mt-8">
            <Link to="/about">
              <Button size="lg" className="bg-japan-indigo hover:bg-japan-indigo/90 text-white">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Add the carousel component */}
        <JapanExperienceCarousel />
      </div>
    </section>
  );
};

export default ExperienceSection;
