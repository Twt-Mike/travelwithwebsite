
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        <div className="text-center mb-12">
          <h2 className="section-title">What Travelers Say About Our.TravelTreats Japan tours!</h2>
          <p className="section-subtitle mx-auto">
            Learn from the experiences of travelers who have joined our tours
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f4f0eb] p-8 rounded-xl shadow-md relative">
            <Quote className="absolute text-[#75bf8f]/20 h-16 w-16 -top-6 -left-6" />
            <blockquote className="relative z-10">
              <p className="text-lg md:text-xl italic text-gray-700 mb-6">
                "Joining the Japan trip that Laura provided was one of the best decisions I've ever made. The itinerary is well structured, makes sure that you get to see a lot of Japan and learn a lot of the Japanese culture. So if you're worried about the language barrier and the cultural differences, I can assure you that you're in best hands on Laura's trips."
              </p>
              <footer className="font-medium text-[#599d9f]">
                – Anna, Germany
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
