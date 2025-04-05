
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Route } from '../../../../../types';
import CountUp from './CountUp';

interface TimeSavingCalculatorProps {
  routes: Route[];
  onRouteSelect: (route: Route) => void;
  selectedRoute: Route | null;
}

/**
 * Interactive calculator component that displays time savings
 * when using helicopter transport compared to ground transport
 */
const TimeSavingCalculator: React.FC<TimeSavingCalculatorProps> = ({ 
  routes, 
  onRouteSelect, 
  selectedRoute 
}) => {
  const handleRouteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const routeId = e.target.value;
    const route = routes.find(r => r.id === routeId) || null;
    onRouteSelect(route);
  };

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="bg-white bg-opacity-95 p-6 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold mb-4 text-gray-800">Calculate Your Time Savings</h3>
      
      <div className="mb-4">
        <label htmlFor="route-selector" className="block text-sm font-medium text-gray-700 mb-1">
          Select Popular Route
        </label>
        <select
          id="route-selector"
          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          onChange={handleRouteChange}
          value={selectedRoute?.id || ''}
          aria-label="Select a popular route"
        >
          <option value="">-- Select a route --</option>
          {routes.map(route => (
            <option key={route.id} value={route.id}>
              {route.name}
            </option>
          ))}
        </select>
      </div>
      
      <AnimatePresence>
        {selectedRoute && (
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-6 p-4 bg-gray-50 rounded-md"
          >
            <div className="flex justify-between mb-4">
              <div>
                <h4 className="text-sm text-gray-500">By Helicopter</h4>
                <p className="text-2xl font-bold text-blue-700">
                  {inView ? (
                    <CountUp end={selectedRoute.helicopterTime} duration={1.5} />
                  ) : (
                    selectedRoute.helicopterTime
                  )} min
                </p>
              </div>
              <div>
                <h4 className="text-sm text-gray-500">By Car</h4>
                <p className="text-2xl font-bold text-gray-700">
                  {inView ? (
                    <CountUp end={selectedRoute.carTime} duration={1.5} />
                  ) : (
                    selectedRoute.carTime
                  )} min
                </p>
              </div>
            </div>
            
            <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded">
              <p className="text-lg font-medium text-blue-800">
                Save <span className="font-bold text-xl">
                  {inView ? (
                    <CountUp end={selectedRoute.carTime - selectedRoute.helicopterTime} duration={2} />
                  ) : (
                    selectedRoute.carTime - selectedRoute.helicopterTime
                  )}
                </span> minutes!
              </p>
              <p className="text-sm text-blue-600">That\'s {Math.round(((selectedRoute.carTime - selectedRoute.helicopterTime) / selectedRoute.carTime) * 100)}% of your travel time.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TimeSavingCalculator;
  