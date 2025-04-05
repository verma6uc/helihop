
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { RouteStatistic } from '../types';

interface StatisticCardProps {
  statistic: RouteStatistic;
  delay: number;
  isVisible: boolean;
}

/**
 * StatisticCard component to display animated route statistics
 */
export const StatisticCard: React.FC<StatisticCardProps> = ({ 
  statistic, 
  delay,
  isVisible
}) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);
  
  const numberProps = useSpring({
    value: shouldAnimate ? statistic.value : 0,
    from: { value: 0 },
    delay,
    config: { duration: 2000 }
  });
  
  const renderValue = () => {
    if (statistic.format === 'percent') {
      return (
        <>
          <animated.span>
            {numberProps.value.to(val => Math.floor(val))}
          </animated.span>
          %
        </>
      );
    } else if (statistic.format === 'time') {
      return (
        <>
          <animated.span>
            {numberProps.value.to(val => Math.floor(val))}
          </animated.span>
          {statistic.unit}
        </>
      );
    } else {
      return (
        <animated.span>
          {numberProps.value.to(val => Math.floor(val))}
        </animated.span>
      );
    }
  };

  return (
    <div 
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 transform ${
        shouldAnimate ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div className="text-center">
        <div className="text-3xl font-bold text-primary-blue mb-2 font-montserrat">
          {renderValue()}
        </div>
        <h4 className="text-lg font-medium text-gray-900 mb-2 font-lato">
          {statistic.label}
        </h4>
        <p className="text-sm text-gray-600 font-lato">
          {statistic.description}
        </p>
      </div>
    </div>
  );
};
  