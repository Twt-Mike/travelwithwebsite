
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus, Minus } from 'lucide-react';

const HaggisinJapanCherryBlossomTourItinerary = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleDay = (dayIndex: number) => {
    if (expandedDay === dayIndex) {
      setExpandedDay(null);
    } else {
      setExpandedDay(dayIndex);
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-20">
          <h2 className="section-title">11 Day Cherry Blossom Itinerary</h2>
          <p className="section-subtitle mx-auto">
            March 30 - April 9, 2026
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {itineraryData.map((day, index) => (
            <div 
              key={index} 
              className={`border-l-4 ${expandedDay === index ? 'border-japan-indigo' : 'border-japan-indigo/20'} pl-5 mb-10`}
            >
              <div 
                className={`flex justify-between items-center cursor-pointer bg-white py-4 pr-4 rounded-lg ${expandedDay === index ? 'shadow-sm' : ''}`}
                onClick={() => toggleDay(index)}
              >
                <div>
                  <h3 className="text-xl font-medium text-japan-indigo">Day {day.day} – {day.title}</h3>
                  <p className="text-japan-slate">{day.date}</p>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-8 w-8 text-japan-indigo"
                >
                  {expandedDay === index ? <Minus size={18} /> : <Plus size={18} />}
                </Button>
              </div>
              
              {expandedDay === index && (
                <div className="pt-4 pb-6 pl-1 pr-4 text-japan-slate">
                  <div className="space-y-4" dangerouslySetInnerHTML={{ __html: day.description }} />
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="flex flex-wrap gap-3">
                      {day.overnight && (
                        <div className="bg-japan-indigo/10 text-japan-indigo text-sm rounded-full px-4 py-1">
                          Overnight: {day.overnight}
                        </div>
                      )}
                      {day.meals && (
                        <div className="bg-japan-green/10 text-japan-green text-sm rounded-full px-4 py-1">
                          Meals: {day.meals}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const itineraryData = [
  {
    day: 1,
    title: "Tokyo Arrival Day",
    date: "March 30, 2026",
    description: `
      <p>Welcome to Tokyo—let the cherry blossom adventure begin! 🇯🇵✨</p>
      <p>Your guide available all day to help with arrivals. Hotel check-in is at 3 PM in the scenic Asakusa district—arrive early to explore or relax.</p>
      <p>In the evening, we'll meet in the lobby, say hello, and head to one of our favourite restaurants for a delicious welcome dinner. Then, we'll dive into Asakusa's magic with a guided night tour, including the stunning Senso-ji Temple, Tokyo's oldest and most iconic! 🌙🏮</p>
    `,
    overnight: "Tokyo",
    meals: "Dinner"
  },
  {
    day: 2,
    title: "Tokyo",
    date: "March 31, 2026",
    description: `
      <p>Start the day with a fun Japan quiz (yes, it's actually fun!)—we'll learn Japanese etiquette and key cultural do's & don'ts, plus a prize for the winner!</p>
      <p>Then, we'll visit Meiji Shrine in Yoyogi Park, honouring the emperor who shaped modern Japan. During cherry blossom season, this is one of Tokyo's most beautiful spots!</p>
      <p>A short walk takes us to Shibuya Crossing, one of the busiest in the world! Snap a pic with the famous dog Hachiko, then grab epic rooftop views of the chaos below.</p>
      <p>After some free time, we hit Akihabara at night—arcades, maid cafes, quirky shops, bars with darts & beer pong, and karaoke with locals! 🎤🔥</p>
    `,
    overnight: "Tokyo",
    meals: "Breakfast"
  },
  {
    day: 3,
    title: "Tokyo",
    date: "April 1, 2026",
    description: `
      <p>Start the day learning the art of sushi with a master Japanese chef, crafting fresh, delicious bites with some of the world's best seafood.</p>
      <p>The afternoon is yours—explore Tokyo at your own pace with Craig's top cherry blossom viewing recommendations.</p>
      <p>As the sun sets, we'll take in epic city views from the 46th floor of the Tokyo Metropolitan Building, then dive into the buzzing alleyways of Omoide Yokocho (Piss Alley) for an authentic, old-school Tokyo dining experience.</p>
      <p>But the night doesn't stop there! We'll explore the electric streets of Shinjuku, see Godzilla towering above the skyline, and experience Tokyo's wild nightlife—ending in Golden Gai, where 200+ tiny bars create the ultimate neon-lit adventure. 🚀🍻✨</p>
    `,
    overnight: "Tokyo",
    meals: "Breakfast, Lunch"
  },
  {
    day: 4,
    title: "Tokyo & Kamakura Day Trip",
    date: "April 2, 2026",
    description: `
      <p>Today, we escape Tokyo and head to the stunning seaside town of Kamakura, the birthplace of Japan's first Shogun! The coastal cherry trees make this trip extra special.</p>
      <p>Our first stop is Hase-Dera, my favourite temple in Japan, with serene gardens, stunning views, and ancient halls. Then, we'll visit Kotoku-in Temple to stand in awe of the 13-meter Great Buddha, Japan's second-largest.</p>
      <p>Next, we'll stroll the Dankazura Walkway, a gorgeous tree-lined path leading to Tsurugaoka Hachimangu, Kamakura's most important shrine. During cherry blossom season, this walkway is simply magical!</p>
      <p>For free time, explore the bustling Komachi-Dori, packed with unique souvenirs, street food, and local coffee shops —or even sneak off to the beach!</p>
      <p>In the evening, we'll head back to Tokyo, ready to pack for tomorrow's next adventure! 🚄✨</p>
    `,
    overnight: "Tokyo",
    meals: "Breakfast"
  },
  {
    day: 5,
    title: "Takayama",
    date: "April 3, 2026",
    description: `
      <p>This morning, we take it easy as we gear up for our first big travel day!—and what better way to do it than riding the legendary Shinkansen Bullet Train. Watch the Japanese countryside race by as we speed north to Takayama, a charming, traditional town nestled in the mountains of Gifu Prefecture.</p>
      <p>The mountain cherry blossoms bloom a bit later than in Tokyo, so we might catch them at their peak here!</p>
      <p>Once we've checked into our 4-star hotel, we'll head out to savour Takayama's renowned Hida Beef—a melt-in-your-mouth delicacy that rivals Kobe beef and a must-try while visiting!</p>
      <p>In the evening, unwind like the Japanese do—relax in a local Onsen (hot spring bathhouse), take a peaceful stroll through Takayama's beautifully preserved streets, or simply rest up for another exciting day ahead! 🌿🍶✨</p>
    `,
    overnight: "Takayama",
    meals: "Breakfast"
  },
  {
    day: 6,
    title: "Takayama",
    date: "April 4, 2026",
    description: `
      <p>Get ready for a packed day in Takayama, a town bursting with history, culture, and adventure! We will explore the Miyagawa Morning Market, where you can sample fresh local treats for breakfast and pick up one-of-a-kind souvenirs—like personalised chopsticks made from the wood of the region!</p>
      <p>The rest of the day is yours to explore at your own pace. Craig will provide a list of top optional activity recommendations, including:</p>
      <ul class="list-disc pl-6 space-y-1">
        <li>Try your hand at Japanese archery</li>
        <li>Unwind in a traditional onsen</li>
        <li>Rent a bike and cruise through the breathtaking countryside</li>
        <li>Drink Japan's finest sake at a local brewery</li>
        <li>Wander the charming Edo-era streets and hunt for unique souvenirs</li>
        <li>Visit Takayama Sky Park & Hida Folk Village for stunning views and history</li>
        <li>Hike the scenic mountains or explore Takayama Jinya, a historic samurai estate</li>
        <li>Step into the Ninja Café and throw some real shuriken (Ninja stars)</li>
        <li>Say a prayer at Hachiman-gu Shrine, a hidden 5th-century building in the woods</li>
      </ul>
      <p>To wrap up this incredible day, we'll meet at our favourite cocktail bar in the world. This speakeasy is run by a master Japanese bartender who crafts unique cocktails with ingredients straight from his own garden—the perfect way to toast to an amazing day in Takayama! 🍸✨</p>
    `,
    overnight: "Takayama",
    meals: "N/A"
  },
  {
    day: 7,
    title: "Kyoto",
    date: "April 5, 2026",
    description: `
      <p>We'll leave Takayama behind and hop on the Shinkansen to Kyoto, Japan's former capital. Once we arrive, we'll take a stroll through the atmospheric streets, getting familiar with our new home for the next three nights.</p>
      <p>Kyoto is absolutely spectacular during cherry blossom season, with many famous viewing spots throughout the city.</p>
      <p>In the evening, we'll explore the historic Gion district, known for its traditional streets and Geisha culture. If we're lucky, we might even spot a Geisha on her way to work! 🎎</p>
      <p>Best to have an early night tonight!</p>
    `,
    overnight: "Kyoto",
    meals: "Breakfast"
  },
  {
    day: 8,
    title: "Kyoto",
    date: "April 6, 2026",
    description: `
      <p>Rise and shine—Today is an epic day in Kyoto! We're kicking things off with a sunrise visit to Fushimi Inari Shrine, home to the 10,000 Torii gates. With no crowds, we'll have this iconic spot almost to ourselves as we explore, snap incredible photos, and learn the legends behind the shrine.</p>
      <p>Next, we'll walk through one of Kyoto's largest cemeteries before arriving at Kiyomizu-dera, a breathtaking World Heritage Site. Then you'll get to choose your own Japanese Kimono to rent for the day and we'll head to an authentic Japanese tea house for a traditional tea ceremony, learning the beautiful customs behind this ancient art.</p>
      <p>In the afternoon, we'll visit Maruyama Park, the most famous cherry blossom viewing spot in all of Kyoto, centered around a magnificent weeping cherry tree that's illuminated at night.</p>
      <p>But save your energy because tonight is Karaoke night! We're heading to my favourite karaoke bar in Japan for a wild night of singing, laughing, and making unforgettable memories with locals. Get ready for a legendary Kyoto experience! 🎤🎶</p>
    `,
    overnight: "Kyoto",
    meals: "Breakfast"
  },
  {
    day: 9,
    title: "Kyoto to Osaka",
    date: "April 7, 2026",
    description: `
      <p>After we get our voices back from last night we'll jump on the train to Arashiyama, where we'll wander through the Bamboo Forest then make some new friends at Monkey Mountain! There are over 100 Japanese monkeys at the top waiting to say hi! A bit of free time to grab lunch and do some last minute Kyoto shopping before we head to Osaka!—our favourite city in Japan!</p>
      <p>We'll check in and head out for a delicious family dinner at one of my favourite local spots. Then soak in the vibrant lights of Osaka before we call it a night. 🌆</p>
    `,
    overnight: "Osaka",
    meals: "Breakfast, Dinner"
  },
  {
    day: 10,
    title: "Osaka",
    date: "April 8, 2026",
    description: `
      <p>For our final full day in Japan, we're kicking things off with a trip to Nara, Japan's first capital and home to the famous bowing deer! You'll hear the story of how these sacred animals became part of the city and explore some of Japan's most stunning temples. With plenty of time to wander Nara Park, you can even grab some deer crackers and make a few furry friends.</p>
      <p>Next, we're off to Osaka Castle for some iconic photos and an optional climb to the top. The castle grounds are another great spot for cherry blossom viewing if we're lucky with the timing.</p>
      <p>The afternoon is yours to explore Osaka's incredible shopping scene, from quirky finds to high-end fashion and vintage.</p>
      <p>Then, we wrap up the trip in the best way possible—a legendary food and drink crawl through the neon-lit streets of Dotonbori! You'll discover why Osaka is called the "Kitchen of Japan" as we hit up the best local food spots. The activities might end here, but for those who aren't ready to say goodbye, Osaka's nightlife is just getting started—Craig's got all the top recommendations for an unforgettable final night! 🎉 🍢</p>
    `,
    overnight: "Osaka",
    meals: "Breakfast, Dinner"
  },
  {
    day: 11,
    title: "Osaka Departure Day!",
    date: "April 9, 2026",
    description: `
      <p>And just like that, our incredible cherry blossom adventure comes to an end. 🥲</p>
      <p>We'll gather for one last breakfast to share stories from last night and relive our favorite moments from the trip. Then, it's time for goodbye. Craig will be around to help with onward travel and any advice for those staying in Japan a little longer.</p>
      <p>I hope you leave feeling like you've truly experienced the best of Japan during this magical season, and we can't wait for our next adventure together. This isn't sayonara—it's see you later! 🚀🇯🇵</p>
    `,
    overnight: null,
    meals: "Breakfast"
  }
];

export default HaggisinJapanCherryBlossomTourItinerary;
