
import { Check } from 'lucide-react';

const WhyTravelWith = () => {
  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">Why Travel With Us?</h2>
          <p className="section-subtitle mx-auto">
            We create authentic travel experiences that connect creators and their communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-japan-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">Custom-Built Just For You</h3>
              <p className="text-gray-700">
                We work directly with creators to build custom tours specifically designed for their communities. 
                No off-the-shelf itineraries—just authentic experiences crafted around what makes each community special.
              </p>
            </div>

            <div className="bg-japan-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">Travel With Your Community</h3>
              <p className="text-gray-700">
                Connect with like-minded travelers who share your interests and passions. Our tours bring together 
                communities for unforgettable shared experiences guided by creators you know and trust.
              </p>
            </div>

            <div className="bg-japan-cream p-6 rounded-lg">
              <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">Expert Operations</h3>
              <p className="text-gray-700">
                With over a decade of experience in the travel industry and 1,000+ happy travelers, 
                we handle all the complex logistics so you can focus on enjoying the journey.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-serif font-medium text-japan-indigo mb-3">What Sets Us Apart</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Personal Host:</strong> Travel with creators who bring their unique perspective and passion
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Authentic Experiences:</strong> Access places and experiences that go beyond typical tourist attractions
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Small Groups:</strong> Travel in intimate groups of 10-16 people for a more personal experience
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Curated Connections:</strong> Meet locals, artisans, and experts who share their stories and craft
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-japan-green h-6 w-6 flex-shrink-0 mt-1" />
                <span className="text-gray-700">
                  <strong className="text-japan-indigo">Stress-Free Planning:</strong> We handle all the details so you can focus on the experience
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
