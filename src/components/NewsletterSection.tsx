
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send this to your newsletter service
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    
    setEmail('');
  };

  return (
    <section className="py-16 bg-japan-cream">
      <div className="japan-container">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-japan-indigo mb-3">
              Get Travel Inspiration & Special Offers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about new tours, seasonal highlights, 
              and exclusive discounts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow"
            />
            <Button type="submit" className="bg-japan-indigo hover:bg-japan-indigo/90 text-white whitespace-nowrap">
              Subscribe
            </Button>
          </form>

          <p className="text-xs text-gray-500 text-center mt-4">
            By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
