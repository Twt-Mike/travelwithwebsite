
import { Check, Users, CalendarDays, MapPin, Utensils, Home, Bus } from 'lucide-react';

const TourDetails = () => {
  const inclusions = [
    "9 nights accommodation in carefully selected hotels",
    "Daily breakfast and 5 special group dinners",
    "All transportation within Japan (bullet train, buses, metro)",
    "Skip-the-line entry to all attractions in the itinerary",
    "Guided tours with local expert guides",
    "Special workshop experiences (tea ceremony, cooking class)",
    "Welcome dinner and farewell celebration",
    "Airport transfers in Japan",
    "OurTravelTreats exclusive group experiences"
  ];
  
  const exclusions = [
    "International flights to/from Japan",
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
            Everything you need to know about this exclusive Japan adventure with OurTravelTreats
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
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="w-14 h-14 bg-japan-pink/10 rounded-full flex items-center justify-center mb-6">
              <Users className="h-7 w-7 text-japan-pink" />
            </div>
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-4">Group Details</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="font-medium">Group Size:</span> Max 15 travelers
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Tour Leader:</span> OurTravelTreats hosts + Local guide
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Age Range:</span> 25-45 (average)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Physical Level:</span> Moderate (lots of walking)
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
                <span className="font-medium">Tour Start:</span> April 5, 2025 (Tokyo)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Tour End:</span> April 15, 2025 (Osaka)
              </li>
              <li className="flex items-center gap-2">
                <span className="font-medium">Booking Deadline:</span> January 15, 2025
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
            <ul className="space-y-3">
              {inclusions.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
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
              <h4 className="font-medium text-japan-indigo mb-4">Pricing & Payment</h4>
              <div className="bg-japan-indigo/5 p-4 rounded-lg mb-4">
                <div className="text-2xl font-medium text-japan-indigo">$3,495 <span className="text-base font-normal text-gray-500">per person</span></div>
                <p className="text-sm text-gray-600 mt-1">Based on double occupancy</p>
              </div>
              <p className="text-sm text-gray-700 mb-2">Flexible payment options:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• $500 deposit to secure your spot</li>
                <li>• 50% payment due by November 1, 2024</li>
                <li>• Final payment due by January 15, 2025</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
