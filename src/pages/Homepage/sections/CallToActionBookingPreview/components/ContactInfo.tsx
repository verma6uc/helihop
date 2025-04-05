
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * ContactInfo component
 * 
 * Displays support information and contact details
 */
export const ContactInfo: React.FC = () => {
  return (
    <div>
      <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">
        Need Assistance?
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0077B6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <div>
            <p className="text-sm font-lato font-medium text-gray-700">Call us</p>
            <p className="text-sm font-lato text-gray-600">(888) 555-HELI</p>
            <p className="text-xs font-lato text-gray-500">Available 24/7</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0077B6] mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <div>
            <p className="text-sm font-lato font-medium text-gray-700">Email us</p>
            <p className="text-sm font-lato text-gray-600">support@helihop.com</p>
            <p className="text-xs font-lato text-gray-500">We typically respond within an hour</p>
          </div>
        </div>
        
        <div className="pt-2">
          <Link
            to="/support"
            className="inline-flex items-center text-sm font-lato text-[#0077B6] hover:text-[#0077B6]/80 transition-colors"
          >
            Visit Support Center
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
