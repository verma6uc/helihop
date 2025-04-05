
import React from 'react';
import { BookingPreview } from './components/BookingPreview';
import { ProcessVisualization } from './components/ProcessVisualization';
import { TrustIndicators } from './components/TrustIndicators';
import { MembershipOptions } from './components/MembershipOptions';
import { NewsletterSignup } from './components/NewsletterSignup';
import { ContactInfo } from './components/ContactInfo';

/**
 * CallToActionBookingPreview section for the Homepage
 * 
 * This section serves as the primary conversion funnel on the Homepage,
 * encouraging users to initiate the booking process or request more information.
 */
export const CallToActionBookingPreview: React.FC = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden" aria-labelledby="cta-heading">
      {/* Background with gradient and topographical lines */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-blue-500/10 z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/topographical-pattern.svg')]"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 
            id="cta-heading" 
            className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4"
          >
            Your Journey Begins Here
          </h2>
          <p className="text-lg text-gray-700 font-lato max-w-2xl mx-auto">
            Experience the simplicity of booking your exclusive helicopter service in just a few steps.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column: Booking preview and process visualization */}
          <div className="space-y-10">
            <BookingPreview />
            <ProcessVisualization />
          </div>

          {/* Right column: CTAs, membership options, and other elements */}
          <div className="space-y-8">
            <div className="flex flex-col space-y-4">
              <button 
                className="bg-[#0077B6] hover:bg-[#0077B6]/90 text-white font-montserrat font-bold py-4 px-8 rounded-md shadow-lg transition-all duration-300 transform hover:translate-y-[-2px] animate-pulse"
                aria-label="Book your helicopter service now"
              >
                Book Now
              </button>
              <button 
                className="bg-white border-2 border-[#0077B6] text-[#0077B6] hover:bg-gray-50 font-montserrat font-bold py-4 px-8 rounded-md shadow-md transition-all duration-300"
                aria-label="Request a consultation with our team"
              >
                Request Consultation
              </button>
            </div>

            <MembershipOptions />
            <TrustIndicators />
            
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <NewsletterSignup />
                <ContactInfo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBookingPreview;
