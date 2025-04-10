import { CalendarDays, MapPin, Clock, Users, Activity, Coffee, Utensils, PlaneTakeoff, Hotel, Star, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HaggisinJapanTourDetails = () => {
  return (
    <section className="py-20 bg-[#f4f0eb]">
      <div className="japan-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-medium text-japan-indigo mb-4">Tour Overview</h2>
          <p className="section-subtitle mx-auto max-w-3xl text-japan-slate">
            Explore Japan's best destinations with a unique balance of must-see highlights and 
            hidden gems on this 11-day small group adventure
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <CalendarDays className="h-6 w-6 text-japan-indigo flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-japan-slate mb-1">Duration</h3>
                      <p className="text-japan-slate">11 Days, 10 Nights</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-japan-indigo flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-japan-slate mb-1">Destinations</h3>
                      <p className="text-japan-slate">Tokyo, Takayama, Kyoto, Osaka</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 text-japan-indigo flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-japan-slate mb-1">Tour Dates</h3>
                      <p className="text-japan-slate">Oct 11 - 21, 2025</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Users className="h-6 w-6 text-japan-indigo flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-japan-slate mb-1">Group Size</h3>
                      <p className="text-japan-slate">Max 19 Travelers</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-medium text-japan-indigo mb-4">What's Included</h3>
              
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Activity className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">Local experiences including sushi-making, karaoke, shrine visits, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <PlaneTakeoff className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">All transportation within Japan (bullet trains, metros, buses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Hotel className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">10 nights accommodation (Twin Share / Ensuite Bathroom)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Utensils className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">8 breakfasts, 1 lunch, 3 dinners</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <img 
              src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Craig5.jpeg" 
              alt="What's included on your Japan tour" 
              className="w-full rounded-lg shadow-md"
            />
            
            <Card className="bg-japan-indigo text-white">
              <CardContent className="p-6">
                <h3 className="font-medium text-xl mb-2">& Your #1 Rated Guide Craig!</h3>
                <div className="flex items-center mb-2">
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <Star className="h-5 w-5 fill-current text-yellow-400" />
                  <span className="ml-2">5-Star Rated from 100+ Reviews</span>
                </div>
                <p>Join a community of happy travelers who've shared fun experiences and stories from my tours.</p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <h3 className="text-xl font-serif font-medium text-japan-indigo mb-6">Detailed Tour Inclusions</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Accommodation</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">10 nights in hand-picked, quality hotels with Twin rooms and private bathrooms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">All hotels feature ensuite bathrooms (except possible shared bathhouse in Hakone)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">Breakfast included at most accommodations (not included in Takayama)</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Transportation</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">All transport included throughout the 11-day tour once you've arrived at the Day 1 start hotel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">Shinkansen (bullet train) tickets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">Local metro tap cards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">Regional travel tickets as needed</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Meals</h4>
                <ul className="space-y-2 mt-4">
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">8 breakfasts</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">1 lunch</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-japan-green font-bold">✓</span>
                    <span className="text-gray-700">3 group dinners</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-4">
                <img 
                  src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//monkeymountain.jpg" 
                  alt="Monkey Mountain in Japan" 
                  className="w-full rounded-lg shadow-md"
                />
                <p className="text-sm text-gray-500 mt-2 italic text-center">Meet the friendly monkeys on Monkey Mountain!</p>
              </div>
            </div>
            
            <div>
              <div className="mb-6">
                <h4 className="font-medium text-japan-indigo mb-4 inline-block bg-japan-indigo/10 px-6 py-2 rounded-lg text-lg shadow-sm">Included Activities</h4>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Tokyo:</h5>
                    <ul className="space-y-1 ml-5 list-disc text-gray-700">
                      <li>Sushi-making class with a master chef</li>
                      <li>Asakusa temples & shrine visits</li>
                      <li>Meiji Shrine</li>
                      <li>Akihabara arcades</li>
                      <li>Shibuya Crossing</li>
                      <li>Golden Gai nightlife</li>
                      <li>Day trip to Kamakura</li>
                      <li>Kotoku-in Temple (Giant Buddha)</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Takayama:</h5>
                    <ul className="space-y-1 ml-5 list-disc text-gray-700">
                      <li>Traditional Japanese old town walk</li>
                      <li>Japanese archery experience</li>
                      <li>Visit to local sake breweries</li>
                      <li>Relaxing at a local onsen</li>
                      <li>Free time for more recommended optional activities</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Kyoto:</h5>
                    <ul className="space-y-1 ml-5 list-disc text-gray-700">
                      <li>Fushimi Inari Shrine (10,000 Torii Gates)</li>
                      <li>Kiyomizu-dera Temple</li>
                      <li>Bamboo Forest</li>
                      <li>Gion District & Geisha history</li>
                      <li>Kimono rental and tea ceremony in a traditional tea house</li>
                      <li>Otani Cemetery</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Osaka:</h5>
                    <ul className="space-y-1 ml-5 list-disc text-gray-700">
                      <li>Osaka Castle</li>
                      <li>Dotonbori street food tour</li>
                      <li>Den Den Electric Town</li>
                      <li>Day trip to Nara</li>
                      <li>Kasuga Taisha Shrine</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-700 mb-2">Animal Encounters:</h5>
                    <ul className="space-y-1 ml-5 list-disc text-gray-700">
                      <li>Japanese monkeys in the mountains</li>
                      <li>Nara's famous bowing deer</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm mt-8">
          <h3 className="text-xl font-serif font-medium text-japan-indigo mb-4">What's Not Included</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 text-japan-pink mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">International flights to/from Japan</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 text-japan-pink mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Airport transfers on arrival/departure days</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 text-japan-pink mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Travel insurance (required)</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 text-japan-pink mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Meals not specified in the itinerary</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 text-japan-pink mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Personal expenses and souvenirs</span>
            </div>
            <div className="flex items-start gap-2">
              <X className="h-5 w-5 text-japan-pink mt-0.5 flex-shrink-0" />
              <span className="text-gray-700">Optional activities during free time</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaggisinJapanTourDetails;
