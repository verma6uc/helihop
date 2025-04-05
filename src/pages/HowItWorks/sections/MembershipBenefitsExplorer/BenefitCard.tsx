
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import TierBadge from './TierBadge';
import { Benefit, MembershipTier } from './membershipData';

interface BenefitCardProps {
  benefit: Benefit;
}

/**
 * BenefitCard - Displays an individual membership benefit
 * 
 * The card can be flipped to show additional details about the benefit,
 * and displays which membership tiers have access to this benefit.
 */
const BenefitCard: React.FC<BenefitCardProps> = ({ benefit }) => {
  const [flipped, setFlipped] = useState(false);
  
  // Spring animation for card flip
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1200px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setFlipped(!flipped);
    }
  };

  return (
    <div 
      className="h-[360px] relative" 
      onClick={() => setFlipped(!flipped)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`Benefit: ${benefit.title}. Press to ${flipped ? 'hide' : 'show'} details`}
    >
      {/* Front of card */}
      <animated.div
        className="absolute w-full h-full bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
        style={{
          opacity: opacity.to(o => 1 - o),
          transform,
          rotateY: '0deg',
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="relative h-48 overflow-hidden">
          {benefit.image ? (
            <img 
              src={benefit.image} 
              alt={benefit.title} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image available</span>
            </div>
          )}
          <div className="absolute top-2 right-2 flex flex-wrap justify-end max-w-[80%] gap-1">
            {benefit.availableTiers.map((tier) => (
              <TierBadge key={tier} tier={tier as MembershipTier} />
            ))}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-montserrat font-bold text-lg text-gray-800 mb-2">{benefit.title}</h3>
          <p className="font-lato text-gray-600 text-sm line-clamp-3">{benefit.description}</p>
          <div className="mt-3 flex items-center text-primary-blue text-sm">
            <span>Tap to see more</span>
            <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </animated.div>

      {/* Back of card */}
      <animated.div
        className="absolute w-full h-full bg-white rounded-lg shadow-md overflow-hidden cursor-pointer p-5"
        style={{
          opacity,
          transform: transform.to(t => `${t} rotateY(180deg)`),
          backfaceVisibility: 'hidden'
        }}
      >
        <div className="h-full flex flex-col">
          <h3 className="font-montserrat font-bold text-lg text-gray-800 mb-2">{benefit.title}</h3>
          <div className="mb-3 flex flex-wrap gap-1">
            {benefit.availableTiers.map((tier) => (
              <TierBadge key={tier} tier={tier as MembershipTier} />
            ))}
          </div>
          <div className="flex-grow overflow-y-auto pr-1">
            <p className="font-lato text-gray-600">{benefit.detailedDescription || benefit.description}</p>
            
            {benefit.highlights && benefit.highlights.length > 0 && (
              <div className="mt-3">
                <h4 className="font-montserrat font-semibold text-gray-700 mb-1">Highlights:</h4>
                <ul className="list-disc pl-5">
                  {benefit.highlights.map((highlight, index) => (
                    <li key={index} className="text-gray-600 text-sm mb-1">{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className="mt-4 text-center">
            <span className="text-primary-blue text-sm cursor-pointer flex items-center justify-center">
              Tap to flip back
              <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </span>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default BenefitCard;
  