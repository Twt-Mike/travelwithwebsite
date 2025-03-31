
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What is the cancellation policy?",
    answer: "We understand plans can change. Cancellations made more than 90 days before departure will receive a full refund minus a $250 administrative fee. Cancellations 60-89 days before departure will receive a 50% refund. Cancellations less than 60 days before departure are non-refundable. We strongly recommend travel insurance to protect your investment."
  },
  {
    id: 2,
    question: "How much free time will we have?",
    answer: "We've designed this tour to have a balance of guided activities and free time. Most days have a few hours of free time in the afternoon or evening, and we have a completely free day in Osaka. This allows you to explore based on your interests, rest when needed, or join optional activities."
  },
  {
    id: 3,
    question: "Do I need a visa for Japan?",
    answer: "Most Western countries (including the US, Canada, UK, EU, and Australia) receive visa-free entry to Japan for up to 90 days. However, visa requirements can change, so we recommend checking with your local Japanese embassy or consulate before your trip."
  },
  {
    id: 4,
    question: "What is the accommodation like?",
    answer: "We stay in carefully selected 3-4 star hotels in convenient locations. In Tokyo, Kyoto, and Osaka, we use modern, comfortable hotels with Western-style rooms. In Hakone, we stay at a traditional Japanese ryokan with tatami mat floors, futon bedding, and onsen (hot spring baths). All accommodations offer private bathrooms and free WiFi."
  },
  {
    id: 5,
    question: "How much spending money should I bring?",
    answer: "Japan is relatively expensive, but many expenses are covered in your tour package. We recommend budgeting $50-70 USD per day for meals not included, snacks, shopping, and optional activities. Japan is still largely a cash-based society, so we recommend bringing some Japanese yen (we'll help you find ATMs)."
  },
  {
    id: 6,
    question: "Will I be able to stay connected during the trip?",
    answer: "All our hotels offer free WiFi, but we also recommend renting a pocket WiFi device or getting a Japanese SIM card upon arrival, which we can help arrange. This will keep you connected throughout the journey, even when exploring."
  },
  {
    id: 7,
    question: "Is this tour suitable for solo travelers?",
    answer: "Absolutely! About half of our guests are typically solo travelers. It's a great way to explore Japan while making new friends. We offer single room options (for an additional fee) or we can pair you with another solo traveler of the same gender to share a room and avoid the single supplement."
  },
  {
    id: 8,
    question: "What happens during the tour if I have dietary restrictions?",
    answer: "We can accommodate most dietary restrictions including vegetarian, vegan, gluten-free, and allergies. Please inform us of your needs when booking so we can make appropriate arrangements for group meals. Our hosts will also help you navigate menu options during free time."
  }
];

const FAQItem = ({ faq, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={toggleOpen}
      >
        <h3 className="font-medium text-japan-indigo">{faq.question}</h3>
        <div className="flex-shrink-0 ml-4">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-japan-indigo" />
          ) : (
            <ChevronDown className="h-5 w-5 text-japan-indigo" />
          )}
        </div>
      </button>
      
      {isOpen && (
        <div className="pb-5 pr-4 -mt-2 animate-fade-in">
          <p className="text-gray-700">{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

const TourFAQ = () => {
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (faqId) => {
    if (openFaq === faqId) {
      setOpenFaq(null);
    } else {
      setOpenFaq(faqId);
    }
  };

  return (
    <section className="py-20 bg-japan-cream">
      <div className="japan-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle mx-auto">
            Everything you need to know before joining our Japan adventure
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            {faqs.map((faq) => (
              <FAQItem 
                key={faq.id} 
                faq={faq} 
                isOpen={openFaq === faq.id}
                toggleOpen={() => toggleFaq(faq.id)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-700">
            Have more questions? <a href="#" className="text-japan-indigo font-medium hover:underline">Contact us</a> or DM OurTravelTreats on Instagram
          </p>
        </div>
      </div>
    </section>
  );
};

export default TourFAQ;
