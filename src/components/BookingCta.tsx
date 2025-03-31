
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

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
                <div className="text-white/80 text-sm">per person (double occupancy)</div>
                <div className="text-white/90 text-sm mt-1">Bank transfer: €2,700</div>
              </div>
              
              <div className="mb-6 text-sm text-white/90">
                <p className="mb-1"><span className="font-medium">Deposit today:</span> €550</p>
                <p><span className="font-medium">Group size:</span> Max 16 travelers</p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-japan-pink hover:bg-japan-pink/90 text-white"
                onClick={onBookNow}
              >
                Secure Your Spot Now
              </Button>
              
              <div className="mt-4 text-center text-white/70 text-sm">
                <p>Instant confirmation • Secure checkout</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-gray-700 mb-6">
              Prefer to chat before booking? Contact us directly or schedule a call with the TravelWith team to 
              discuss any questions about this tour.
            </p>
            <a 
              href="/contact" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="border-japan-indigo text-japan-indigo hover:bg-japan-indigo hover:text-white">
                <span>Contact TravelWith</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 py-8 rounded-lg max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h3 className="text-xl font-medium text-japan-indigo mb-2">Who is TravelWith?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            TravelWith is a boutique travel company specializing in immersive, authentic experiences 
            in partnership with content creators and experts who share our passion for meaningful travel.
          </p>
        </div>
        <div className="text-center">
          <a 
            href="/about" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-japan-indigo font-medium hover:text-japan-pink transition-colors"
          >
            Learn more about us
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingCta;
