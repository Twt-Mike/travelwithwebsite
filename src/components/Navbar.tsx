
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
} from "@/components/ui/navigation-menu"
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Use the location to determine current path
  const location = useLocation();
  const currentPath = location.pathname;

  // Check if we're on the influencer tour page
  const isInfluencerTourPage = currentPath === '/ourtraveltreatsjpn' || currentPath === '/haggisinjapan';

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

  const navigationLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'OurTravelTreats Japan', path: '/ourtraveltreatsjpn' },
    { title: 'Haggis in Japan', path: '/haggisinjapan' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="japan-container flex justify-between items-center">
        {!isInfluencerTourPage && (
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-japan-indigo">
              TravelWith
            </span>
          </Link>
        )}
        {isInfluencerTourPage && (
          <div className="h-10"></div> /* This div maintains spacing when the logo is hidden */
        )}

        {/* Desktop Navigation */}
        {!isInfluencerTourPage && (
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    <span className={cn(
                      "text-japan-indigo hover:text-japan-pink transition-colors",
                      currentPath === '/' ? 'font-medium' : ''
                    )}>Pages</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white p-3 rounded-md shadow-md">
                    <ul className="grid gap-3 min-w-[200px]">
                      {navigationLinks.map((link) => (
                        <li key={link.path}>
                          <Link 
                            to={link.path}
                            className={cn(
                              "block p-2 rounded hover:bg-gray-100 text-japan-indigo hover:text-japan-pink transition-colors", 
                              currentPath === link.path ? "font-medium" : ""
                            )}
                            onClick={() => setMenuOpen(false)}
                          >
                            {link.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        )}

        {/* Mobile Menu Trigger (hide on influencer tour page) */}
        {!isInfluencerTourPage && (
          <button
            className="text-japan-indigo focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && !isInfluencerTourPage && (
        <div className="bg-white shadow-lg py-4 absolute top-full left-0 right-0 animate-fade-in md:hidden">
          <div className="japan-container flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`text-japan-indigo hover:text-japan-pink transition-colors ${currentPath === link.path ? 'font-medium' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
