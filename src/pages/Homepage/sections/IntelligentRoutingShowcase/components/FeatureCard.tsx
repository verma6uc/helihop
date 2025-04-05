
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { FeatureCardProps } from '../types';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

/**
 * FeatureCard component displays an individual routing feature with comparison slider
 */
const FeatureCard: React.FC<FeatureCardProps> = ({ feature, index, inView }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(30px)',
    delay: 200 + (index * 150),
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const expandAnimation = useSpring({
    height: isExpanded ? 'auto' : '0px',
    opacity: isExpanded ? 1 : 0,
    config: { tension: 240, friction: 24 },
  });

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <animated.div 
      style={cardAnimation}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="mr-4 p-2 bg-blue-50 rounded-lg">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 font-montserrat">{feature.title}</h3>
        </div>
        
        <p className="text-gray-700 mb-4 font-lato">{feature.description}</p>
      </div>
      
      <div className="px-6 pb-2">
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={feature.beforeImage}
              alt={`Traditional routing for ${feature.title}`}
              className="w-full h-48 object-cover"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={feature.afterImage}
              alt={`AI-powered routing for ${feature.title}`}
              className="w-full h-48 object-cover"
            />
          }
          position={50}
          style={{ height: '12rem' }}
          className="rounded-lg overflow-hidden"
        />

        <div className="flex justify-between text-xs text-gray-500 mt-2 px-2">
          <span>Traditional Routing</span>
          <span>HeliHop AI Routing</span>
        </div>
      </div>

      <button
        onClick={toggleExpanded}
        className="mt-2 flex items-center justify-center p-4 w-full text-blue-600 hover:text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-expanded={isExpanded}
        aria-controls={`detail-${feature.id}`}
      >
        <span className="mr-2 font-medium">{isExpanded ? 'Show Less' : 'Learn More'}</span>
        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
      </button>

      <animated.div 
        style={expandAnimation}
        id={`detail-${feature.id}`}
        className="px-6 overflow-hidden"
      >
        <div className="pb-6 text-gray-700">
          <p className="font-lato">{feature.detailedDescription}</p>
        </div>
      </animated.div>
    </animated.div>
  );
};

export default FeatureCard;
  