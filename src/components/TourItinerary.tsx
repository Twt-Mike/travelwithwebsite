
import { useState } from 'react';
import { CalendarDays, ChevronDown, ChevronUp, Map, Utensils, Bed } from 'lucide-react';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const itineraryData = [
  {
    day: 1,
    date: "April 5",
    title: "Tokyo Arrival Day",
    description: "Welcome to Tokyo — let the adventure begin! 🇯🇵✨ Your guide is available all day to assist with arrivals. Hotel check-in is at 3 PM in the scenic Asakusa district — arrive early to explore or relax at your own pace. In the evening, we'll meet in the lobby, enjoy a welcome dinner at one of our favourite local restaurants, and then experience Asakusa's charm with a guided night tour, including the iconic Senso-ji Temple — Tokyo's oldest and most famous!",
    activities: ["Senso-ji Temple Night Walk"],
    meals: ["Welcome Dinner"],
    accommodation: "Asakusa MONday Twin Ensuite (or similar)"
  },
  {
    day: 2,
    date: "April 6",
    title: "Tokyo",
    description: "Kick off the day with your Japan orientation — learning essential Japanese for your journey, including customs, cultural dos & don'ts, and useful language tips. Next, we'll explore the tranquil Meiji Shrine, a sacred site tucked away in the lush greenery of Yoyogi Park, dedicated to the emperor who modernized Japan. A short stroll brings us to the iconic Shibuya Crossing — one of the busiest intersections on the planet! Strike a pose with the loyal Hachiko statue, then take in breathtaking rooftop views of the organized chaos below. After some free time, we dive into Akihabara's neon-lit nightlife — think arcades, themed cafés, quirky shops, and bars with darts & beer pong. End the night on a high note with karaoke alongside locals! 🎤🔥",
    activities: ["Tokyo Sightseeing — Harajuku, Meiji Shrine, Shibuya Crossing, Akihabara Arcades"],
    meals: ["Breakfast"],
    accommodation: "Asakusa MONday Twin Ensuite (or similar)"
  },
  {
    day: 3,
    date: "April 7",
    title: "Tokyo",
    description: "Start the day with fresh and flavorful bites during a hands-on sushi-making class, using some of the world's best seafood. Next, we step into a mesmerizing digital world at TeamLabs Planets Tokyo, where immersive art installations blur the lines between reality and imagination. As evening falls, we'll soak in panoramic city views from the 46th floor of the Tokyo Metropolitan Building, then wander the nostalgic alleyways of Omoide Yokocho (Piss Alley) for a taste of old-school Tokyo dining. But the adventure isn't over yet! We'll explore Shinjuku's vibrant streets, spot Godzilla looming above the skyline, and dive into Tokyo's legendary nightlife — wrapping up in Golden Gai, a neon-lit maze of 200+ tiny, character-filled bars. ✨",
    activities: ["Sushi Making Class", "TeamLabs Planets", "Sightseeing — Shinjuku"],
    meals: ["Breakfast", "Lunch"],
    accommodation: "Asakusa MONday Twin Ensuite (or similar)"
  },
  {
    day: 4,
    date: "April 8",
    title: "Hakone & Mt. Fuji",
    description: "We'll leave the hustle of Tokyo behind as we ride the scenic RomanceCar to the picturesque mountain town of Hakone. After checking into our charming accommodation, take a moment to soak in the serene surroundings. Next, we'll soar over volcanic landscapes on the Hakone Ropeway, passing through Owakudani's steaming vents on our way to a breathtaking Mt. Fuji viewpoint (weather permitting). In the evening, we'll enjoy a delicious group dinner, and for those looking to fully embrace Japan's traditions, an optional onsen experience awaits — perfect for unwinding after a day of adventure. ♨️🏔️",
    activities: ["Fuji Viewing (weather permitting)", "Optional Onsen"],
    meals: ["Breakfast", "Dinner"],
    accommodation: "Twin Room (or similar)"
  },
  {
    day: 5,
    date: "April 9",
    title: "Kyoto",
    description: "We'll speed through the countryside on the legendary Shinkansen as we journey from Hakone to Kyoto, the cultural heart of Japan. In just a few hours, we'll arrive in this historic city, where we'll settle in for a three-night stay surrounded by centuries of tradition. After checking in, we'll step back in time with a walking tour of Kyoto's enchanting Gion District — a maze of lantern-lit streets, wooden machiya houses, and hidden tea houses. Keep your eyes peeled for a rare and unforgettable sighting of a Geisha (Maiko or Geiko-san) as they gracefully move between engagements. The evening is yours to enjoy — soak in the city's timeless atmosphere, savor Kyoto's world-famous cuisine, or simply unwind and take in the magic of Japan's ancient capital. ✨🏯",
    activities: ["Gion (Geisha) Town Visit"],
    meals: ["Breakfast"],
    accommodation: "Prince Smart Inn Sanjo Kyoto (or similar)"
  },
  {
    day: 6,
    date: "April 10",
    title: "Kyoto",
    description: "Rise and shine — today is an epic day in Kyoto! We're kicking things off with a sunrise visit to Fushimi Inari Shrine, home to the 10,000 Torii gates. With no crowds, we'll have this iconic spot almost to ourselves as we explore, snap incredible photos, and learn the legends behind the shrine. Next, we'll walk through one of Kyoto's largest cemeteries before arriving at Kiyomizu-dera, a breathtaking World Heritage Site. Then you'll get to choose your own Japanese Kimono to rent for the day, and we'll head to an authentic Japanese tea house for a traditional tea ceremony, learning the beautiful customs behind this ancient art. Afterward, the afternoon is yours — grab a matcha ice cream, explore Kyoto's charming streets, or take a well-earned nap.",
    activities: ["10,000 Torii Gates", "Kiyomizu-dera", "Tea Ceremony + Kimono"],
    meals: ["Breakfast"],
    accommodation: "Prince Smart Inn Sanjo Kyoto (or similar)"
  },
  {
    day: 7,
    date: "April 11",
    title: "Kyoto",
    description: "The day begins with a visit to the Golden Pavilion (Kinkaku-ji), where its shimmering gold exterior reflects beautifully over the tranquil pond. Next, we'll stroll through a serene Zen garden, soaking in the peaceful atmosphere before returning for a well-earned lunch. In the afternoon, we'll step into the world of the samurai with an immersive Kendo class, learning the fundamentals of this traditional Japanese martial art. The evening is yours to explore Kyoto — wander the charming streets, discover hidden bars, or enjoy dinner along the Kamogawa River as the city lights reflect off the water. ✨🏯🍶",
    activities: ["Golden Pavilion", "Zen Garden", "Kendo Class"],
    meals: ["Breakfast"],
    accommodation: "Prince Smart Inn Sanjo Kyoto (or similar)"
  },
  {
    day: 8,
    date: "April 12",
    title: "Osaka",
    description: "The day begins in Arashiyama, where we'll wander through the towering emerald-green Bamboo Forest — a scene straight out of a dream. Next, we'll hike up Monkey Mountain, where playful Japanese macaques roam freely, and soak in stunning panoramic views of Kyoto. To top it off, we'll drift along the scenic Ao River in a traditional boat, taking in the tranquil beauty of the surroundings. After our morning adventure, we'll return to Kyoto, grab our luggage, and hop on the train to Osaka, Japan's kitchen and entertainment capital. By evening, we'll dive into the bright lights of Dotonbori, Osaka's most iconic district, where neon signs reflect off the canal. A street food tour awaits, where we'll indulge in local favorites like takoyaki, okonomiyaki, and kushikatsu — the perfect way to experience Osaka's famous foodie culture. 🍜🍢🎡",
    activities: ["Bamboo Forest", "Monkey Mountain", "Dotonbori Street Food Tour"],
    meals: ["Breakfast", "Dinner"],
    accommodation: "Osaka WBF Namba (or similar)"
  },
  {
    day: 9,
    date: "April 13",
    title: "Osaka",
    description: "We'll start the day with a trip to Nara, where we'll meet the city's friendly, bowing deer — a unique and unforgettable experience! Then, we'll visit Todaiji Temple, home to the awe-inspiring Great Buddha, one of the largest bronze statues in the world. On our way back, we'll stop at Osaka Castle, a striking landmark surrounded by lush gardens and rich samurai history. Take in the views and explore the impressive grounds before heading back into the city. As the evening sets in, we'll gather for a delicious yakitori group dinner, indulging in perfectly grilled skewers and lively conversation — the perfect way to wrap up another incredible day in Japan! 🍢🏯✨",
    activities: ["Nara Park", "Todaiji Temple", "Osaka Castle"],
    meals: ["Breakfast", "Dinner"],
    accommodation: "Osaka WBF Namba (or similar)"
  },
  {
    day: 10,
    date: "April 14",
    title: "Hiroshima",
    description: "Enjoy a slow morning in Osaka — the perfect time to shop for souvenirs, explore local markets, or simply relax before our next adventure. In the afternoon, we'll board the Shinkansen to Hiroshima, gliding across Japan's landscape at high speed. After checking into our hotel, we'll visit the Hiroshima Peace Memorial Museum — a powerful and moving tribute that offers deep insight into the city's history and resilience. The evening is yours to unwind — stroll along the quiet riverside, try Hiroshima's famous okonomiyaki, or reflect on the day's experiences in this historic city. 🚄🌸",
    activities: ["Hiroshima Peace Memorial Museum"],
    meals: ["Breakfast"],
    accommodation: "Hotel Kuretakeso Hiroshima Otemachi (or similar)"
  },
  {
    day: 11,
    date: "April 15",
    title: "Hiroshima",
    description: "Our last full day in Japan takes us to the breathtaking island of Miyajima, home to one of Japan's most iconic sights — the floating torii gate of Itsukushima Shrine. With plenty of time to explore, you can visit sacred temples, stroll through the Hall of 1000 Mats, or hike up Mt. Misen for incredible panoramic views. Take in the island's rich history, enjoy the scenic walking trails, and savor local specialties like Hiroshima-style oysters and momiji manju. As the sun sets, we'll return to Hiroshima for one final evening together, reminiscing about the incredible journey we've shared. ⛩️🏯🌅",
    activities: ["Miyajima Island"],
    meals: ["Breakfast"],
    accommodation: "Hotel Kuretakeso Hiroshima Otemachi (or similar)"
  },
  {
    day: 12,
    date: "April 16",
    title: "Hiroshima Departure Day",
    description: "Our unforgettable journey comes to an end as we say our goodbyes in Hiroshima. Some travelers will catch their flights home, while others continue their adventure, exploring more of Japan at their own pace. Whether you're heading to the airport or setting off on a new chapter, we part ways with amazing memories, new friendships, and incredible stories to tell. Until next time — mata ne! ✈️🇯🇵✨",
    activities: ["N/A"],
    meals: ["Breakfast"],
    accommodation: "N/A"
  }
];

