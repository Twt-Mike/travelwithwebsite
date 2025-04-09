
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface StickyBookButtonProps {
  onBookNow: () => void;
}

const StickyBookButton = ({ onBookNow }: StickyBookButtonProps) => {
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
        onClick={onBookNow}
        size="lg" 
        className="bg-[#75bf8f] hover:bg-[#75bf8f]/90 text-white shadow-lg rounded-full px-6 h-14"
      >
        Book Now
        <ExternalLink className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
};

export default StickyBookButton;
