
import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TourDetails = () => {
  const exclusions = [
    "International flights to/from Japan",
    "Airport transfers on arrival/departure days",
    "Travel insurance (required)",
    "Meals not specified in the itinerary",
    "Personal expenses and souvenirs",
    "Optional activities during free time"
  ];

  return (
    <section className="py-20 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Tour Highlights & Details</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know about this exclusive Japan adventure with Laura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <Card className="bg-white shadow-sm border-0 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-serif font-medium text-japan-indigo mb-6">Tour Overview</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Date:</span>
                    <span>22 September – 3 October 2025 (12 Days / 11 Nights)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Start:</span>
                    <span>Tokyo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Finish:</span>
                    <span>Hiroshima</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Maximum Guests:</span>
                    <span>16 Guests</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Price:</span>
                    <span>£2335 (€2750)</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#75bf8f] font-medium">
                    <span className="min-w-28"></span>
                    <span>(Just £194 / €230 per day!)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          
          <div className="bg-japan-cream">
            <img 
              src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Osakagroup.jpeg" 
              alt="Japan Tour Group in Osaka" 
              className="w-full h-full object-contain rounded-lg shadow-md"
              onError={(e) => {
                console.error("Error loading map image");
                e.currentTarget.src = "/placeholder.svg";
              }}
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mt-16">
          <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6">What's Included</h3>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Accommodation</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">11 Nights in comfortable hotels with Twin/Double rooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">All hotels with ensuite bathrooms (possible exception in Hakone)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Daily breakfast included at all accommodations</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Included Activities</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Tokyo:</h5>
                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Sushi Making Class With Chef</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">TeamLabs Planets Tokyo</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Asakusa Temples, Akihabara Arcades</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Shinjuku, Shibuya Crossing</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Meiji Shrine, Harajuku & Tokyo Viewpoint</span>
                      </li>
                    </ul>
                    
                    <h5 className="font-medium text-gray-700 mb-1">Hakone:</h5>
                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Mt. Fuji Viewpoint</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Optional: Traditional Onsen</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Kyoto:</h5>
                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Gion (Geisha) Old Town</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">10,000 Torii Gates</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Kiyomizu Dera</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Tea Ceremony + Kimono</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Golden Pavilion, Zen Garden</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Kendo Class, Bamboo Forest</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Monkey Mountain</span>
                      </li>
                    </ul>
                    
                    <h5 className="font-medium text-gray-700 mb-1">Osaka & Hiroshima:</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Dotonbori Street Food Tour</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Nara Deer Park, Osaka Castle</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Hiroshima Peace Memorial Museum</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Miyajima Island</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Transportation</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">All transport included after arriving at Day 1 Start Hotel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Bullet Train Tickets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Metro Tap Cards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Hakone Travel Pass</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Meals</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">11 Breakfasts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">4 Dinners</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">1 Lunch</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-1/3">
              <div className="space-y-3">
                <img 
                  src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Craig5.jpeg" 
                  alt="Craig, your guide for Japan" 
                  className="w-full h-auto rounded-lg shadow-md object-cover"
                  style={{ maxHeight: "500px" }}
                />
                <div className="text-center bg-japan-indigo/5 p-3 rounded-lg mt-2">
                  <p className="font-medium text-japan-indigo">& Your #1 Rated Guide Craig!</p>
                  <p className="text-amber-500 font-medium">⭐️ 5-Star Rated from 100+ Reviews! ⭐️</p>
                  <p className="text-sm text-gray-700 mt-1">Join a community of happy travelers who've shared fun experiences and stories from my tours.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mt-8">
          <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6">What's Not Included</h3>
          <ul className="space-y-3">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="h-5 w-5 text-japan-pink font-medium flex-shrink-0">✕</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
