
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CtaSection = () => {
  return (
    <section className="py-20 relative">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-japan-indigo/70 mix-blend-multiply" />
      </div>

      <div className="japan-container relative z-10 text-center">
        <div className="max-w-3xl mx-auto text-white space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium">
            Ready to Host Your Custom Japan Trip?
          </h2>
          <p className="text-lg opacity-90">
            Contact our expert team to start designing an unforgettable travel experience tailored specifically to your audience.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="btn-primary px-8 py-6 text-lg">
                Contact Us to Start Planning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
