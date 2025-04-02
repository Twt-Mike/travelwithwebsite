
import { Check } from 'lucide-react';

const WhyTravelWith = () => {
  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Partner with Travel With?</h2>
          <p className="section-subtitle mx-auto">
            We specialize in tailor-made group trips built around you and your audience's unique interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-japan-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">Fully Custom-Built</h3>
              <p className="text-gray-700">
                We collaborate directly with hosts and influencers to design original itineraries, no generic tours.
              </p>
            </div>

            <div className="bg-japan-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">Exclusive & Limited</h3>
              <p className="text-gray-700">
                Trips designed exclusively for your community, not available anywhere else.
              </p>
            </div>

            <div className="bg-japan-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">Personalized Experiences</h3>
              <p className="text-gray-700">
                Immerse your community in meaningful cultural connections that truly resonate.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">What Sets Us Apart</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Designed With You:</strong> Every itinerary is crafted hand-in-hand with influencers and hosts
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Exclusive Access:</strong> Enjoy authentic experiences far beyond typical tourism
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Small & Personalized:</strong> Tailored for intimate groups, creating deeper connections
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Expertly Managed:</strong> We handle all logistics—allowing hosts to focus on their audience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Audience Engagement:</strong> Strengthen your community bonds through shared travel experiences
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTravelWith;
