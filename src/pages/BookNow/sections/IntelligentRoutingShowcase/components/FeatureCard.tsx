
import { useEffect, useState } from 'react';
import { motion } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import { RoutingFeature } from '../types';

interface FeatureCardProps {
  feature: RoutingFeature;
  index: number;
  isVisible: boolean;
}

/**
 * FeatureCard component to display individual routing features
 */
export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, isVisible }) => {
  const [expanded, setExpanded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  
  const animationDelay = index * 150;

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-700 transform ${
        isVisible && inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      style={{ transitionDelay: `${animationDelay}ms` }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary-blue bg-opacity-10 mr-3">
            <span className="text-primary-blue" aria-hidden="true">
              {feature.icon}
            </span>
          </div>
          <h3 className="text-xl font-montserrat font-semibold text-gray-900">
            {feature.title}
          </h3>
        </div>
        
        <p className="text-gray-700 font-lato mb-6">
          {feature.description}
        </p>
        
        <div className="mb-6 relative overflow-hidden rounded-lg bg-gray-50">
          <div 
            className={`transition-all duration-500 ${expanded ? 'h-auto' : 'h-48'}`}
            aria-expanded={expanded}
          >
            <img 
              src={feature.image} 
              alt={feature.imageAlt} 
              className="w-full h-auto"
              loading="lazy"
            />
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-primary-blue hover:text-blue-700 text-sm font-semibold font-lato flex items-center justify-center w-full py-2 focus:outline-none focus:underline"
            aria-label={expanded ? "Show less" : "Show more"}
          >
            {expanded ? 'Show Less' : 'Show More'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transform transition-transform ${expanded ? 'rotate-180' : ''}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm text-gray-500 font-lato">Traditional Route</p>
            <p className="text-lg font-semibold text-gray-800 font-lato">{feature.traditionalTime}</p>
          </div>
          <div className="h-10 border-l border-gray-300"></div>
          <div>
            <p className="text-sm text-gray-500 font-lato">HeliHop AI Route</p>
            <p className="text-lg font-semibold text-primary-blue font-lato">{feature.optimizedTime}</p>
          </div>
          <div className="h-10 border-l border-gray-300"></div>
          <div>
            <p className="text-sm text-gray-500 font-lato">Time Saved</p>
            <p className="text-lg font-semibold text-accent-orange font-lato">{feature.timeSaved}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
  