
import { Button } from '@/components/ui/button';
import { CheckCircle, ExternalLink } from 'lucide-react';

interface BookingCtaProps {
  onBookNow: () => void;
}

const HaggisinJapanBookingCta = ({ onBookNow }: BookingCtaProps) => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-japan-indigo/5 -skew-x-12 transform origin-top-right"></div>
      
      <div className="japan-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-[#599d9f]/10 text-[#599d9f] px-4 py-1 rounded-full text-sm font-medium mb-4">
              Limited Spots Available
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-japan-indigo mb-6">
              Ready to Join This Once-in-a-Lifetime Adventure?
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Book your spot now on this exclusive Japan tour with Craig from @Haggis.in.Japan. 
              Only 19 spots available—secure yours before they're gone!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 flex flex-col">
              <h3 className="text-xl font-medium text-japan-indigo mb-6">Why Book Now</h3>
              <ul className="space-y-4 flex-grow">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Secure one of just 19 available spots</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexible payment plan (only £440 deposit)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Travel with Craig from @Haggis.in.Japan</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-japan-green mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Once-in-a-lifetime experiences in Japan</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#002e3e] p-8 rounded-xl shadow-md text-white flex flex-col">
              <h3 className="text-xl font-medium mb-2">Japan with @Haggis.in.Japan</h3>
              <div className="text-white/80 text-sm mb-2">11 Oct - 21 Oct, 2025 • 11 days</div>
              <div className="text-white/90 text-sm mb-6"><span className="font-medium">Group size:</span> Max 19 travelers</div>
              
              <div className="mb-6 flex-grow">
                <div className="text-3xl font-medium">£2,200 <span className="text-3xl text-white">GBP</span></div>
                <div className="text-white/80 text-sm">per person</div>
              </div>
              
              <div className="mb-6">
                <p className="text-lg font-medium text-white/95 border-t border-white/20 pt-4">
                  <span className="font-bold">Deposit today:</span> £440 GBP
                  <span className="block text-sm text-white/80 mt-1">20% of trip cost, non-refundable</span>
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full bg-[#599d9f] hover:bg-[#599d9f]/90 text-white flex items-center justify-center gap-2"
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
            <p>Bank transfers are accepted in GBP, EUR, or USD via our Wise business account.</p>
            <p>A £440 deposit (20% non-refundable) secures your place on this unforgettable journey.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HaggisinJapanBookingCta;
