
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Route } from '../../../../types';
import { POPULAR_ROUTES } from '../../../../data/routes';
import TimeSavingCalculator from './components/TimeSavingCalculator';
import MapVisualization from './components/MapVisualization';

/**
 * HeroBannerSkyLimit Component - The hero banner for the BookNow page
 * 
 * This component serves as the dynamic, full-width introduction to the BookNow page.
 * It captures user attention, communicates HeliHop's premium positioning, and highlights 
 * the core value proposition of time-saving through intelligent aerial mobility.
 */
const HeroBannerSkyLimit: React.FC = () => {
  const [selectedRoute, setSelectedRoute] = useState<Route | null>(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const handleRouteSelect = (route: Route | null) => {
    setSelectedRoute(route);
  };
  
  // Parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroBackground = document.querySelector('.hero-background');
      if (heroBackground) {
        (heroBackground as HTMLElement).style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section 
      className="relative w-full min-h-[80vh] bg-gray-900 overflow-hidden" 
      aria-label="Sky's The Limit Hero Banner"
    >
      {/* Background Image with parallax effect */}
      <div 
        className="hero-background absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/images/aerial-cityscape.jpg')",
          filter: "brightness(0.6)",
          zIndex: 0
        }}
        aria-hidden="true"
      />
      
      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white font-montserrat">
            Redefine Your Commute with Intelligent Aerial Mobility
          </h1>
          <p className="text-lg md:text-xl text-gray-100 font-lato max-w-3xl mx-auto">
            Save hours, not minutes, with optimized helicopter routing
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left column: Route Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TimeSavingCalculator 
              routes={POPULAR_ROUTES} 
              onRouteSelect={handleRouteSelect}
              selectedRoute={selectedRoute}
            />
          </motion.div>
          
          {/* Right column: Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <MapVisualization selectedRoute={selectedRoute} />
          </motion.div>
        </div>
        
        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md font-bold text-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Book your flight now"
          >
            Book Your Flight
          </motion.button>
          
          <motion.button
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-gray-900 py-3 px-8 rounded-md font-bold text-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            aria-label="Explore available routes"
          >
            Explore Routes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBannerSkyLimit;
  