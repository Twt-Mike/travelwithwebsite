
import { useState } from 'react';
import { CalendarDays, ChevronDown, ChevronUp } from 'lucide-react';

const itineraryData = [
  {
    day: 1,
    date: "April 5",
    title: "Welcome to Tokyo",
    description: "Arrive at Narita/Haneda Airport where you'll be greeted and transferred to our hotel in Tokyo. Evening welcome dinner with the group to meet your fellow travelers and OurTravelTreats hosts.",
    highlights: ["Airport pickup", "Hotel check-in", "Welcome dinner at local izakaya"]
  },
  {
    day: 2,
    date: "April 6",
    title: "Tokyo Exploration Day",
    description: "Full day exploring Tokyo's highlights with our local guide. We'll visit the famous Tsukiji Outer Market, the peaceful Meiji Shrine, and the fashionable districts of Harajuku and Shibuya.",
    highlights: ["Tsukiji Outer Market breakfast", "Meiji Shrine", "Harajuku & Takeshita Street", "Shibuya Crossing", "Group dinner"]
  },
  {
    day: 3,
    date: "April 7",
    title: "Tokyo's Cultural Treasures",
    description: "Discover Tokyo's traditional side with visits to Asakusa's Senso-ji Temple and the Tokyo National Museum. Afternoon tea ceremony experience followed by free time to explore.",
    highlights: ["Senso-ji Temple & Nakamise Shopping Street", "Tokyo National Museum", "Traditional tea ceremony", "Free evening"]
  },
  {
    day: 4,
    date: "April 8",
    title: "Tokyo to Hakone",
    description: "Morning departure to Hakone, the scenic mountain town famous for its hot springs and views of Mt. Fuji. Enjoy a traditional ryokan stay with onsen experience.",
    highlights: ["Bullet train to Hakone", "Lake Ashi cruise", "Mt. Fuji viewing (weather permitting)", "Traditional ryokan stay", "Kaiseki dinner"]
  },
  {
    day: 5,
    date: "April 9",
    title: "Hakone to Kyoto",
    description: "Morning at leisure in Hakone before departing for Kyoto, Japan's cultural capital. Evening walking tour of Gion district with chance to spot geisha.",
    highlights: ["Bullet train to Kyoto", "Hotel check-in", "Gion evening walking tour", "Dinner at local restaurant"]
  },
  {
    day: 6,
    date: "April 10",
    title: "Kyoto Highlights",
    description: "Full day exploring Kyoto's UNESCO World Heritage sites including the golden Kinkaku-ji Temple, Arashiyama Bamboo Grove, and historic Nijo Castle.",
    highlights: ["Kinkaku-ji (Golden Pavilion)", "Arashiyama Bamboo Grove", "Nijo Castle", "Free evening"]
  },
  {
    day: 7,
    date: "April 11",
    title: "Kyoto Cultural Day",
    description: "Immerse yourself in Japanese culture with a Japanese cooking class and traditional craft workshop. Afternoon visit to the breathtaking Fushimi Inari Shrine.",
    highlights: ["Japanese cooking class", "Traditional craft workshop", "Fushimi Inari Shrine", "Group dinner"]
  },
  {
    day: 8,
    date: "April 12",
    title: "Kyoto to Osaka",
    description: "Morning at leisure before departing for vibrant Osaka. Evening street food tour in Dotonbori, Osaka's renowned food district.",
    highlights: ["Free morning in Kyoto", "Train to Osaka", "Hotel check-in", "Dotonbori food tour"]
  },
  {
    day: 9,
    date: "April 13",
    title: "Osaka & Nara Day Trip",
    description: "Morning visit to Osaka Castle followed by a half-day trip to nearby Nara to see the famous deer park and impressive Todai-ji Temple.",
    highlights: ["Osaka Castle", "Nara Park", "Todai-ji Temple", "Kasuga Taisha Shrine", "Free evening"]
  },
  {
    day: 10,
    date: "April 14",
    title: "Osaka Free Day & Farewell",
    description: "Free day to explore Osaka at your own pace or join optional activities. Evening farewell celebration dinner to reminisce about our journey together.",
    highlights: ["Free day with optional activities", "Shopping opportunities", "Farewell celebration dinner"]
  },
  {
    day: 11,
    date: "April 15",
    title: "Departure Day",
    description: "Check out of the hotel and transfer to Kansai International Airport for your flights home. Say goodbye to Japan with memories to last a lifetime!",
    highlights: ["Hotel checkout", "Airport transfer", "Departure"]
  }
];

const ItineraryDay = ({ day, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <div 
        className="flex justify-between items-center py-5 cursor-pointer"
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center justify-center bg-japan-indigo text-white rounded-lg w-14 h-14 flex-shrink-0">
            <span className="text-xs font-medium">DAY</span>
            <span className="text-xl font-medium">{day.day}</span>
          </div>
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
              <CalendarDays className="h-4 w-4" />
              <span>{day.date}</span>
            </div>
            <h3 className="font-medium text-japan-indigo">{day.title}</h3>
          </div>
        </div>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-japan-indigo" />
          ) : (
            <ChevronDown className="h-5 w-5 text-japan-indigo" />
          )}
        </div>
      </div>
      
      {isOpen && (
        <div className="pb-6 pl-20 pr-4 -mt-2 animate-fade-in">
          <p className="text-gray-700 mb-4">{day.description}</p>
          <div>
            <h4 className="text-sm font-medium text-japan-indigo mb-2">Daily Highlights:</h4>
            <ul className="space-y-1">
              {day.highlights.map((highlight, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-japan-pink rounded-full"></span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

const TourItinerary = () => {
  const [openDay, setOpenDay] = useState(1);

  const toggleDay = (dayNumber) => {
    if (openDay === dayNumber) {
      setOpenDay(null);
    } else {
      setOpenDay(dayNumber);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Your 11-Day Journey</h2>
          <p className="section-subtitle mx-auto">
            A carefully curated itinerary blending must-see highlights with unique experiences
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-japan-indigo p-6 text-white">
            <h3 className="text-xl font-medium">Complete Itinerary</h3>
            <p className="text-white/80 text-sm">Click each day to expand details</p>
          </div>
          <div className="p-6">
            {itineraryData.map((day) => (
              <ItineraryDay 
                key={day.day} 
                day={day} 
                isOpen={openDay === day.day}
                toggleOpen={() => toggleDay(day.day)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10 text-sm text-gray-500">
          <p>Note: Itinerary subject to minor changes based on local conditions and special opportunities</p>
        </div>
      </div>
    </section>
  );
};

export default TourItinerary;
