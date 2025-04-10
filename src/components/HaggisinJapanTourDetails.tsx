
import { CalendarDays, MapPin, Clock, Users, Activity, Coffee, Utensils, PlaneTakeoff, Hotel, Star } from 'lucide-react';
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
                      <p className="text-japan-slate">Max 15 Travelers</p>
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
                  <span className="text-japan-slate">Local experiences including karaoke, night tours, tea ceremony, and more</span>
                </li>
                <li className="flex items-start gap-3">
                  <PlaneTakeoff className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">All transportation within Japan (bullet trains, metros, buses)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Hotel className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">10 nights accommodation (mix of traditional & modern)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Utensils className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">Daily breakfast, 2 lunches, 3 dinners & welcome dinner</span>
                </li>
                <li className="flex items-start gap-3">
                  <Coffee className="h-5 w-5 text-japan-indigo flex-shrink-0 mt-0.5" />
                  <span className="text-japan-slate">Traditional tea ceremony experience</span>
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
      </div>
    </section>
  );
};

export default HaggisinJapanTourDetails;
