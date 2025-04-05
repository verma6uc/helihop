
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TierBadge from './TierBadge';

/**
 * BenefitSpotlight - Highlights premium membership benefits
 * 
 * A visually distinct section that showcases one or two key exclusive offerings
 * to attract users to higher membership tiers.
 */
const BenefitSpotlight: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  
  const animation = useSpring({
    transform: hovered ? 'scale(1.02)' : 'scale(1)',
    boxShadow: hovered 
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    config: { tension: 300, friction: 20 }
  });

  return (
    <animated.div 
      className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-800 to-blue-600 text-white"
      style={animation}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="absolute top-0 right-0 w-2/5 h-full opacity-20">
        <img 
          src="/images/helicopter-luxury-interior.jpg" 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>
      
      <div className="container mx-auto px-6 py-12 md:py-16 relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="mb-4">
            <TierBadge tier="platinum" size="large" />
          </div>
          
          <h3 className="text-2xl md:text-3xl font-montserrat font-bold mb-4">
            Platinum Exclusive: Private Terminal Access
          </h3>
          
          <p className="text-blue-100 mb-6 font-lato leading-relaxed">
            Bypass the main terminal completely with our exclusive private lounge and 
            dedicated check-in service. Your journey begins in total comfort and privacy,
            with premium refreshments and personalized concierge available at all times.
          </p>
          
          <ul className="space-y-2 mb-8">
            {['Zero wait time', 'Dedicated security screening', 'Premium refreshments', 'Personal travel assistant'].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-secondary-yellow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <button className="bg-secondary-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-md transition duration-300 inline-flex items-center">
            Learn More
            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
        
        <div className="hidden md:block">
          <img 
            src="/images/private-terminal-lounge.jpg" 
            alt="Luxurious private terminal lounge exclusive to Platinum members" 
            className="rounded-lg shadow-lg object-cover w-full h-80"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900 to-transparent opacity-50"></div>
      <div className="absolute top-10 right-10">
        <svg className="text-white opacity-10 w-64 h-64" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L1 7l11 6 11-6-11-6zM1 16l11 6 11-6-11-6-11 6z"/>
        </svg>
      </div>
    </animated.div>
  );
};

export default BenefitSpotlight;
  