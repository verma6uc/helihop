
import React from 'react';
import { MembershipTier } from './membershipData';

interface TierFilterProps {
  selectedTier: MembershipTier | 'all';
  onTierChange: (tier: MembershipTier | 'all') => void;
  tiers: Array<{id: MembershipTier; name: string; color: string}>;
}

/**
 * TierFilter - Component for filtering benefits by membership tier
 * 
 * Allows users to select which membership tier's benefits they want to view,
 * or to view all benefits across tiers.
 */
const TierFilter: React.FC<TierFilterProps> = ({ 
  selectedTier, 
  onTierChange,
  tiers
}) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-montserrat font-semibold text-lg text-gray-700 mb-4">
        Filter Benefits by Membership Tier
      </h3>
      
      <div className="inline-flex flex-wrap justify-center gap-2 sm:gap-4">
        <button
          className={`px-4 sm:px-6 py-2 rounded-md border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue ${
            selectedTier === 'all'
              ? 'bg-primary-blue text-white border-primary-blue'
              : 'bg-white text-gray-700 border-gray-300 hover:border-primary-blue hover:text-primary-blue'
          }`}
          onClick={() => onTierChange('all')}
          aria-pressed={selectedTier === 'all'}
        >
          All Tiers
        </button>
        
        {tiers.map(tier => (
          <button
            key={tier.id}
            className={`px-4 sm:px-6 py-2 rounded-md border-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${tier.color} ${
              selectedTier === tier.id
                ? `bg-${tier.color} text-white border-${tier.color}`
                : `bg-white text-gray-700 border-gray-300 hover:border-${tier.color} hover:text-${tier.color}`
            }`}
            onClick={() => onTierChange(tier.id)}
            aria-pressed={selectedTier === tier.id}
          >
            {tier.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TierFilter;
  