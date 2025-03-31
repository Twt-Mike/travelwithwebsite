
import { Check, Users, CalendarDays, MapPin, Utensils, Home, Bus } from 'lucide-react';

const TourDetails = () => {
  const exclusions = [
    "International flights to/from Japan",
    "Airport transfers on arrival/departure days",
    "Travel insurance (required)",
    "Meals not specified in the itinerary",
    "Personal expenses and souvenirs",
    "Activities during free time"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-14 h-14 bg-japan-indigo/10 rounded-full flex items-center justify-center mb-6">
              <MapPin className="h-7 w-7 text-japan-indigo" />
            </div>
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-4">Destinations</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="font-medium">Tokyo</span> - 3 nights
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Hakone</span> - 1 night
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Kyoto</span> - 3 nights
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Osaka</span> - 2 nights
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Hiroshima</span> - 2 nights
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-14 h-14 bg-japan-pink/10 rounded-full flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-japan-pink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-4">Group Details</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="font-medium">Group Size:</span> Max 16 travelers
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Tour Leader:</span> Professional Japan Expert
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Host:</span> Laura
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Solo Travelers:</span> Only paired with same gender
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-14 h-14 bg-japan-green/10 rounded-full flex items-center justify-center mb-6">
              <CalendarDays className="h-7 w-7 text-japan-green" />
            </div>
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-4">Important Dates</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="font-medium">Tour Start:</span> September 22, 2025 (Tokyo)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Tour End:</span> October 3, 2025 (Hiroshima)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Duration:</span> 11 Days
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Payment Plan:</span> Available (details below)
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6">What's Included</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-japan-indigo mb-2 inline-block bg-japan-indigo/10 px-4 py-1 rounded-lg text-lg">Accommodation</h4>
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
              <h4 className="font-medium text-japan-indigo mb-2 inline-block bg-japan-indigo/10 px-4 py-1 rounded-lg text-lg">Included Activities</h4>
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
              <h4 className="font-medium text-japan-indigo mb-2 inline-block bg-japan-indigo/10 px-4 py-1 rounded-lg text-lg">Transportation</h4>
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
              <h4 className="font-medium text-japan-indigo mb-2 inline-block bg-japan-indigo/10 px-4 py-1 rounded-lg text-lg">Meals</h4>
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

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6">What's Not Included</h3>
            <ul className="space-y-3">
              {exclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <span className="h-5 w-5 text-japan-pink font-medium flex-shrink-0">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-8 pt-8 border-t border-gray-100">
              <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-4 py-1 rounded-lg text-lg">Pricing & Payment</h4>
              <div className="bg-japan-indigo/5 p-4 rounded-lg mb-4">
                <div className="text-2xl font-medium text-japan-indigo">€2,750 <span className="text-base font-normal text-gray-500">per person</span></div>
                <p className="text-sm text-japan-pink font-medium mt-1">€2,700 via Bank Transfer (We pass the credit card fee onto you!)</p>
                <p className="text-sm text-gray-600 mt-1">Based on double occupancy</p>
              </div>
              <p className="text-sm text-gray-700 mb-2">Payment options:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 20% deposit to secure your spot (non-refundable)</li>
                <li>• Full payment due 10 weeks prior to the tour start date (22 September 2025)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
