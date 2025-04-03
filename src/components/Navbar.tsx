
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="japan-container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-serif font-bold text-japan-indigo">
            TravelWith
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={`text-japan-indigo hover:text-japan-pink transition-colors ${location.pathname === '/' ? 'font-medium' : ''}`}>
                  Home
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={`text-japan-indigo hover:text-japan-pink transition-colors ${location.pathname === '/about' ? 'font-medium' : ''}`}>
                  About Us
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-japan-indigo focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute top-full left-0 right-0 animate-fade-in">
          <div className="japan-container flex flex-col gap-4">
            <Link 
              to="/" 
              className={`text-japan-indigo hover:text-japan-pink transition-colors ${location.pathname === '/' ? 'font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-japan-indigo hover:text-japan-pink transition-colors ${location.pathname === '/about' ? 'font-medium' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
