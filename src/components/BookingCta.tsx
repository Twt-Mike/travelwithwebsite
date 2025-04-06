
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, ExternalLink } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface BookingCtaProps {
  onBookNow?: () => void;
}

const BookingCta = ({ onBookNow }: BookingCtaProps) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-japan-indigo/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="japan-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-japan-pink/10 text-japan-pink px-4 py-1 rounded-full text-sm font-medium mb-4">
              Limited Spots Available
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo mb-6">
              Ready to Join This Once-in-a-Lifetime Adventure?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Book your spot now on this exclusive Japan tour with OurTravelTreats. 
              Only 16 spots available—secure yours before they're gone!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-medium text-japan-indigo mb-6">Why Book Now</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure one of just 16 available spots</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Lock in current pricing (€2,750 per person)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment plan (only 20% deposit)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Travel with OurTravelTreats community</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">€50 discount when paying by bank transfer</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-japan-indigo p-8 rounded-xl shadow-md text-white">
              <h3 className="text-xl font-medium mb-2">Japan Tour with OurTravelTreats</h3>
              <div className="text-white/80 text-sm mb-6">22 Sept - 3 Oct, 2025 • 11 days</div>
              
              <div className="mb-6">
                <div className="text-3xl font-medium">€2,750</div>
                <div className="text-white/80 text-sm">per person (twin share)</div>
                <div className="text-white/90 text-sm mt-1">Bank transfer: €2,700</div>
                <div className="text-white/90 text-sm mt-1">You save as there are no credit card fees!</div>
              </div>
              
              <div className="mb-6 text-sm text-white/90">
                <p className="mb-1"><span className="font-medium">Deposit today:</span> €550</p>
                <p><span className="font-medium">Group size:</span> Max 16 travelers</p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-japan-pink hover:bg-japan-pink/90 text-white flex items-center justify-center gap-2"
                onClick={onBookNow}
              >
                Secure Your Spot Now
                <ExternalLink className="h-4 w-4" />
              </Button>
              
              <div className="mt-4 text-center text-white/70 text-sm">
                <p>Secure checkout via WooCommerce</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full bg-gray-50 rounded-lg p-6">
          <AccordionItem value="about-travelwith" className="border-b-0">
            <AccordionTrigger className="text-xl font-medium text-japan-indigo hover:no-underline">
              Who is TravelWith?
            </AccordionTrigger>
            <AccordionContent className="text-gray-700">
              <div className="space-y-4">
                <p>
                  This tour is a collaboration between Laura, (@Our.TravelTreats) and TravelWith—designed from the ground up to create the best possible experience for you. Laura is your passionate host who has travelled Japan and worked with us to create the best tour of this beautiful country that is suitable just for Laura's audience, you!
                </p>
                
                <p>
                  Travel With handles the operations, logistics, and bookings, ensuring everything runs seamlessly behind the scenes—so you can focus on enjoying the journey.
                </p>
                
                <div className="my-6">
                  <img 
                    src="/public/lovable-uploads/631cae86-0380-474a-8d28-e5c3279b1f75.png" 
                    alt="Travelers walking through Fushimi Inari Shrine torii gates in Japan" 
                    className="w-full h-auto rounded-lg max-w-lg mx-auto my-4"
                  />
                </div>
                
                <p>
                  While Laura & your expert guide provided on the trip shape the vision of the journey, Travel With is built on over 10 years of travel industry expertise, with experience guiding 1,000+ guests across 60+ tours and has implemented this expertise in the tour. Every detail of this trip has been carefully crafted using that knowledge to ensure a unique and seamless adventure.
                </p>
                
                <p>
                  Unlike other tour operators who adapt existing itineraries or make minor adjustments for hosts, Travel With specializes in building completely custom tours alongside each host. That means no off-the-shelf experiences, no compromises—just a trip tailored to what makes this community special.
                </p>
                
                <div className="mt-4">
                  <a 
                    href="/about" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-japan-indigo font-medium hover:text-japan-pink transition-colors"
                  >
                    Read more about TravelWith by clicking here
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default BookingCta;
