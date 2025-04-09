
import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

// Updated authentic reviews data
const reviews = [
  {
    id: 1,
    name: "Celina",
    location: "Germany",
    text: "The trip was so great. I can't remember the last time I experienced and did so much in 10 days. I felt at home in the group and in every accommodation. Everything was so well planned and organized, hardly any waiting times and I never got lost and never took the wrong train. I could always rely 100% on the information. Laura made sure the individual activities were very well chosen and the organization before the tour was also very good. Questions were answered immediately and tips was were given and contact was made via WhatsApp. The calls were also very helpful.",
    rating: 5
  },
  {
    id: 2,
    name: "Anna",
    location: "Germany",
    text: "Joining the Japan trip that Laura provided was one of the best decisions I've ever made. The itinerary is well structured, makes sure that you get to see a lot of Japan and learn a lot of the Japanese culture. So if you're worried about the language barrier and the cultural differences, I can assure you that you're in best hands on Laura's trips. She answered my questions I had beforehand really fast and always provided lots of information. Once I booked this trip Laura opened up a WhatsApp group so we could get to know each other and of course communicate during the trip. No matter if you plan to join the group trip on your own as I did or with a friend or your partner, you will make friends with your fellow travelers really fast and have loads of fun during this trip. If you want to join a group trip that has a itinerary that is worth its price, with lovely people you'll have a lot of fun with and maybe develop friendships that will last beyond the trip, here's your sign to book a tour with Laura. I would book this tour all over again and I can imagine booking another trip with her.",
    rating: 5
  },
  {
    id: 3,
    name: "Jheri",
    location: "USA",
    text: "This trip was a perfect introduction to Japan. With only 10 days to experience an entire country, the itinerary was well balanced with must-see activities, travel, and down time. The organization and coordination done by Laura made this trip so easy. She won my confidence from the very beginning and I never doubted that she had all the logistics under control. Her management allowed me to let go of my stress and truly vacation. I appreciate all of her work in communicating before the trip and coordinating the operations as we went.",
    rating: 5
  },
  {
    id: 4,
    name: "Cat",
    location: "USA",
    text: "This is my and my partner's first group tour together, and I was pleasantly surprised at how much we enjoyed letting go of control! :) The best part of the trip for me has been the people—going on an adventure with an international group who are such unique and interesting individuals but all share a love for travel and experiencing new things was an absolute highlight. If you want to do a TON on your Japan trip, and you're overwhelmed by the vast pool of information on Instagram, TikTok, blogs, and vlogs….this is the tour for you! In the midst of trying to plan a Japan trip, I saw Laura running a group tour and decided to just jump on the chance to save my and my partner's time and sanity. We wanted to do a big overview of Japan, and not just Tokyo—with the idea that we could also come back someday to the places we enjoyed the most, and we got exactly that. Going in, you need to know it's jam-packed—tons to do, it will be a blur, but you always have the option to skip things; in the end, I do believe it is worth the time and stress saved. Laura did a great job with planning, adjusting the itinerary as weather/outside factors came into play, and also keeping the group a manageable size. I'm so sad the tour is over, but so happy to have met such unique, interesting people who came together all through Laura",
    rating: 5
  },
  {
    id: 5,
    name: "Anne",
    location: "Germany",
    text: "We had the best time in Japan! I'm so glad we decided to go on the group trip to Japan with Laura. The days were wonderful and flew by. We made so many amazing, funny, extraordinary, and awe-inspiring memories. Thanks to Laura's excellent organization before the trip, we were well prepared from the start. I particularly liked the group calls before the trip; they allowed us to get to know each other as a group and clarify any questions we had. The trip was so much better than expected, and I can definitely recommend the group trip with Laura.",
    rating: 5
  },
  {
    id: 6,
    name: "Birgit",
    location: "Austria",
    text: "I will never forget my first trip to Japan. Yes, my first. I'm sure there will be more to come. The organization before the trip was great. Plenty of information about arrival, eSIM, etc. Laura from Ourtravelgroups helped us book flights. We also had two video calls where we could ask any questions we had. Laura optimized the program brilliantly. There was plenty to see and experience. I particularly enjoyed the kimonos and the kendo class in Kyoto.",
    rating: 5
  },
  {
    id: 7,
    name: "Visesh",
    location: "India",
    text: "Travelling for the 3rd time in the last 10 months with you and already planned a 4th time should make it obvious how awesome it is to travel with you and how much I trust you to organise the trip. The destinations, the itinerary and the timings were always perfect. Japan was in my list for a long time and the last 12 days were just awesome. It was a very well perfectly worked out itenary and I liked every bit of it.",
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
            What Travelers Say About Our.TravelTreats Japan tours!
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
