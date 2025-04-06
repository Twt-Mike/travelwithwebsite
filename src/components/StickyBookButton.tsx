
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

// The URL for your WooCommerce product page
const BOOKING_URL = "https://travelwith.tours/product/japan-tour-with-ourtraveltreats";

const StickyBookButton = () => {
  const [visible, setVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Show button when scrolled down 300px
      const shouldBeVisible = window.scrollY > 300;
      setVisible(shouldBeVisible);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
      visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <Button 
        onClick={() => window.open(BOOKING_URL, '_blank')}
        size="lg" 
        className="bg-japan-pink hover:bg-japan-pink/90 text-white shadow-lg rounded-full px-6 h-14"
      >
        Book Now
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default StickyBookButton;
