
import React from 'react';
import { MembershipTier } from './membershipData';

interface TierBadgeProps {
  tier: MembershipTier;
  size?: 'small' | 'medium' | 'large';
}

/**
 * TierBadge - Displays a membership tier badge
 * 
 * Visual indicator showing which membership tier a benefit belongs to.
 */
const TierBadge: React.FC<TierBadgeProps> = ({ tier, size = 'small' }) => {
  const getTierColor = () => {
    switch (tier) {
      case 'bronze':
        return 'bg-amber-700 text-white';
      case 'silver':
        return 'bg-gray-400 text-white';
      case 'gold':
        return 'bg-yellow-500 text-gray-900';
      case 'platinum':
        return 'bg-gray-800 text-white';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-xs px-2 py-0.5';
      case 'medium':
        return 'text-sm px-3 py-1';
      case 'large':
        return 'text-base px-4 py-1.5';
      default:
        return 'text-xs px-2 py-0.5';
    }
  };

  return (
    <span 
      className={`rounded-full font-montserrat font-medium ${getTierColor()} ${getSizeClasses()}`}
      aria-label={`${tier} tier`}
    >
      {tier.charAt(0).toUpperCase() + tier.slice(1)}
    </span>
  );
};

export default TierBadge;
  