
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

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
  
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-opacity duration-300 ${
      visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
    }`}>
      <Button 
        onClick={scrollToBooking}
        size="lg" 
        className="bg-japan-pink hover:bg-japan-pink/90 text-white shadow-lg rounded-full px-6 h-14"
      >
        Book Now
      </Button>
    </div>
  );
};

export default StickyBookButton;
