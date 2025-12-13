import { Users, Heart, Building2 } from 'lucide-react';

const tripTypes = [
  {
    id: 'host-creator',
    title: 'Host / Creator',
    icon: Users,
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&h=300&fit=crop',
  },
  {
    id: 'private-group',
    title: 'Private Group',
    icon: Heart,
    image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400&h=300&fit=crop',
  },
  {
    id: 'team-company',
    title: 'Team / Company',
    icon: Building2,
    image: 'https://images.unsplash.com/photo-1480796927426-f609979314bd?w=400&h=300&fit=crop',
  },
];

const TripTypeSection = () => {
  return (
    <section className="px-4 py-4">
      <h2 className="text-lg font-bold text-gray-900 mb-3">
        I am planning a trip as
      </h2>
      
      {/* Vertical stack on mobile, horizontal on larger screens */}
      <div className="flex flex-col gap-2 md:flex-row md:gap-3">
        {tripTypes.map((type) => (
          <button
            key={type.id}
            className="relative w-full md:flex-1 h-20 md:h-28 rounded-xl overflow-hidden group"
          >
            <img
              src={type.image}
              alt={type.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
            {/* Label */}
            <div className="absolute top-1/2 left-4 -translate-y-1/2">
              <span className="inline-block rounded-lg bg-[#1a2b49] px-3 py-1.5 text-sm font-semibold text-white">
                {type.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default TripTypeSection;
