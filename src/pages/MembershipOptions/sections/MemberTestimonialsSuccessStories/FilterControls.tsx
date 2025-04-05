
import React from 'react';
import { MembershipTier, TestimonialType } from './types';

interface FilterControlsProps {
  selectedTier: MembershipTier | 'all';
  selectedType: TestimonialType | 'all';
  onTierChange: (tier: MembershipTier | 'all') => void;
  onTypeChange: (type: TestimonialType | 'all') => void;
}

/**
 * Filter controls for testimonials section
 * Allows users to filter testimonials by membership tier and testimonial type
 */
export const FilterControls: React.FC<FilterControlsProps> = ({
  selectedTier,
  selectedType,
  onTierChange,
  onTypeChange
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 mb-10">
      <div className="flex flex-col items-center">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-2">Membership Tier</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <FilterButton 
            isActive={selectedTier === 'all'}
            onClick={() => onTierChange('all')}
            label="All Tiers"
          />
          <FilterButton 
            isActive={selectedTier === 'essentials'}
            onClick={() => onTierChange('essentials')}
            label="Essentials"
          />
          <FilterButton 
            isActive={selectedTier === 'plus'}
            onClick={() => onTierChange('plus')}
            label="Plus"
          />
          <FilterButton 
            isActive={selectedTier === 'executive'}
            onClick={() => onTierChange('executive')}
            label="Executive"
          />
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <h3 className="text-sm uppercase tracking-wider text-gray-500 font-bold mb-2">Testimonial Type</h3>
        <div className="flex flex-wrap justify-center gap-2">
          <FilterButton 
            isActive={selectedType === 'all'}
            onClick={() => onTypeChange('all')}
            label="All Types"
          />
          <FilterButton 
            isActive={selectedType === 'video'}
            onClick={() => onTypeChange('video')}
            label="Video Stories"
          />
          <FilterButton 
            isActive={selectedType === 'written'}
            onClick={() => onTypeChange('written')}
            label="Written"
          />
          <FilterButton 
            isActive={selectedType === 'success-story'}
            onClick={() => onTypeChange('success-story')}
            label="Success Stories"
          />
        </div>
      </div>
    </div>
  );
};

interface FilterButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({ isActive, onClick, label }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
      isActive 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
    }`}
    aria-pressed={isActive}
  >
    {label}
  </button>
);
