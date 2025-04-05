
import { useState, useEffect, useRef } from 'react';
import { FeatureCard } from './components/FeatureCard';
import { RouteComparison } from './components/RouteComparison';
import { StatisticCard } from './components/StatisticCard';
import { routingFeatures, routeStatistics } from './data';
import { useInView } from 'react-intersection-observer';

/**
 * IntelligentRoutingShowcase section component
 * Displays HeliHop's AI-powered routing system with interactive visualizations
 */
export const IntelligentRoutingShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 px-4 bg-white"
      aria-labelledby="routing-showcase-title"
    >
      <div className="max-w-7xl mx-auto">
        <div className={`transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <h2 
            id="routing-showcase-title"
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 text-center font-montserrat"
          >
            AI-Powered Routing Intelligence
          </h2>
          
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center mb-12 font-lato">
            Our proprietary algorithm optimizes every journey in real-time, saving you valuable time while ensuring the safest and most efficient routes.
          </p>
          
          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {routingFeatures.map((feature, index) => (
              <FeatureCard 
                key={feature.id}
                feature={feature}
                index={index}
                isVisible={isVisible}
              />
            ))}
          </div>
          
          {/* Route Comparison Visualization */}
          <div className="mb-16">
            <RouteComparison isVisible={isVisible} />
          </div>
          
          {/* Statistics Section */}
          <div className="bg-gray-50 py-10 px-6 rounded-lg">
            <h3 className="text-2xl font-montserrat font-semibold text-center mb-8">
              Proven Time Savings
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {routeStatistics.map((stat, index) => (
                <StatisticCard 
                  key={stat.id}
                  statistic={stat}
                  delay={index * 200}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="mt-16 text-center">
            <p className="text-lg text-gray-700 mb-6 font-lato">
              Experience the HeliHop difference on your next journey.
            </p>
            <button 
              className="bg-primary-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50"
              aria-label="Learn more about our routing technology"
            >
              Learn More About Our Technology
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentRoutingShowcase;
  