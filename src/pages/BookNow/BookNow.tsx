
import React from 'react';
import HeroBanner from '@/pages/BookNow/sections/HeroBanner';
import IntelligentRoutingShowcase from '@/pages/BookNow/sections/IntelligentRoutingShowcase';
import TimeValueCalculator from '@/pages/BookNow/sections/TimeValueCalculator';
import LuxuryExperiencePreview from '@/pages/BookNow/sections/LuxuryExperiencePreview';
import CallToActionBookingPreview from '@/pages/BookNow/sections/CallToActionBookingPreview';

/**
 * BookNow page component that assembles all sections for the helicopter booking experience
 * Presents the complete user journey from initial engagement to final booking action
 */
const BookNow: React.FC = () => {
  return (
    <div className="bg-helihop-white">
      {/* Hero Banner Section */}
      <section className="w-full">
        <HeroBanner />
      </section>

      {/* Intelligent Routing Showcase */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <IntelligentRoutingShowcase />
        </div>
      </section>

      {/* Time-Value Calculator */}
      <section className="w-full bg-helihop-lightest py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <TimeValueCalculator />
        </div>
      </section>

      {/* Luxury Experience Preview */}
      <section className="w-full py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <LuxuryExperiencePreview />
        </div>
      </section>

      {/* Call-to-Action & Booking Preview */}
      <section className="w-full bg-helihop-lightest py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8">
          <CallToActionBookingPreview />
        </div>
      </section>
    </div>
  );
};

export default BookNow;
  