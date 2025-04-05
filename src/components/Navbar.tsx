
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Use a try-catch to handle the possibility of being outside a router context
  let currentPath = '/';
  try {
    const location = useLocation();
    currentPath = location.pathname;
  } catch (error) {
    console.log('Router context not available, defaulting path to /', error);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="japan-container flex justify-between items-center">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-japan-indigo">
            TravelWith
          </span>
        </a>

        {/* Hamburger Menu Trigger (for both mobile and desktop) */}
        <button
          className="text-japan-indigo focus:outline-none"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Menu (for both mobile and desktop) */}
      {menuOpen && (
        <div className="bg-white shadow-lg py-4 absolute top-full left-0 right-0 animate-fade-in">
          <div className="japan-container flex flex-col gap-4">
            <a 
              href="/" 
              className={`text-japan-indigo hover:text-japan-pink transition-colors ${currentPath === '/' ? 'font-medium' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="/about" 
              className={`text-japan-indigo hover:text-japan-pink transition-colors ${currentPath === '/about' ? 'font-medium' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
