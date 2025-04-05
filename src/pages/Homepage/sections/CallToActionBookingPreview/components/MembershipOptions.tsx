
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MembershipOptions component
 * 
 * Displays a brief summary of membership tiers
 */
export const MembershipOptions: React.FC = () => {
  const membershipTiers = [
    {
      name: 'Premium',
      highlight: 'Most Popular',
      features: ['Priority booking', 'Flexible cancellation', '24/7 concierge']
    },
    {
      name: 'Executive',
      highlight: 'Best Value',
      features: ['All Premium benefits', 'Companion passes', 'Exclusive events']
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-montserrat font-semibold text-gray-800">
          Membership Options
        </h3>
        <Link 
          to="/membership" 
          className="text-sm font-montserrat text-[#0077B6] hover:text-[#0077B6]/80 flex items-center"
        >
          View all
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {membershipTiers.map((tier) => (
          <div key={tier.name} className="border border-gray-200 rounded-lg p-4 relative">
            {tier.highlight && (
              <div className="absolute -top-3 right-4 bg-[#FFDD00] text-gray-800 text-xs font-montserrat font-bold py-1 px-3 rounded-full">
                {tier.highlight}
              </div>
            )}
            <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-2">
              {tier.name}
            </h4>
            <ul className="space-y-2 mb-4">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0077B6] mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm font-lato text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-800 font-montserrat text-sm py-2 rounded-md transition-colors">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
