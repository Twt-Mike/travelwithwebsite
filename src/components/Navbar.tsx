
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

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

  const isInfluencerPage = location.pathname === '/ourtraveltreats-japan';

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
            {isInfluencerPage ? (
              <>TravelWith <span className="text-japan-pink">OurTravelTreats</span></>
            ) : (
              <>Japan Travel <span className="text-japan-pink">Treats</span></>
            )}
          </span>
        </Link>

        {/* Desktop Navigation - Removed About button */}
        <div className="hidden md:flex items-center gap-4">
          {isInfluencerPage && (
            <Button 
              className="bg-japan-pink hover:bg-japan-pink/90 text-white"
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book This Tour
            </Button>
          )}
        </div>

        {/* Mobile Navigation Trigger */}
        <button
          className="md:hidden text-japan-indigo focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu - Removed About link */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute top-full left-0 right-0 animate-fade-in">
          <div className="japan-container flex flex-col gap-4">
            {isInfluencerPage && (
              <Button 
                className="bg-japan-pink hover:bg-japan-pink/90 text-white mt-2" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book This Tour
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
