
import React from 'react';
import HeroBannerSkyLimit from '../BookNow/sections/HeroBannerSkyLimit/HeroBannerSkyLimit';
import IntelligentRoutingShowcase from '../BookNow/sections/IntelligentRoutingShowcase/IntelligentRoutingShowcase';
import TimeValueCalculator from '../BookNow/sections/TimeValueCalculator/TimeValueCalculator';
import LuxuryExperiencePreview from '../BookNow/sections/LuxuryExperiencePreview/LuxuryExperiencePreview';
import CallToActionBookingPreview from '../BookNow/sections/CallToActionBookingPreview/CallToActionBookingPreview';

/**
 * Homepage Component
 * 
 * The main landing page of the HeliHop application that showcases the key value propositions,
 * features, and benefits of the helicopter transportation service in a cohesive narrative flow.
 * Each section builds upon the previous to guide visitors through the HeliHop story.
 */
const Homepage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Banner - Introduction and primary value proposition */}
      <HeroBannerSkyLimit />
      
      {/* Intelligent Routing - Technology showcase */}
      <div className="py-8 md:py-16">
        <IntelligentRoutingShowcase />
      </div>
      
      {/* Time-Value Calculator - Demonstrate ROI */}
      <div className="py-8 md:py-16 bg-gray-50">
        <TimeValueCalculator />
      </div>
      
      {/* Luxury Experience Preview - Highlight premium service */}
      <div className="py-8 md:py-16">
        <LuxuryExperiencePreview />
      </div>
      
      {/* Call-to-Action & Booking - Convert interest to action */}
      <div className="py-8 md:py-16 bg-gray-50">
        <CallToActionBookingPreview />
      </div>
    </div>
  );
};

export default Homepage;
  