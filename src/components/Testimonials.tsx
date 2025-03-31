
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "New York, USA",
    text: "Our trip to Japan was absolutely incredible! The tour guides were knowledgeable and friendly, and the itinerary was perfectly balanced. We got to experience both the bustling city life of Tokyo and the serene beauty of Kyoto. I can't recommend Japan Travel Treats enough!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 2,
    name: "Mark Williams",
    location: "London, UK",
    text: "Japan Travel Treats created a custom itinerary for my family that exceeded all our expectations. From the private tea ceremony to the guided hike at Mount Fuji, every detail was taken care of. My teenagers still talk about this trip as the best vacation we've ever taken.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    rating: 5
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    location: "Barcelona, Spain",
    text: "As a solo traveler, I was a bit nervous about visiting Japan, but Japan Travel Treats made me feel completely at ease. The small group tour was perfect - I made new friends while experiencing the incredible culture, food, and sights of Japan. I'm already planning my next trip!",
    image: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1989&auto=format&fit=crop",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Travelers Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it - hear from travelers who've experienced 
            our Japan tours firsthand
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg bg-japan-cream p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start gap-1 text-yellow-500 mb-2">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonials[activeIndex].text}"</p>
                  <div>
                    <h4 className="font-serif text-japan-indigo text-lg font-medium">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-500 text-sm">{testimonials[activeIndex].location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-japan-indigo scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-japan-indigo hover:bg-japan-indigo hover:text-white transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-japan-indigo hover:bg-japan-indigo hover:text-white transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
