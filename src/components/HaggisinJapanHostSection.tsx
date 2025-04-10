
import { Card } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const HaggisinJapanHostSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="py-20 bg-white">
      <div className="japan-container">
        {isMobile ? (
          // Mobile layout - single column with image between heading and text
          <div className="space-y-6">
            <h2 className="text-3xl font-serif font-bold text-japan-indigo">
              Meet Your Guide – Craig
            </h2>
            
            <Card className="overflow-hidden shadow-lg rounded-lg max-w-md mx-auto">
              <img 
                src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Craig1.jpeg" 
                alt="Craig, your guide for Japan"
                className="w-full h-auto object-cover aspect-[4/5]"
              />
            </Card>
            
            <div className="space-y-4 text-japan-slate">
              <p>
                Hi! 👋 I'm Craig. Your friendly Scotsman in Japan! 🇯🇵
              </p>
              <p>
                I've spent years traveling the world, but nowhere has felt more like home—yet still full of surprises—than Japan. Growing up in the north of Scotland as a classic Pokémon kid, I never imagined that my first trip to Japan in 2018 would change everything. I fell in love with the food, the culture, the people, and the unique rhythm of life here. Now, I get to share all of that with you.
              </p>
              <p>
                Traveling with me isn't just about ticking off the 'must-see' spots—it's about experiencing Japan like a local. We'll dive into every aspect of the culture, from incredible food and drink to stunning temples and shrines, and, of course, the wonderfully weird and quirky side of the country.
              </p>
              <p>
                Along the way, I'll teach you local customs, handy language tips, and take you to the best hidden gems I've discovered—so you can truly experience the magic of Japan. Let's make some unforgettable memories together! 😊
              </p>
              
              <div className="pt-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-japan-indigo hover:text-japan-pink font-medium transition-colors"
                >
                  Follow Craig on Instagram →
                </a>
              </div>
            </div>
          </div>
        ) : (
          // Desktop layout - two columns
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-japan-indigo mb-6">
                Meet Your Guide – Craig
              </h2>
              
              <Card className="overflow-hidden shadow-lg rounded-lg mb-6">
                <img 
                  src="https://tixgiajjzrgbajugxnlk.supabase.co/storage/v1/object/public/haggis//Craig1.jpeg" 
                  alt="Craig, your guide for Japan"
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
              </Card>
            </div>
            
            <div className="space-y-4 text-japan-slate">
              <p>
                Hi! 👋 I'm Craig. Your friendly Scotsman in Japan! 🇯🇵
              </p>
              <p>
                I've spent years traveling the world, but nowhere has felt more like home—yet still full of surprises—than Japan. Growing up in the north of Scotland as a classic Pokémon kid, I never imagined that my first trip to Japan in 2018 would change everything. I fell in love with the food, the culture, the people, and the unique rhythm of life here. Now, I get to share all of that with you.
              </p>
              <p>
                Traveling with me isn't just about ticking off the 'must-see' spots—it's about experiencing Japan like a local. We'll dive into every aspect of the culture, from incredible food and drink to stunning temples and shrines, and, of course, the wonderfully weird and quirky side of the country.
              </p>
              <p>
                Along the way, I'll teach you local customs, handy language tips, and take you to the best hidden gems I've discovered—so you can truly experience the magic of Japan. Let's make some unforgettable memories together! 😊
              </p>
              
              <div className="pt-4">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-japan-indigo hover:text-japan-pink font-medium transition-colors"
                >
                  Follow Craig on Instagram →
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HaggisinJapanHostSection;
