
import React, { useState } from 'react';
import { MembershipTier } from '../types';

/**
 * Displays membership tier options with comparative benefits
 */
const MembershipOptions: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<string>('premium');
  
  const membershipTiers: MembershipTier[] = [
    {
      id: 'standard',
      name: 'Standard',
      price: '$99/month',
      benefits: [
        'Priority booking',
        'Basic vehicle options',
        'Standard support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '$299/month',
      benefits: [
        'Priority booking',
        'Full fleet access',
        'Premium support',
        'Complimentary amenities',
        '10% discount on all rides'
      ],
      isRecommended: true
    },
    {
      id: 'elite',
      name: 'Elite',
      price: '$599/month',
      benefits: [
        'Priority booking',
        'Full fleet access',
        '24/7 concierge',
        'Premium amenities',
        '20% discount on all rides',
        'Airport lounge access',
        'Hotel partnership benefits'
      ]
    }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Select Membership Tier</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {membershipTiers.map((tier) => (
          <div 
            key={tier.id}
            className={`
              border rounded-lg p-4 cursor-pointer transition-all
              ${selectedTier === tier.id 
                ? 'border-[#0077B6] ring-2 ring-[#0077B6] ring-opacity-40 bg-blue-50' 
                : 'border-gray-200 hover:border-gray-300'
              }
              ${tier.isRecommended ? 'relative' : ''}
            `}
            onClick={() => setSelectedTier(tier.id)}
          >
            {tier.isRecommended && (
              <div className="absolute -top-3 right-4 bg-[#FFDD00] text-xs font-bold uppercase text-gray-900 py-1 px-2 rounded">
                Recommended
              </div>
            )}
            
            <div className="flex items-start">
              <input
                type="radio"
                name="membershipTier"
                id={`tier-${tier.id}`}
                value={tier.id}
                checked={selectedTier === tier.id}
                onChange={() => setSelectedTier(tier.id)}
                className="mt-1 h-4 w-4 text-[#0077B6] border-gray-300 focus:ring-[#0077B6]"
              />
              <div className="ml-2">
                <label htmlFor={`tier-${tier.id}`} className="block text-sm font-medium text-gray-900">
                  {tier.name}
                </label>
                <p className="text-[#0077B6] font-semibold">{tier.price}</p>
                <ul className="mt-2 text-xs text-gray-600 space-y-1">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-4 w-4 text-green-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MembershipOptions;
