
import React from 'react';
import { MembershipTier } from './membershipData';

interface TierFilterProps {
  selectedTier: MembershipTier | null;
  onSelectTier: (tier: MembershipTier | null) => void;
}

/**
 * TierFilter Component
 * 
 * This component provides a filter interface to display benefits
 * specific to a selected membership tier.
 */
export const TierFilter: React.FC<TierFilterProps> = ({ selectedTier, onSelectTier }) => {
  const tiers = [
    { id: 'essential', name: 'Essential', color: 'bg-blue-100 text-blue-800' },
    { id: 'premium', name: 'Premium', color: 'bg-purple-100 text-purple-800' },
    { id: 'elite', name: 'Elite', color: 'bg-secondary text-gray-800' },
  ];

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-montserrat font-semibold text-gray-700 mb-4">
        Filter Benefits by Membership Tier
      </h3>
      
      <div className="flex flex-wrap justify-center gap-3">
        {tiers.map(tier => (
          <button
            key={tier.id}
            onClick={() => onSelectTier(selectedTier === tier.id ? null : tier.id as MembershipTier)}
            className={`px-4 py-2 rounded-full transition-all ${
              selectedTier === tier.id 
                ? `${tier.color} shadow-md ring-2 ring-offset-2 ring-gray-300` 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            } focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2`}
            aria-pressed={selectedTier === tier.id}
          >
            {tier.name}
          </button>
        ))}
        
        {selectedTier && (
          <button
            onClick={() => onSelectTier(null)}
            className="px-4 py-2 rounded-full bg-white text-gray-600 border border-gray-300 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="Clear tier filter"
          >
            Clear Filter
          </button>
        )}
      </div>
      
      {selectedTier && (
        <p className="mt-3 text-sm text-gray-500 font-lato">
          Showing benefits available with {
            selectedTier === 'essential' ? 'Essential' : 
            selectedTier === 'premium' ? 'Premium' : 'Elite'
          } tier membership
        </p>
      )}
    </div>
  );
};
