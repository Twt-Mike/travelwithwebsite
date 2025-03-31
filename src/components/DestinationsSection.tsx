
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const destinations = [
  {
    id: 1,
    name: "Tokyo",
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1836&auto=format&fit=crop",
    description: "Experience the perfect blend of ultramodern and traditional in Japan's bustling capital."
  },
  {
    id: 2,
    name: "Kyoto",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1980&auto=format&fit=crop",
    description: "Explore ancient temples, traditional tea houses, and beautiful bamboo forests."
  },
  {
    id: 3,
    name: "Osaka",
    image: "https://images.unsplash.com/photo-1590559899731-a382839e5549?q=80&w=1974&auto=format&fit=crop",
    description: "Dive into the food capital of Japan and experience its vibrant urban culture."
  }
];

const DestinationsSection = () => {
  return (
    <section className="py-20 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Top Japan Destinations</h2>
          <p className="section-subtitle mx-auto">
            Discover the most captivating places across Japan, from bustling modern cities 
            to tranquil historical sites
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div 
              key={destination.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg h-96 animate-fade-in"
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
                  <p className="text-white/80 mb-4 text-sm opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    {destination.description}
                  </p>
                  <Button className="bg-japan-pink hover:bg-japan-pink/90 text-japan-slate flex items-center gap-1 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Explore <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsSection;
