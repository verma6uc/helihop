
import React, { lazy, Suspense } from 'react';
import CallToActionBookingPreview from './sections/CallToActionBookingPreview';

// Lazy-loaded components would go here
// const SomeOtherSection = lazy(() => import('./sections/SomeOtherSection'));

/**
 * BookNow page - Handles the booking process for the service
 */
const BookNow: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold pt-12 pb-8 text-center font-montserrat">
          Book Your Luxury Journey
        </h1>
        
        {/* Other page sections would go here */}
        
        {/* Final CTA and Booking section */}
        <CallToActionBookingPreview />
      </div>
    </main>
  );
};

export default BookNow;
