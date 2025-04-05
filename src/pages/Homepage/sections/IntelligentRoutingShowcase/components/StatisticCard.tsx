
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { StatisticCardProps } from '../types';

/**
 * StatisticCard component displays an individual statistic with animation
 */
const StatisticCard: React.FC<StatisticCardProps> = ({ statistic, index, inView }) => {
  const cardAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 300 + (index * 100),
    config: { mass: 1, tension: 120, friction: 14 },
  });

  // Animate counting up for the statistics
  const { value } = useSpring({
    from: { value: 0 },
    value: inView ? statistic.value : 0,
    delay: 300 + (index * 100),
    config: { duration: 1500 },
  });

  return (
    <animated.div 
      style={cardAnimation}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 text-center flex flex-col items-center"
    >
      <div className="flex items-baseline justify-center mb-2">
        <animated.span 
          className="text-4xl md:text-5xl font-bold text-blue-600 font-montserrat"
        >
          {value.to(val => Math.floor(val))}
        </animated.span>
        <span className="text-2xl md:text-3xl font-bold text-blue-600 font-montserrat ml-1">
          {statistic.unit}
        </span>
      </div>
      
      <h4 className="text-lg font-semibold text-gray-800 mb-2 font-montserrat">
        {statistic.label}
      </h4>
      
      <p className="text-sm text-gray-600 font-lato">
        {statistic.description}
      </p>
    </animated.div>
  );
};

export default StatisticCard;
  