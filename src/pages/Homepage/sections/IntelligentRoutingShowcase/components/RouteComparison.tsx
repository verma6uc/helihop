
import React from 'react';
import { useSpring, animated } from 'react-spring';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { RouteComparisonProps } from '../types';
import { routeComparisonData } from '../data';

/**
 * RouteComparison component displays a large interactive comparison
 * between traditional and AI routing with animations and statistics
 */
const RouteComparison: React.FC<RouteComparisonProps> = ({ inView }) => {
  const titleAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const descriptionAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 300,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const comparisonAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.95)',
    delay: 400,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const statsAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 600,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <div className="flex flex-col items-center">
      <animated.h3 
        style={titleAnimation}
        className="text-2xl md:text-3xl font-bold text-gray-900 text-center font-montserrat mb-3"
      >
        {routeComparisonData.title}
      </animated.h3>
      
      <animated.p 
        style={descriptionAnimation}
        className="text-md md:text-lg text-gray-700 text-center max-w-2xl mx-auto mb-8 font-lato"
      >
        {routeComparisonData.description}
      </animated.p>
      
      <animated.div 
        style={comparisonAnimation}
        className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg mb-8"
      >
        <ReactCompareSlider
          itemOne={
            <ReactCompareSliderImage
              src={routeComparisonData.beforeImage}
              alt="Traditional helicopter routing path"
              className="w-full object-cover"
              style={{ height: '450px' }}
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={routeComparisonData.afterImage}
              alt="HeliHop AI optimized routing path"
              className="w-full object-cover"
              style={{ height: '450px' }}
            />
          }
          position={50}
          className="h-[300px] md:h-[450px]"
          style={{
            '--divider-width': '2px',
            '--divider-color': '#0077B6',
            '--handle-color': '#0077B6',
          } as React.CSSProperties}
        />
        
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between">
          <div className="text-center">
            <span className="block text-sm text-gray-600 font-lato">{routeComparisonData.beforeLabel}</span>
          </div>
          <div className="text-center">
            <span className="block text-sm text-gray-600 font-lato">{routeComparisonData.afterLabel}</span>
          </div>
        </div>
      </animated.div>
      
      <animated.div 
        style={statsAnimation}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-sm p-4 text-center border-l-4 border-blue-500">
          <span className="block text-xl font-bold text-blue-600 font-montserrat">
            {routeComparisonData.stats.timeSaved}
          </span>
          <span className="text-sm text-gray-600 font-lato">Average Journey Time</span>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 text-center border-l-4 border-blue-500">
          <span className="block text-xl font-bold text-blue-600 font-montserrat">
            {routeComparisonData.stats.distanceReduced}
          </span>
          <span className="text-sm text-gray-600 font-lato">Route Efficiency</span>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-4 text-center border-l-4 border-blue-500">
          <span className="block text-xl font-bold text-blue-600 font-montserrat">
            {routeComparisonData.stats.fuelSaved}
          </span>
          <span className="text-sm text-gray-600 font-lato">Environmental Impact</span>
        </div>
      </animated.div>
    </div>
  );
};

export default RouteComparison;
  