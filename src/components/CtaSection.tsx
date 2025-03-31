
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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
            Ready for Your Japanese Adventure?
          </h2>
          <p className="text-lg opacity-90">
            Let us help you create unforgettable memories in the Land of the Rising Sun. 
            Our expert team is ready to craft the perfect Japan experience for you.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="btn-primary px-8 py-6 text-lg">
              Book Your Tour Now
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              <span>Contact Us</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
