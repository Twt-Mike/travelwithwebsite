
import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-japan-indigo text-white">
      <div className="japan-container pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-serif mb-4">
              TravelWith
            </h3>
            <div className="flex gap-4">
              <a href="https://instagram.com/Our.TravelTreats" target="_blank" rel="noopener noreferrer" className="text-white hover:text-japan-pink transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
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
