
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-japan-indigo text-white">
      <div className="japan-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">
              Japan Travel <span className="text-japan-pink">Treats</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Curating unforgettable travel experiences throughout Japan. Discover 
              authentic culinary adventures, cultural immersion, and hidden gems with our 
              expert local guides.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white hover:text-japan-pink transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-japan-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-japan-pink transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Tours
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Top Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Tokyo
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Kyoto
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Osaka
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Hakone
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Mount Fuji
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-300 hover:text-japan-pink transition-colors">
                  Hiroshima
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  1-1 Chiyoda, Chiyoda City, Tokyo 100-8111, Japan
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="flex-shrink-0" />
                <span className="text-gray-300">+81 3-1234-5678</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="flex-shrink-0" />
                <span className="text-gray-300">info@japantraveltreats.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Japan Travel Treats. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4 text-sm">
            <Link to="/" className="hover:text-japan-pink">
              Privacy Policy
            </Link>
            <Link to="/" className="hover:text-japan-pink">
              Terms of Service
            </Link>
            <Link to="/" className="hover:text-japan-pink">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
