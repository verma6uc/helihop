
import React from 'react';

/**
 * Displays trust indicators like secure payment methods and privacy assurances
 */
const TrustIndicators: React.FC = () => {
  return (
    <div className="rounded-md bg-gray-50 p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <svg className="w-6 h-6 text-green-600 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11L12 14L22 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 12V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-sm text-gray-600">Secure booking & encrypted payment</span>
        </div>
        
        <div className="flex flex-wrap items-center space-x-3">
          <img src="https://via.placeholder.com/40x25?text=Visa" alt="Visa" className="h-6 object-contain" />
          <img src="https://via.placeholder.com/40x25?text=MC" alt="Mastercard" className="h-6 object-contain" />
          <img src="https://via.placeholder.com/40x25?text=Amex" alt="American Express" className="h-6 object-contain" />
          <img src="https://via.placeholder.com/40x25?text=PayPal" alt="PayPal" className="h-6 object-contain" />
        </div>
      </div>
      
      <div className="mt-3 text-xs text-gray-500 flex items-center">
        <svg className="w-4 h-4 mr-1 text-gray-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8H12.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Your personal information is protected by our privacy policy and will never be shared with third parties.
      </div>
    </div>
  );
};

export default TrustIndicators;
