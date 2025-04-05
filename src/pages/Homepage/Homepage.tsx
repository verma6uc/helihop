
import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroBanner from './sections/HeroBanner/HeroBanner';
import IntelligentRoutingShowcase from './sections/IntelligentRoutingShowcase/IntelligentRoutingShowcase';
// Import other sections as needed

/**
 * Homepage component that assembles all homepage sections
 */
const Homepage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>HeliHop | On-Demand Helicopter Transportation</title>
        <meta name="description" content="Experience the future of urban transportation with HeliHop's AI-powered helicopter service. Book seamless point-to-point journeys across cities." />
      </Helmet>
      
      <main>
        <HeroBanner />
        <IntelligentRoutingShowcase />
        {/* Add other homepage sections here */}
      </main>
    </>
  );
};

export default Homepage;
  