
import { Utensils, Camera, MapPin, LandPlot } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: "Culinary Adventures",
    description: "Savor authentic Japanese cuisine, from street food to Michelin-starred dining experiences.",
    icon: Utensils,
    color: "text-japan-pink",
    bgColor: "bg-japan-pink/10"
  },
  {
    id: 2,
    title: "Cultural Immersion",
    description: "Participate in traditional tea ceremonies, calligraphy classes, and local festivals.",
    icon: LandPlot,
    color: "text-japan-indigo",
    bgColor: "bg-japan-indigo/10"
  },
  {
    id: 3,
    title: "Photography Tours",
    description: "Capture Japan's breathtaking landscapes and iconic landmarks with expert guidance.",
    icon: Camera,
    color: "text-japan-green",
    bgColor: "bg-japan-green/10"
  },
  {
    id: 4,
    title: "Hidden Gems",
    description: "Explore off-the-beaten-path destinations known only to locals and seasoned travelers.",
    icon: MapPin,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Unforgettable Experiences</h2>
          <p className="section-subtitle mx-auto">
            Our tours go beyond typical sightseeing, offering authentic experiences that connect you with 
            Japan's culture, people, and traditions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((experience, index) => (
            <div 
              key={experience.id} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
              style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
            >
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full ${experience.bgColor} flex items-center justify-center`}>
                <experience.icon className={`h-8 w-8 ${experience.color}`} />
              </div>
              <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">
                {experience.title}
              </h3>
              <p className="text-gray-600">
                {experience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
