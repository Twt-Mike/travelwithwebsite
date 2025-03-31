
import { useState } from 'react';
import { Star, Calendar, Users, Clock, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tours = [
  {
    id: 1,
    title: "Tokyo Explorer",
    description: "Experience the best of Tokyo, from traditional temples to futuristic skyscrapers.",
    days: 5,
    maxPeople: 12,
    price: 1299,
    rating: 4.9,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?q=80&w=1836&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Kyoto Cultural Immersion",
    description: "Discover ancient temples, traditional tea ceremonies, and beautiful gardens in historic Kyoto.",
    days: 4,
    maxPeople: 10,
    price: 1099,
    rating: 4.8,
    reviewCount: 98,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1980&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Mount Fuji Adventure",
    description: "Hike the iconic Mount Fuji and explore the beautiful surrounding Five Lakes region.",
    days: 3,
    maxPeople: 8,
    price: 899,
    rating: 4.7,
    reviewCount: 86,
    image: "https://images.unsplash.com/photo-1546529249-8de036dd3c9a?q=80&w=1973&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Osaka Food Journey",
    description: "Taste your way through Osaka, Japan's kitchen and street food paradise.",
    days: 4,
    maxPeople: 12,
    price: 1199,
    rating: 4.9,
    reviewCount: 112,
    image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=1920&auto=format&fit=crop"
  }
];

const TourCard = ({ tour, index }: { tour: typeof tours[0], index: number }) => {
  return (
    <div 
      className="bg-white rounded-lg overflow-hidden shadow-md card-hover"
      style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={tour.image} 
          alt={tour.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-japan-pink text-japan-slate px-3 py-1 rounded-full font-medium">
          ${tour.price}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-yellow-500 mb-2">
          <Star className="fill-current h-4 w-4" />
          <span className="ml-1 text-sm font-medium">{tour.rating}</span>
          <span className="mx-1 text-gray-400">•</span>
          <span className="text-sm text-gray-500">{tour.reviewCount} reviews</span>
        </div>
        <h3 className="text-xl font-serif font-medium text-japan-indigo mb-2">{tour.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{tour.description}</p>
        <div className="flex flex-wrap gap-3 mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-japan-indigo" />
            <span>{tour.days} days</span>
          </div>
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1 text-japan-indigo" />
            <span>Max {tour.maxPeople}</span>
          </div>
        </div>
        <Button className="w-full bg-japan-indigo hover:bg-japan-indigo/90 text-white flex items-center justify-center gap-2">
          View Details
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const FeaturedTours = () => {
  return (
    <section className="py-20 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Popular Japan Tours</h2>
          <p className="section-subtitle mx-auto">
            Discover our most loved travel experiences, carefully crafted to immerse you in 
            the beauty, culture, and flavors of Japan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white px-8">
            View All Tours
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
