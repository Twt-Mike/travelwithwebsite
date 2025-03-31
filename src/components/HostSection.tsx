
import { Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HostSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="inline-block bg-japan-pink/10 text-japan-pink px-3 py-1 rounded-lg text-sm font-medium mb-2">
                Your Host
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo mb-4">
                Meet Laura
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Laura is a passionate travel enthusiast who has visited over 45 countries. 
                Her love for Japanese culture, food, and experiences led her to create this special tour for her community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Having visited Japan multiple times, she's partnered with a Professional Tour Leader & Japan Expert to curate the perfect itinerary that balances must-see attractions with 
                hidden gems known only to locals. Her energetic and friendly approach ensures every traveler feels included and has an unforgettable experience.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a 
                  href="https://www.instagram.com/Our.TravelTreats" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                    <Instagram className="h-4 w-4" />
                    <span>@Our.TravelTreats</span>
                  </Button>
                </a>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="/public/lovable-uploads/cc5bce8a-a9fb-4555-8c4a-54457388a15a.png" 
                alt="Laura - Your Host" 
                className="rounded-lg shadow-lg z-10 relative"
              />
              <div className="absolute -bottom-4 -right-4 bg-japan-pink h-32 w-32 rounded-full -z-10"></div>
              <div className="absolute -top-4 -left-4 bg-japan-indigo/20 h-32 w-32 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostSection;
