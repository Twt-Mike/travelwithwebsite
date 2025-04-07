import Layout from '@/components/Layout';
import { Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import AboutPhotoGallery from '@/components/AboutPhotoGallery';
import ContactSection from '@/components/ContactSection';

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//BannerTW.png" 
          alt="TravelWith banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-japan-indigo/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">About TravelWith</h1>
        </div>
      </div>

      {/* Design element between hero and content */}
      <div className="relative py-8 bg-gradient-to-r from-japan-cream to-white overflow-hidden">
        <div className="japan-container relative z-10">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-serif text-japan-indigo animate-fade-in">
              Crafting Authentic Japan Experiences
            </h2>
            <p className="text-japan-slate/80 mt-2 max-w-2xl mx-auto">
              With over 10 years of experience, countless tours, and hundreds of happy travelers
            </p>
          </div>
          <div className="flex justify-center mt-6 gap-4">
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm border border-japan-indigo/10 w-24">
              <span className="text-2xl font-bold text-japan-indigo">60+</span>
              <span className="text-xs text-gray-600">Tours Led</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm border border-japan-indigo/10 w-24">
              <span className="text-2xl font-bold text-japan-indigo">700+</span>
              <span className="text-xs text-gray-600">Days Guiding</span>
            </div>
            <div className="flex flex-col items-center p-3 rounded-lg bg-white/50 backdrop-blur-sm shadow-sm border border-japan-indigo/10 w-24">
              <span className="text-2xl font-bold text-japan-indigo">674</span>
              <span className="text-xs text-gray-600">5★ Reviews</span>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-japan-pink/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-japan-green/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
      </div>

      <section className="py-16 bg-white">
        <div className="japan-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6">
                Hi, I'm Mike—founder of TravelWith.
              </h2>
              
              <div className="mb-6">
                <img 
                  src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//AboutProfilePic.png" 
                  alt="Mike from TravelWith" 
                  className="rounded-lg shadow-lg w-full max-h-80 object-cover"
                />
              </div>
              
              <p className="text-gray-700 mb-4">
                Originally from Canada, I booked a four-month return flight to Sydney, Australia at age 23, just to play music with a friend. We were a guitarist/drummer duo, playing in Sydney bars and even busking on the streets in front of Sydney Central. I'd never traveled before, never stayed in a hostel, and had no idea what "life on the road" really meant.
              </p>
              <p className="text-gray-700 mb-4">
                But the first day I arrived at the hostel in Sydney, I knew I wasn't taking that return flight home. Getting to meet & travel with people from all over the world, I knew I was in this for the long run.
              </p>
              <p className="text-gray-700 mb-4">
                That trip kicked off a journey that's now spanned over a decade, countless countries, and a career built entirely around creating unforgettable travel experiences.
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <div className="rounded-lg overflow-hidden shadow-lg max-w-[72%] mx-auto">
                <img 
                  src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/aboutme//SydneyCentralBusking.jpg" 
                  alt="Busking at Sydney Central Station" 
                  className="w-full object-cover"
                />
                <p className="text-sm text-gray-600 bg-white p-2 text-center italic">
                  Busking at Sydney Central Station, 2015
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div className="order-2 md:order-1 flex justify-center">
              <img 
                src="/public/lovable-uploads/a56892ca-72fc-4028-8263-f45fa6b7acd1.png" 
                alt="Mike guiding a tour in Japan" 
                className="rounded-lg shadow-lg max-h-80 object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6">
                My Background in Travel
              </h2>
              <p className="text-gray-700 mb-4">
                Over the past 10 years, I've worked across every corner of the travel industry—from trip planning as a travel agent to leading immersive, multi-day group tours across Japan, the Philippines, and Sri Lanka.
              </p>
              <p className="text-gray-700 mb-4">
                While my experience spans Asia, TravelWith is currently focused exclusively on crafting custom, high-quality group trips in Japan. It's the country I know best, and the place where I've led the majority of my tours.
              </p>
              <p className="text-gray-700 mb-4">
                Here's what that experience looks like:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                  <span>3 years as a Travel Agent, planning and booking trips for individuals and groups</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                  <span>6 years as a Tour Guide & Manager, leading 60+ multi-day group tours across Asia</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                  <span>2 years as a Host Trip Organizer, building fully custom influencer-led trips</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                  <span>10 influencer host trips in Japan—designed and/or led by me</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-japan-cream p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6 text-center">
              Professional Experience
            </h2>
            
            <Card className="bg-white/90 border-0 shadow-md overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                  <div className="p-6 border-r border-japan-cream/50">
                    <h3 className="text-xl font-medium text-japan-indigo mb-4">Tour Experience</h3>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-japan-cream/50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-japan-indigo mb-1">30+</div>
                        <div className="text-gray-700 text-xs">Tours in Japan</div>
                      </div>
                      <div className="bg-japan-cream/50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-japan-indigo mb-1">17</div>
                        <div className="text-gray-700 text-xs">Tours in Sri Lanka</div>
                      </div>
                      <div className="bg-japan-cream/50 p-3 rounded-lg text-center">
                        <div className="text-2xl font-bold text-japan-indigo mb-1">16</div>
                        <div className="text-gray-700 text-xs">Tours in Philippines</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-white to-japan-cream/20">
                    <h3 className="text-xl font-medium text-japan-indigo mb-4">Tour Guide Profile</h3>
                    <div className="flex justify-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="text-center text-gray-700 mb-4">
                      674 five-star reviews on TourRadar<br/>
                      <span className="text-sm">(Ranked #2 Tour Guide of the Year in 2019*)</span>
                    </p>
                    <div className="flex justify-center">
                      <a href="https://www.tourradar.com/tour-guide-mike" target="_blank" rel="noopener noreferrer">
                        <Button className="bg-japan-indigo hover:bg-japan-indigo/90" size="sm">
                          TourRadar Profile 
                          <ExternalLink className="ml-2 h-3 w-3" />
                        </Button>
                      </a>
                    </div>
                    
                    <p className="text-xs text-gray-500 mt-4 text-center italic">
                      *TourRadar's Guide of the Year awards are announced the following year. Due to the COVID-19 pandemic, the 2019 results were not officially published. However, it was confirmed directly by TourRadar that I ranked #2 overall based on guest reviews and performance. Organizations may contact TourRadar to verify this.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <p className="text-center text-gray-700 mt-6">
              With each trip averaging 10+ days, I've spent nearly two full years—around 700 days—actually on the tours themselves, 
              giving guests their trip of a lifetime, handling every detail, and making sure each experience is seamless, personal, and unforgettable.
            </p>
          </div>

          <h3 className="text-2xl font-serif font-medium text-japan-indigo mb-4 text-center">
            Tour Moments
          </h3>
          <AboutPhotoGallery />

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6">
              TravelWith – My Vision
            </h2>
            <p className="text-gray-700 mb-4">
              Although TravelWith is built and run by me, it's far from a one-man operation.
            </p>
            <p className="text-gray-700 mb-4">
              Thanks to years of guiding and collaborating with suppliers across Asia—especially in Japan—I've built a trusted network of local partners: drivers, hotels, guesthouses, and activity providers who help make every trip more authentic and effortless.
            </p>
            <p className="text-gray-700 mb-4">
              Whether it's a dinner at a family-run izakaya in Kyoto or a scenic train journey through the mountains, these partnerships are part of what sets TravelWith apart from larger, one-size-fits-all tour companies.
            </p>
            <p className="text-gray-700 mb-8">
              TravelWith combines:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                <span>The care and flexibility of a boutique operator</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                <span>The experience of a guide who's actually lived the journey</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                <span>And the creativity of someone who's spent years designing tours for creators and communities</span>
              </li>
            </ul>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6">
              What You Can Expect
            </h2>
            <p className="text-gray-700 mb-4">
              At the heart of every TravelWith trip is community, connection, and customization.
            </p>
            <p className="text-gray-700 mb-4">
              I don't offer pre-packaged tours or fixed dates—each itinerary is built from scratch around the host's audience, vision, and vibe. These aren't ordinary tours. They're one-time-only experiences designed to be remembered for a lifetime.
            </p>
            <p className="text-gray-700 mb-4">
              So while my broader experience covers much of Asia, my focus now is helping hosts create unforgettable custom journeys through Japan—a place that continues to inspire me with every trip.
            </p>
            <p className="text-gray-700 mb-8">
              Whether you're a creator looking to host your first group adventure, or someone with a vision for a truly unique travel experience—you're in the right place.
            </p>
          </div>
        </div>
      </section>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-3">
          Ready to set up your custom Japan tour for your audience?
        </h2>
      </div>
      
      <ContactSection />
    </Layout>
  );
};

export default About;
