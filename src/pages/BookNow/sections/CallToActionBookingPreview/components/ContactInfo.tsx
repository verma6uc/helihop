
import React from 'react';

/**
 * Displays contact information and support availability
 */
const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="font-montserrat text-lg font-semibold mb-4">Need Assistance?</h3>
      
      <div className="space-y-4">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <p className="font-medium">Call our Concierge Team</p>
            <p className="text-[#0077B6] text-lg font-bold">1-800-LUXRIDE</p>
            <p className="text-sm text-gray-600">Available 24/7 for support</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="font-medium">Email Us</p>
            <a href="mailto:concierge@luxuryride.com" className="text-[#0077B6] hover:underline">concierge@luxuryride.com</a>
            <p className="text-sm text-gray-600">We respond within 2 hours</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <div>
            <p className="font-medium">Live Chat</p>
            <button className="text-[#0077B6] hover:underline font-medium">Start Chat Now</button>
            <p className="text-sm text-gray-600">Chat with our team instantly</p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 border-t border-gray-200 pt-4">
        <p className="text-sm text-gray-600">
          Our dedicated concierge team is available to assist with special requests, 
          customized itineraries, and any questions you may have about your booking.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
