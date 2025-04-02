
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const destinations = [
  {
    id: 1,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1836&auto=format&fit=crop",
    description: "Iconic cityscapes and cultural fusion"
  },
  {
    id: 2,
    name: "Kyoto",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1980&auto=format&fit=crop",
    description: "Ancient traditions, temples, and serene gardens"
  },
  {
    id: 3,
    name: "Osaka",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1974&auto=format&fit=crop",
    description: "Culinary adventures and vibrant nightlife"
  },
  {
    id: 4,
    name: "Takayama",
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop",
    description: "Authentic rural Japan and historical charm"
  },
  {
    id: 5,
    name: "Koyasan",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1836&auto=format&fit=crop",
    description: "Spiritual experiences and serene mountain temples"
  },
  {
    id: 6,
    name: "Hiroshima",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1980&auto=format&fit=crop",
    description: "Historical landmarks and beautiful coastal scenery"
  }
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Inspire Your Audience – Explore Japan's Iconic Destinations</h2>
          <p className="section-subtitle mx-auto">
            Every Travel With journey is entirely custom-built around your vision. Here are some incredible places we can include in your bespoke itinerary.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg h-72 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-medium mb-2">{destination.name}</h3>
                  <p className="text-white/80 mb-4 text-sm">{destination.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/contact">
            <Button variant="outline" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white px-8">
              Plan Your Custom Trip
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
