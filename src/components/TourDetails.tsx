
import { Check, Cherry, Mountain, MapPin } from 'lucide-react';
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
          <div className="flex justify-center items-center mt-4">
            <div className="h-0.5 w-20 bg-japan-pink"></div>
            <Cherry className="mx-3 text-japan-pink h-6 w-6" />
            <div className="h-0.5 w-20 bg-japan-pink"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <Card className="bg-white shadow-sm border-0 overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-serif font-medium text-japan-indigo mb-6">Tour Overview</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Date:</span>
                    <span>22 September – 3 October 2025</span>
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
                  <li className="flex items-center gap-3 text-japan-pink font-medium">
                    <span className="min-w-28"></span>
                    <span>(Just £194 / €230 per day!)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          
          <div className="bg-japan-cream">
            <div className="relative">
              <img 
                src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/ott//Tokyo.png" 
                alt="Japan Tour Itinerary Map" 
                className="w-full h-full object-contain rounded-lg shadow-sm"
                onError={(e) => {
                  console.error("Error loading map image");
                  e.currentTarget.src = "/placeholder.svg";
                }}
              />
              <div className="absolute -bottom-3 -right-3 bg-japan-pink rounded-full p-2 shadow-md">
                <MapPin className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mt-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-japan-pink/10 rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-japan-indigo/5 rounded-tr-full"></div>
          
          <div className="relative">
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6 flex items-center">
              <span>What's Included</span>
              <div className="h-0.5 w-12 bg-japan-pink ml-4"></div>
            </h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm relative">
                Accommodation
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-japan-pink rounded-full"></div>
              </h4>
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
              <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm relative">
                Included Activities
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-japan-pink rounded-full"></div>
              </h4>
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
              <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm relative">
                Transportation
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-japan-pink rounded-full"></div>
              </h4>
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
              <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm relative">
                Meals
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-japan-pink rounded-full"></div>
              </h4>
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
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mt-8 relative overflow-hidden">
          <div className="absolute -top-10 -left-10 w-24 h-24 bg-japan-pink/5 rounded-full"></div>
          <Mountain className="absolute top-4 right-4 text-japan-indigo/10 h-12 w-12" />
          
          <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6 flex items-center">
            <span>What's Not Included</span>
            <div className="h-0.5 w-12 bg-japan-pink ml-4"></div>
          </h3>
          
          <ul className="space-y-3 relative z-10">
            {exclusions.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700 bg-japan-cream/50 p-3 rounded-lg">
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
