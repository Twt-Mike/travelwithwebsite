
import { ChevronDown, ChevronUp, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    id: 1,
    question: "Where should I book my flights in & out of?",
    answer: "The tour starts in Tokyo and finishes in Hiroshima. We recommend flying into Tokyo (either Haneda or Narita Airport — both are perfectly fine) and flying out of Hiroshima Airport. If you can't find a suitable flight from Hiroshima, you're also welcome to take the bullet train back to Tokyo. However, the journey takes around 4.5 hours, so please make sure to book an evening departure flight from Tokyo to allow enough travel time. We can advise you closer to the time on how to navigate from the airport to the hotel and help with any transport questions! While we cannot be responsible for booking your flights, Laura is happy to assist you with the flight booking if needed!"
  },
  {
    id: 2,
    question: "Is there free time on the tour?",
    answer: "The itinerary is designed to be immersive and packed with unique experiences to give you the best value for your money. While most days do include some free time to explore the town, we recommend that if you want to do larger, time-consuming activities like Tokyo Disneyland, Universal Studios, or Go Karting in Tokyo, you plan to arrive a day earlier or stay an extra day at the end. If you're considering adding an extra day, feel free to reach out for advice — we're happy to help you plan!"
  },
  {
    id: 3,
    question: "Do I need a visa for Japan?",
    answer: "Most Western countries (including the US, Canada, UK, EU, and Australia) receive visa-free entry to Japan for up to 90 days. However, visa requirements can change, so we recommend checking with your local Japanese embassy or consulate before your trip. Please note that guests are responsible for their own visa, and TravelWith or OurTravelTreats are not responsible for visa issues."
  },
  {
    id: 4,
    question: "Can you help with pre-accommodation & things to do after the tour?",
    answer: "While we cannot make the booking for you, your host & guide Laura is always available to give advice to any questions! She is happy to offer suggestions for you!"
  },
  {
    id: 5,
    question: "What is the fitness level required for the tour?",
    answer: "Japan is a LOT of walking. So make sure you bring comfortable shoes and are ready to do 20,000+ steps a day. It's the best way to see this beautiful country. – we also take the best public transportation in the world so make sure whatever luggage you have you're comfortable carrying. Sometimes stairs might be our only option at a train station."
  },
  {
    id: 6,
    question: "Suitcase or backpack?",
    answer: "Either one is fine 🙂 However we recommend to pack as light as possible! If you have a suitcase you must be able to pick it up and carry it up one flight of stairs. As we move throughout the metro stations there are some elevators, but not all will be accessible near our specific train. The Shinkansen also has luggage size restrictions. While they have never enforced this on any of our tours, the luggage size restriction does exist, and we cannot be liable if they charge extra for this."
  },
  {
    id: 7,
    question: "How much spending cash should I bring for the trip?",
    answer: "As we have an awesome itinerary packed with amazing accommodation, transport, and activities, €500 is fine to bring for the rest of your meals, drinks, coffee, and some small souvenirs. That said, Japan has incredible shopping and unique gifts everywhere — so you're absolutely welcome to bring more spending money if you'd like to explore a bit more!"
  },
  {
    id: 8,
    question: "I have tattoos, is this okay to show in Japan?",
    answer: "We love this question! Visitors often hear they must hide their tattoos, but in reality, tattoos on tourists are totally fine and rarely bother locals — unless they are specifically offensive or inappropriate. That said, many traditional onsens (hot springs) and gyms in Japan still have rules against visible tattoos, and we kindly ask everyone to respect these policies. There are also plenty of tattoo-friendly onsens and sento (public baths) around Japan — feel free to ask your guide, and we'll happily help you find one!"
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
            Have more questions? <a href="mailto:info@travelwithindia.com" target="_blank" rel="noopener noreferrer" className="text-japan-indigo font-medium hover:underline">Contact us</a> or DM <a href="https://www.instagram.com/Our.TravelTreats" target="_blank" rel="noopener noreferrer" className="text-japan-indigo font-medium hover:underline">@OurTravelTreats</a> on Instagram
          </p>
        </div>

        {/* Who is TravelWith section */}
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
      </div>
    </section>
  );
};

export default TourFAQ;
