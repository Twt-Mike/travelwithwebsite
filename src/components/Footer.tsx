
import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-japan-indigo text-white">
      <div className="japan-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-japan-pink transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">About TravelWith</h4>
            <p className="text-gray-300 mb-4">
              TravelWith is a boutique travel company specializing in immersive, authentic experiences 
              in partnership with content creators and experts who share our passion for meaningful travel.
            </p>
            <a 
              href="/about" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-japan-pink transition-colors flex items-center"
            >
              Learn more about us
            </a>
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
