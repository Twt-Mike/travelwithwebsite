
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Reviews data
const reviews = [
  {
    id: 1,
    name: "Evelyn S.",
    location: "USA",
    text: "I can't say enough amazing things about this tour and Laura! She is so warm and inviting, and an excellent guide. She knows all the best spots and creates the most incredible itinerary. I went on this tour solo and made friends for life. This was truly the experience of a lifetime and I'm already planning my next trip with Laura!",
    rating: 5
  },
  {
    id: 2,
    name: "Mark T.",
    location: "Canada",
    text: "This was our first organized tour and it exceeded every expectation. Laura's knowledge of Japan is impressive, and her enthusiasm is contagious. The itinerary hit all the must-see spots while including unique experiences we would never have found on our own. The small group size made it feel personal and allowed us to really immerse ourselves in Japanese culture.",
    rating: 5
  },
  {
    id: 3,
    name: "Sophia L.",
    location: "Australia",
    text: "If you're considering this tour - DO IT! Laura is an amazing guide who handles all the logistics seamlessly. Having a local who speaks Japanese made the experience so much richer. We visited incredible places, ate at restaurants we would never have found on our own, and made wonderful connections with our group. Worth every penny and more!",
    rating: 5
  },
  {
    id: 4,
    name: "Daniel K.",
    location: "UK",
    text: "This tour was the perfect blend of seeing major attractions and experiencing hidden gems. Laura is knowledgeable, organized, and fun! The accommodations were excellent, transportation was seamless, and the activities were diverse and engaging. I particularly loved the hands-on cultural experiences like the tea ceremony and kimono fitting.",
    rating: 5
  },
  {
    id: 5,
    name: "Mia J.",
    location: "Germany",
    text: "Laura's attention to detail and genuine care for everyone in the group made this tour special. As a solo traveler, I felt immediately welcome. The itinerary was thoughtfully designed with a perfect balance of guided activities and free time. Japan is magical, and experiencing it with Laura and our group made it unforgettable. Highly recommend!",
    rating: 5
  }
];

const ReviewsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => 
          prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // 5 seconds interval
    }
    
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [isPaused]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    // Pause autoplay briefly when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
    // Pause autoplay briefly when manually navigating
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <section className="py-20 bg-[#f4f0eb]" id="reviews">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-[#002e3e] mb-4">
            What Travelers Say About Our Tours
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Read firsthand experiences from travelers who have joined Laura on this unforgettable journey
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="carousel-container overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="text-center md:text-left flex-1">
                        <div className="flex justify-center md:justify-start gap-1 text-yellow-500 mb-3">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 italic">"{review.text}"</p>
                        <div>
                          <h4 className="font-serif text-[#002e3e] text-lg font-medium">
                            {review.name}
                          </h4>
                          <p className="text-gray-600 text-sm">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 10000);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex 
                    ? 'bg-[#002e3e] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#002e3e] hover:bg-[#002e3e] hover:text-white transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-8 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[#002e3e] hover:bg-[#002e3e] hover:text-white transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsCarousel;
