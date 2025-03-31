
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
            Japan Travel <span className="text-japan-pink">Treats</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-japan-slate hover:text-japan-indigo font-medium">
            Home
          </Link>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-japan-slate hover:text-japan-indigo font-medium">
                Destinations <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white">
              <DropdownMenuItem>
                <Link to="/" className="w-full">Tokyo</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Kyoto</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Osaka</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to="/" className="w-full">Hokkaido</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/" className="text-japan-slate hover:text-japan-indigo font-medium">
            Tours
          </Link>
          <Link to="/" className="text-japan-slate hover:text-japan-indigo font-medium">
            About
          </Link>
          <Link to="/" className="text-japan-slate hover:text-japan-indigo font-medium">
            Blog
          </Link>
          <Link to="/" className="text-japan-slate hover:text-japan-indigo font-medium">
            Contact
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Button className="btn-primary">Book Now</Button>
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
              className="text-japan-slate hover:text-japan-indigo font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2 border-b border-gray-100">
              <button className="flex items-center gap-1 text-japan-slate hover:text-japan-indigo font-medium mb-2">
                Destinations <ChevronDown size={16} />
              </button>
              <div className="pl-4 flex flex-col gap-2">
                <Link to="/" className="text-japan-slate" onClick={() => setMobileMenuOpen(false)}>Tokyo</Link>
                <Link to="/" className="text-japan-slate" onClick={() => setMobileMenuOpen(false)}>Kyoto</Link>
                <Link to="/" className="text-japan-slate" onClick={() => setMobileMenuOpen(false)}>Osaka</Link>
                <Link to="/" className="text-japan-slate" onClick={() => setMobileMenuOpen(false)}>Hokkaido</Link>
              </div>
            </div>
            <Link
              to="/"
              className="text-japan-slate hover:text-japan-indigo font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tours
            </Link>
            <Link
              to="/"
              className="text-japan-slate hover:text-japan-indigo font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/"
              className="text-japan-slate hover:text-japan-indigo font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/"
              className="text-japan-slate hover:text-japan-indigo font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="btn-primary mt-2">Book Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
