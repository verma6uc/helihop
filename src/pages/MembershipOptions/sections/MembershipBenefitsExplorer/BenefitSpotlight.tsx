
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { Benefit } from './membershipData';
import { TierBadge } from './TierBadge';

interface BenefitSpotlightProps {
  benefit: Benefit;
}

/**
 * BenefitSpotlight Component
 * 
 * This component prominently displays a selected benefit with additional 
 * context and visual emphasis.
 */
export const BenefitSpotlight: React.FC<BenefitSpotlightProps> = ({ benefit }) => {
  // Animation for when benefit changes
  const animation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    reset: true,
    key: benefit.id,
  });

  return (
    <animated.div 
      style={animation}
      className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 md:p-8 shadow-lg"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center mb-4">
          <div className="w-16 h-1 bg-secondary mr-4" aria-hidden="true" />
          <h3 className="text-xl md:text-2xl font-bold font-montserrat text-gray-800">
            Benefit Spotlight
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div 
            className="rounded-lg overflow-hidden h-64 md:h-full"
            aria-hidden="true"
          >
            <img 
              src={benefit.imageUrl} 
              alt="" 
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h4 className="text-2xl font-bold font-montserrat text-gray-800 mb-3">
              {benefit.title}
            </h4>
            
            <div className="flex flex-wrap gap-2 mb-5">
              {benefit.tiers.map(tier => (
                <TierBadge key={tier} tier={tier} />
              ))}
            </div>
            
            <p className="text-gray-700 font-lato mb-6 leading-relaxed">
              {benefit.fullDescription}
            </p>
            
            {benefit.highlights && (
              <div className="mb-6">
                <h5 className="text-lg font-semibold font-montserrat text-gray-700 mb-3">
                  Key Highlights
                </h5>
                <ul className="space-y-2">
                  {benefit.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2" aria-hidden="true">•</span>
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {benefit.testimonial && (
              <div className="p-5 bg-white rounded-lg shadow-sm border-l-4 border-secondary mt-6">
                <p className="text-gray-700 italic font-lato mb-3">
                  "{benefit.testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-2 flex items-center justify-center text-gray-500">
                    {benefit.testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">{benefit.testimonial.author}</p>
                    <p className="text-xs text-gray-500">{benefit.testimonial.tierName} Member</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </animated.div>
  );
};
