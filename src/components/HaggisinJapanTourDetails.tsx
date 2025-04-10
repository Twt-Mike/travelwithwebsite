import { Check } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HaggisinJapanTourDetails = () => {
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
            Everything you need to know about this exclusive Japan adventure with Craig
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
                    <span>October 11 - 21, 2025 (11 Days / 10 Nights)</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Start:</span>
                    <span>Tokyo</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Finish:</span>
                    <span>Osaka</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Maximum Guests:</span>
                    <span>19 Guests</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-medium min-w-28">Price:</span>
                    <span>£2200</span>
                  </li>
                  <li className="flex items-center gap-3 text-[#75bf8f] font-medium">
                    <span className="min-w-28"></span>
                    <span>(Just £200 per day!)</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          
          <div className="bg-japan-cream">
            <img 
              src="/placeholder.svg" 
              alt="Japan Tour Itinerary Map" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm mt-16">
          <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6">What's Included</h3>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Top Highlights</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Fully guided tour covering 6 incredible locations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Perfect balance of guided experiences & free time (with Craig's top recommendations!)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Sushi-making class with a master chef</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Kimono rental for the day</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Traditional tea ceremony in a Japanese tea house</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ancient Shrines and Temples</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Visit the famous Nara Deer park</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Legendary karaoke night</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Accommodation & Meals</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Hand-picked quality hotels (Twin rooms, private bathroom)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">9 breakfasts, 1 lunch, 3 group dinners</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Transportation</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">All transport for 11 days (Including the famous Shinkansen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-japan-green mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Temple & shrine entrances + in-depth history talks</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">City Experiences</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 mt-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Tokyo:</h5>
                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Senso-ji Temple, Meiji Shrine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Akihabara arcades</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Shibuya Crossing, Golden Gai</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Day trip to Kamakura</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Giant Buddha of Kotoku-in Temple</span>
                      </li>
                    </ul>
                    
                    <h5 className="font-medium text-gray-700 mb-1">Takayama:</h5>
                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Traditional Japanese old town</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Japanese Archery</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Sake breweries</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Local Onsen (Optional extra)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-1">Kyoto:</h5>
                    <ul className="space-y-1 mb-3">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Fushimi Inari Shrine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Kiyomizu-dera</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Bamboo Forest</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Gion District</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Otani cemetery</span>
                      </li>
                    </ul>
                    
                    <h5 className="font-medium text-gray-700 mb-1">Osaka & Nara:</h5>
                    <ul className="space-y-1">
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Osaka Castle</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Dotonbori street food</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Day trip to Nara</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Kasuga Taisha shrine</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-japan-green mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Den Den Electric Town</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-shrink-0 w-full md:w-1/3 flex flex-col items-center">
              <img 
                src="/placeholder.svg" 
                alt="Japan travel experience" 
                className="w-full h-auto rounded-lg shadow-md object-cover mb-6"
                style={{ maxHeight: "300px" }}
              />
              
              <div className="w-full space-y-4 mt-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#599d9f] hover:bg-[#599d9f]/90 text-white py-5 text-lg"
                  onClick={() => {
                    const bookingElement = document.getElementById('booking');
                    if (bookingElement) {
                      bookingElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Book Your Spot Now
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-[#599d9f] text-[#599d9f] hover:bg-[#599d9f]/10 py-5 text-lg"
                  onClick={() => {
                    const detailsElement = document.getElementById('itinerary');
                    if (detailsElement) {
                      detailsElement.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Detailed Itinerary
                </Button>
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

export default HaggisinJapanTourDetails;
