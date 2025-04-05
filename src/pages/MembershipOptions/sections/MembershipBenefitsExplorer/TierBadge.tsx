
import React from 'react';
import { MembershipTier } from './membershipData';

interface TierBadgeProps {
  tier: MembershipTier;
}

/**
 * TierBadge Component
 * 
 * This component displays a badge indicating which membership tier
 * includes a specific benefit.
 */
export const TierBadge: React.FC<TierBadgeProps> = ({ tier }) => {
  const getBadgeStyles = () => {
    switch (tier) {
      case 'essential':
        return 'bg-blue-100 text-blue-800';
      case 'premium':
        return 'bg-purple-100 text-purple-800';
      case 'elite':
        return 'bg-secondary text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTierName = () => {
    switch (tier) {
      case 'essential':
        return 'Essential';
      case 'premium':
        return 'Premium';
      case 'elite':
        return 'Elite';
      default:
        return tier;
    }
  };

  return (
    <span 
      className={`text-xs font-medium px-2 py-1 rounded-full ${getBadgeStyles()}`}
      aria-label={`Available with ${getTierName()} membership`}
    >
      {getTierName()}
    </span>
  );
};
