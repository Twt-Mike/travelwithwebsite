
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-japan-indigo text-white">
      <div className="japan-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">
              TravelWith <span className="text-japan-pink">OurTravelTreats</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Curating unforgettable travel experiences throughout Japan. Discover 
              authentic culinary adventures, cultural immersion, and hidden gems with our 
              expert local guides.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/Our.TravelTreats" target="_blank" rel="noopener noreferrer" className="text-white hover:text-japan-pink transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">About TravelWith</h4>
            <a 
              href="/about" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-japan-pink transition-colors flex items-center"
            >
              Learn more about us
            </a>
            
            <h4 className="text-lg font-medium mb-4 mt-8">Contact</h4>
            <div className="flex items-center gap-2">
              <Mail size={20} className="flex-shrink-0" />
              <span className="text-gray-300">info@travelwith.tours</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} TravelWith. All rights reserved.</p>
          <div className="mt-2 flex justify-center gap-4 text-sm">
            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-japan-pink">
              Privacy Policy
            </Link>
            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="hover:text-japan-pink">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
