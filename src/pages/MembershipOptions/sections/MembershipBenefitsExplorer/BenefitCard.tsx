
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Benefit } from './membershipData';
import { TierBadge } from './TierBadge';

interface BenefitCardProps {
  benefit: Benefit;
  onSetSpotlight: () => void;
}

/**
 * BenefitCard Component
 * 
 * This component displays an individual membership benefit with an interactive
 * flip animation to reveal more details.
 */
export const BenefitCard: React.FC<BenefitCardProps> = ({ benefit, onSetSpotlight }) => {
  const [flipped, setFlipped] = useState(false);
  
  // Card flip animation
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(1200px) rotateY(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  });

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setFlipped(!flipped);
      e.preventDefault();
    }
  };

  const handleSpotlightClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSetSpotlight();
  };

  return (
    <div 
      className="relative h-96 cursor-pointer group"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="button"
      aria-pressed={flipped}
      aria-label={`Benefit: ${benefit.title}. Press to ${flipped ? 'hide' : 'show'} details`}
    >
      {/* Front of card */}
      <animated.div
        className="absolute w-full h-full rounded-lg overflow-hidden shadow-md bg-white transform-gpu backface-visibility-hidden"
        style={{
          opacity: opacity.to(o => 1 - o),
          transform,
        }}
      >
        <div className="h-full flex flex-col">
          <div 
            className="h-48 bg-cover bg-center" 
            style={{ backgroundImage: `url(${benefit.imageUrl})` }}
            aria-hidden="true"
          />
          <div className="p-5 flex-1 flex flex-col">
            <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-600 font-lato mb-4 flex-grow">
              {benefit.shortDescription}
            </p>
            <div className="flex flex-wrap items-center justify-between mt-auto">
              <div className="flex flex-wrap gap-2">
                {benefit.tiers.map(tier => (
                  <TierBadge key={tier} tier={tier} />
                ))}
              </div>
              <span 
                className="text-sm font-medium text-primary hover:text-primary-dark transition group-hover:underline"
                aria-hidden="true"
              >
                View details
              </span>
            </div>
          </div>
        </div>
      </animated.div>

      {/* Back of card */}
      <animated.div
        className="absolute w-full h-full rounded-lg overflow-hidden shadow-md bg-white transform-gpu backface-visibility-hidden"
        style={{
          opacity,
          transform: transform.to(t => `${t} rotateY(180deg)`),
        }}
      >
        <div className="h-full p-6 flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold font-montserrat text-gray-800 mb-2">
              {benefit.title}
            </h3>
            <div className="w-12 h-1 bg-primary mb-4" aria-hidden="true" />
          </div>
          
          <div className="flex-grow overflow-y-auto mb-4">
            <p className="text-gray-600 font-lato mb-4">
              {benefit.fullDescription}
            </p>
            
            {benefit.testimonial && (
              <div className="mt-4 p-3 bg-gray-50 rounded-md border-l-4 border-secondary">
                <p className="text-sm italic text-gray-700 font-lato">
                  "{benefit.testimonial.quote}"
                </p>
                <p className="text-xs text-gray-500 mt-2 font-lato">
                  — {benefit.testimonial.author}, {benefit.testimonial.tierName} Member
                </p>
              </div>
            )}
          </div>
          
          <div className="mt-auto flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {benefit.tiers.map(tier => (
                <TierBadge key={tier} tier={tier} />
              ))}
            </div>
            
            <button
              onClick={handleSpotlightClick}
              className="px-3 py-1 text-sm font-medium bg-secondary text-gray-800 rounded-md hover:bg-secondary-light focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 transition"
              aria-label="View this benefit in spotlight section"
            >
              Spotlight
            </button>
          </div>
        </div>
      </animated.div>
    </div>
  );
};