const ItineraryDay = ({ day }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <div className="flex items-start py-5">
        <div className="flex-shrink-0 mr-6">
          <div className="flex flex-col items-center justify-center bg-japan-indigo text-white rounded-lg w-14 h-14">
            <span className="text-xs font-medium">DAY</span>
            <span className="text-xl font-medium">{day.day}</span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <CalendarDays className="h-4 w-4" />
            <span>{day.date}</span>
          </div>
          <h3 className="font-medium text-japan-indigo text-lg mb-4">{day.title}</h3>
          
          <div className="pb-2 text-gray-700">
            <p className="mb-6">{day.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-japan-indigo/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-japan-indigo font-medium">
                  <Map className="h-4 w-4" />
                  <h4>Activities</h4>
                </div>
                <ul className="space-y-1">
                  {day.activities.map((activity, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-japan-pink rounded-full flex-shrink-0"></span>
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-japan-indigo/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-japan-indigo font-medium">
                  <Utensils className="h-4 w-4" />
                  <h4>Meals</h4>
                </div>
                <ul className="space-y-1">
                  {day.meals.map((meal, index) => (
                    <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 bg-japan-pink rounded-full flex-shrink-0"></span>
                      <span>{meal}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-japan-indigo/5 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2 text-japan-indigo font-medium">
                  <Bed className="h-4 w-4" />
                  <h4>Accommodation</h4>
                </div>
                <p className="text-sm text-gray-700">{day.accommodation}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const TourItinerary = () => {
  return (
    <section className="py-20 bg-white" id="itinerary">
      <div className="japan-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo mb-4">
            Your 12-Day Journey Through Japan
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            A carefully curated itinerary blending must-see highlights with unique experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-japan-indigo p-6 text-white">
            <h3 className="text-xl font-medium">Complete Itinerary</h3>
            <p className="text-white/80 text-sm">Click each day to expand details</p>
          </div>
          
          <div className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {itineraryData.map((day) => (
                <AccordionItem key={day.day} value={`day-${day.day}`}>
                  <AccordionTrigger className="py-4 flex items-center gap-6">
                    <div className="flex items-center gap-6 text-left">
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
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-20 pr-4">
                      <p className="text-gray-700 mb-6">{day.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="bg-japan-indigo/5 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2 text-japan-indigo font-medium">
                            <Map className="h-4 w-4" />
                            <h4>Activities</h4>
                          </div>
                          <ul className="space-y-1">
                            {day.activities.map((activity, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 bg-japan-pink rounded-full flex-shrink-0"></span>
                                <span>{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-japan-indigo/5 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2 text-japan-indigo font-medium">
                            <Utensils className="h-4 w-4" />
                            <h4>Meals</h4>
                          </div>
                          <ul className="space-y-1">
                            {day.meals.map((meal, index) => (
                              <li key={index} className="text-sm text-gray-700 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 bg-japan-pink rounded-full flex-shrink-0"></span>
                                <span>{meal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-japan-indigo/5 p-4 rounded-lg">
                          <div className="flex items-center gap-2 mb-2 text-japan-indigo font-medium">
                            <Bed className="h-4 w-4" />
                            <h4>Accommodation</h4>
                          </div>
                          <p className="text-sm text-gray-700">{day.accommodation}</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
