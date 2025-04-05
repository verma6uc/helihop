
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';
import { Section } from '../../../../components/Section/Section';
import FeatureCard from './components/FeatureCard';
import RouteComparison from './components/RouteComparison';
import StatisticCard from './components/StatisticCard';
import { features, statistics } from './data';

/**
 * IntelligentRoutingShowcase section component for the Homepage
 * Displays the AI-powered routing technology capabilities with interactive visuals
 */
const IntelligentRoutingShowcase: React.FC = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headerAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const subheaderAnimation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(20px)',
    delay: 200,
    config: { mass: 1, tension: 120, friction: 14 },
  });

  return (
    <Section 
      id="intelligent-routing" 
      className="py-16 md:py-24 bg-gradient-to-br from-white to-blue-50"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <animated.h2 
          style={headerAnimation} 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 font-montserrat mb-4"
        >
          AI-Powered Routing Intelligence
        </animated.h2>
        
        <animated.p 
          style={subheaderAnimation} 
          className="text-lg md:text-xl text-center text-gray-700 font-lato max-w-3xl mx-auto mb-16"
        >
          Experience the difference intelligent routing makes—saving you time while adapting to real-world conditions for optimal journeys.
        </animated.p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <FeatureCard 
              key={feature.id}
              feature={feature}
              index={index}
              inView={inView}
            />
          ))}
        </div>

        {/* Route Comparison */}
        <div className="mb-16">
          <RouteComparison inView={inView} />
        </div>

        {/* Statistics Section */}
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 font-montserrat mb-12">
            The HeliHop Advantage
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statistics.map((stat, index) => (
              <StatisticCard 
                key={stat.id}
                statistic={stat}
                index={index}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default IntelligentRoutingShowcase;
  