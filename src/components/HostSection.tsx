
import { Instagram, Youtube, ExternalLink } from 'lucide-react';
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
                Meet OurTravelTreats
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Sarah and Mike from OurTravelTreats are passionate travel enthusiasts who have visited over 45 countries. 
                Their love for Japanese culture, food, and experiences led them to create this special tour for their community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Having visited Japan 5 times, they've curated the perfect itinerary that balances must-see attractions with 
                hidden gems known only to locals. Their energetic and friendly approach ensures every traveler feels included and has an unforgettable experience.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                  <Instagram className="h-4 w-4" />
                  <span>@OurTravelTreats</span>
                </Button>
                <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                  <Youtube className="h-4 w-4" />
                  <span>YouTube Channel</span>
                </Button>
                <Button variant="outline" size="sm" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  <span>Blog</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2069&auto=format&fit=crop" 
                alt="OurTravelTreats Hosts" 
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
