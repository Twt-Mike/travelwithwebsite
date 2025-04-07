
import { Button } from '@/components/ui/button';
import { CheckCircle, ExternalLink } from 'lucide-react';

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col">
              <h3 className="text-xl font-medium text-japan-indigo mb-6">Why Book Now</h3>
              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure one of just 16 available spots</span>
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
                  <span className="text-gray-700">£40 discount when paying by bank transfer</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-japan-indigo p-8 rounded-xl shadow-md text-white flex flex-col">
              <h3 className="text-xl font-medium mb-2">Japan with OurTravelTreats</h3>
              <div className="text-white/80 text-sm mb-2">22 Sept - 3 Oct, 2025 • 12 days</div>
              <div className="text-white/90 text-sm mb-6"><span className="font-medium">Group size:</span> Max 16 travelers</div>
              
              <div className="mb-6 flex-grow">
                <div className="text-3xl font-medium">£2,335 <span className="text-3xl text-white">GBP</span> <span className="text-3xl text-white/80">(~€2,750)</span></div>
                <div className="text-white/80 text-sm">per person (twin share)</div>
                <div className="text-white/90 text-sm mt-3">Bank transfer price: £2,295 GBP <span className="text-white/80">(~€2,700 – Save €50!)</span></div>
                <div className="text-white/90 text-sm mt-1">You save as there are no credit card fees!</div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-medium text-white/95 border-t border-white/20 pt-4"><span className="font-bold">Deposit today:</span> £470 GBP (~€550)</p>
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
                <p className="mt-2">
                  <a 
                    href="https://travelwith.tours/terms-conditions/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:underline hover:text-white/90"
                  >
                    Click here to read our Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center text-gray-500 text-sm max-w-2xl mx-auto">
            <p>Card payments are processed in GBP via Stripe.</p>
            <p>Bank transfers are accepted in EUR, GBP, or USD via our Wise business account.</p>
            <p>EUR amounts are estimates based on recent exchange rates and may vary slightly.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCta;
