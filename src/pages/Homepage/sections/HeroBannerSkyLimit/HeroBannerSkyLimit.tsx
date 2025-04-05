
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { routes } from '../../../../data/routes';
import { RouteInfo } from '../../../../types';
import TimeSavingCalculator from './components/TimeSavingCalculator';
import MapVisualization from './components/MapVisualization';
import CountUp from './components/CountUp';

/**
 * Hero Banner component for the Homepage
 * Showcases the main value proposition with a route calculator and map visualization
 */
const HeroBannerSkyLimit: React.FC = () => {
  const [selectedOrigin, setSelectedOrigin] = useState<string>('');
  const [selectedDestination, setSelectedDestination] = useState<string>('');
  const [timeSaved, setTimeSaved] = useState<number | null>(null);
  const [selectedRoute, setSelectedRoute] = useState<RouteInfo | null>(null);
  
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation effect when component comes into view
  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  // Variants for staggered animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  // Calculate time savings when origin and destination change
  useEffect(() => {
    if (selectedOrigin && selectedDestination && selectedOrigin !== selectedDestination) {
      const route = routes.find(
        (r) => 
          (r.origin === selectedOrigin && r.destination === selectedDestination) ||
          (r.origin === selectedDestination && r.destination === selectedOrigin)
      );
      
      if (route) {
        setTimeSaved(route.groundTimeMinutes - route.flightTimeMinutes);
        setSelectedRoute(route);
      } else {
        setTimeSaved(null);
        setSelectedRoute(null);
      }
    } else {
      setTimeSaved(null);
      setSelectedRoute(null);
    }
  }, [selectedOrigin, selectedDestination]);

  // Get unique locations from routes
  const locations = Array.from(
    new Set(routes.flatMap((route) => [route.origin, route.destination]))
  ).sort();

  return (
    <section 
      className="relative w-full min-h-screen overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background with parallax effect */}
      <div className="absolute inset-0 w-full h-full">
        <motion.div 
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url("/images/aerial-cityscape.jpg")', 
            backgroundSize: 'cover',
          }}
          animate={{
            y: [0, -10],
          }}
          transition={{
            duration: 8, 
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,37,61,0.7)] to-[rgba(0,119,182,0.4)]"></div>
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 flex flex-col justify-center min-h-screen">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-7xl mx-auto"
        >
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Text Content */}
            <div className="text-white space-y-8">
              <motion.h1 
                id="hero-heading"
                variants={itemVariants}
                className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                Redefine Your Commute with Intelligent Aerial Mobility
              </motion.h1>
              
              <motion.p 
                variants={itemVariants}
                className="font-lato text-xl md:text-2xl text-gray-100 max-w-xl"
              >
                Save hours, not minutes, with optimized helicopter routing
              </motion.p>
              
              {/* Time Saving Display */}
              {timeSaved !== null && (
                <motion.div
                  variants={itemVariants}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mt-4"
                >
                  <p className="font-lato text-lg text-white mb-2">
                    Estimated time savings:
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-montserrat text-4xl font-bold text-[#FFDD00]">
                      <CountUp 
                        end={timeSaved} 
                        duration={2} 
                      />
                    </span>
                    <span className="font-lato text-2xl text-white">minutes</span>
                  </div>
                </motion.div>
              )}
              
              {/* Call to Action Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 mt-8"
              >
                <button 
                  className="bg-[#FF5733] text-white font-montserrat font-bold px-8 py-4 rounded-lg shadow-lg transform transition hover:scale-105 hover:bg-[#e84c2b] focus:outline-none focus:ring-2 focus:ring-[#FF5733] focus:ring-opacity-50"
                  aria-label="Book your flight now"
                >
                  Book Your Flight
                </button>
                <button 
                  className="bg-transparent border-2 border-white text-white font-montserrat font-bold px-8 py-4 rounded-lg shadow-lg transform transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  aria-label="Explore available routes"
                >
                  Explore Routes
                </button>
              </motion.div>
            </div>
            
            {/* Route Calculator and Map */}
            <motion.div 
              variants={itemVariants}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 border border-white/20 shadow-2xl"
            >
              <h2 className="font-montserrat text-2xl font-bold text-white mb-6">
                Calculate Your Time Savings
              </h2>
              
              <TimeSavingCalculator
                locations={locations}
                selectedOrigin={selectedOrigin}
                selectedDestination={selectedDestination}
                onOriginChange={setSelectedOrigin}
                onDestinationChange={setSelectedDestination}
              />
              
              {/* Map Visualization */}
              <div className="h-64 md:h-80 mt-6 rounded-lg overflow-hidden">
                {selectedRoute ? (
                  <MapVisualization 
                    route={selectedRoute} 
                    className="w-full h-full rounded-lg"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center">
                    <p className="text-gray-300 font-lato text-center px-6">
                      Select an origin and destination to visualize your route and time savings
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBannerSkyLimit;
