
import { Link as ScrollLink } from 'react-scroll';

const HeroNavLinks = () => {
  return (
    <div className="bg-white py-4 shadow-sm sticky top-0 z-40">
      <div className="japan-container flex justify-center">
        <div className="flex space-x-8 md:space-x-16">
          <ScrollLink
            to="tour-details"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-japan-indigo font-medium hover:text-japan-pink cursor-pointer transition-colors"
          >
            Overview
          </ScrollLink>
          <ScrollLink
            to="itinerary"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-japan-indigo font-medium hover:text-japan-pink cursor-pointer transition-colors"
          >
            Itinerary
          </ScrollLink>
          <ScrollLink
            to="faq"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-japan-indigo font-medium hover:text-japan-pink cursor-pointer transition-colors"
          >
            FAQ
          </ScrollLink>
        </div>
      </div>
    </div>
  );
};

export default HeroNavLinks;
