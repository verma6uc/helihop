
import React from 'react';

/**
 * TrustIndicators component
 * 
 * Displays trust signals like security, privacy, and service guarantees
 */
export const TrustIndicators: React.FC = () => {
  const trustIndicators = [
    {
      icon: 'shield-check',
      title: 'Secure Payments',
      description: 'Your transactions are protected with industry-standard encryption'
    },
    {
      icon: 'lock-closed',
      title: 'Privacy Guaranteed',
      description: 'Your personal information is kept confidential'
    },
    {
      icon: 'clock',
      title: '24/7 Support',
      description: 'Our team is always available to assist you'
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="sr-only">Our Guarantees</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {trustIndicators.map((indicator) => (
          <div key={indicator.title} className="flex flex-col items-center text-center p-3">
            <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
              {indicator.icon === 'shield-check' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#777777]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              )}
              {indicator.icon === 'lock-closed' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#777777]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
              )}
              {indicator.icon === 'clock' && (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#777777]" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              )}
            </div>
            <h4 className="text-sm font-montserrat font-semibold text-gray-700 mb-1">
              {indicator.title}
            </h4>
            <p className="text-xs font-lato text-gray-500">
              {indicator.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
