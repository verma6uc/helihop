
import React from 'react';

interface SafetyBadgeProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

/**
 * SafetyBadge - Displays a safety credential or certification
 * that can be clicked to reveal more details
 */
const SafetyBadge: React.FC<SafetyBadgeProps> = ({
  icon,
  title,
  onClick
}) => {
  return (
    <button 
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-center justify-center text-center h-full w-full"
      onClick={onClick}
      aria-label={`View details about ${title}`}
    >
      <div className="mb-3 text-[#0077B6] w-10 h-10 flex items-center justify-center">
        {icon}
      </div>
      
      <h4 className="font-montserrat font-medium text-sm md:text-base text-gray-800">
        {title}
      </h4>
      
      <span className="text-xs text-[#0077B6] mt-2 font-lato">
        View details
      </span>
    </button>
  );
};

export default SafetyBadge;
  