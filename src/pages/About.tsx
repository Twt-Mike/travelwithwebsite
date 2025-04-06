
import Layout from '@/components/Layout';
import { Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AboutPhotoGallery from '@/components/AboutPhotoGallery';

const About = () => {
  return (
    <Layout>
      {/* Hero Banner */}
      <div className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <img 
          src="/public/lovable-uploads/d2eb9e50-b99f-4a8e-98fc-70839f0e480f.png" 
          alt="TravelWith banner showing travelers in Japan" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-japan-indigo/40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white text-center">About TravelWith</h1>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="japan-container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6">
                Hi! I'm Mike from Travel With
              </h2>
              <p className="text-gray-700 mb-4">
                I'm originally from Canada. At 23 years old I booked a four-month return flight to Sydney, Australia, 
                just to play music with a friend.
              </p>
              <p className="text-gray-700 mb-4">
                I'd never travelled in my life before that, —I'd never stayed in a hostel, never experienced life 
                on the road—but on Day 1, I knew I wasn't going home. I didn't take my return flight (Oops), and 
                instead, I spent the next two years in Australia, fully immersing myself in travel and adventure. 
                It was there that I got my first experience in the travel industry, and I never looked back.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/public/lovable-uploads/9ade6827-a0f7-4aa0-9213-232418dafc51.png" 
                alt="Mike from TravelWith" 
                className="rounded-lg shadow-lg max-h-80 object-cover"
              />
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
                Industry Experience
              </h2>
              <p className="text-gray-700 mb-4">
                For the past 10 years, I've worked across every side of the travel industry—from planning and 
                organizing trips as a travel agent to leading multi-day tours across Japan, the Philippines, 
                and Sri Lanka.
              </p>
              <p className="text-gray-700 mb-4">
                I've spent the last few years working directly with influencers to design and operate custom 
                host trips, creating unique experiences that can't be found anywhere else.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                  <span>3 years as a Travel Agent, planning and booking trips.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                  <span>6 years as a Tour Guide & Tour Manager, leading group trips across Japan, the Philippines, and Sri Lanka.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="text-japan-green h-5 w-5 flex-shrink-0 mt-1" />
                  <span>2 years as a Host Trip Organizer, working one-on-one with influencers to create unique, custom-tailored experiences.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6 text-center">
              Tour Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-japan-cream p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-japan-indigo mb-2">30+</div>
                <div className="text-gray-700">Tours in Japan</div>
              </div>
              <div className="bg-japan-cream p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-japan-indigo mb-2">17</div>
                <div className="text-gray-700">Tours in Sri Lanka</div>
              </div>
              <div className="bg-japan-cream p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-japan-indigo mb-2">16</div>
                <div className="text-gray-700">Tours in the Philippines</div>
              </div>
            </div>
            <p className="text-center text-gray-700 mb-10">
              Included in these tours are 10 Host Trips in Japan lead and/or designed, 
              specifically with Travel Influencer/Host partners!
            </p>
            <p className="text-center text-gray-700 mb-6">
              With each of these tours being minimum 10 Days, that's almost 730 Days or 2 Years spent on tour & guiding travelers!
            </p>
          </div>

          <div className="bg-japan-cream p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6 text-center">
              Tour Guide Profile
            </h2>
            <div className="flex justify-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-center text-gray-700 mb-6">
              674 Reviews at 5/5 star average!
            </p>
            <div className="flex justify-center mb-8">
              <a href="https://www.tourradar.com/tour-guide-mike" target="_blank" rel="noopener noreferrer">
                <Button className="bg-japan-indigo hover:bg-japan-indigo/90">
                  Check out my TourRadar profile 
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
            <p className="text-center text-gray-700">
              I've built a strong reputation in the travel industry, earning 674 five-star reviews 
              on TourRadar and ranking as #2 Tour Guide of the Year in 2019*
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-serif font-medium text-japan-indigo mb-6 text-center">
              Travel With Communities
            </h2>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              With firsthand experience in trip planning, on-the-ground tour operations, and influencer-hosted group travel, 
              I know what makes a tour truly special. My goal is to combine all of this experience to create exclusive, 
              once-in-a-lifetime trips for communities and content creators, ensuring that every traveler feels like part of something unique.
            </p>
            <p className="text-center text-gray-700 mb-10 max-w-3xl mx-auto">
              Travel With is the culmination of this experience—a company built on expertise, customization, and authentic travel 
              experiences, offering tailored journeys that no other operator provides.
            </p>
          </div>

          {/* Replace the static photo grid with the interactive gallery component */}
          <h3 className="text-2xl font-serif font-medium text-japan-indigo mb-6 text-center">
            Tour Memories
          </h3>
          <AboutPhotoGallery />
        </div>
      </section>
    </Layout>
  );
};

export default About;
