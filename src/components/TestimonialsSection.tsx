
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Hosts & Influencers Say</h2>
          <p className="section-subtitle mx-auto">
            Learn from the experience of content creators who have partnered with us
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-japan-cream p-8 rounded-xl shadow-md relative">
            <Quote className="absolute text-japan-indigo/20 h-16 w-16 -top-6 -left-6" />
            <blockquote className="relative z-10">
              <p className="text-lg md:text-xl italic text-gray-700 mb-6">
                "Travel With designed the perfect experience for my audience. Everything was seamless, deeply engaging, and truly personalized. Highly recommend partnering with them!"
              </p>
              <footer className="font-medium text-japan-indigo">
                – Influencer/Host Name, Location
              </footer>
              <p className="text-sm text-gray-500 mt-2 italic">(Real reviews will be added later.)</p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
