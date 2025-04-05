
import React from 'react';

interface ExperiencePointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

/**
 * ExperiencePoint - Displays a key feature/benefit of the luxury experience
 */
const ExperiencePoint: React.FC<ExperiencePointProps> = ({
  icon,
  title,
  description
}) => {
  return (
    <div className="group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="mb-4 w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0077B6] group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-2">
        {title}
      </h3>
      
      <p className="font-lato text-gray-600">
        {description}
      </p>
    </div>
  );
};

export default ExperiencePoint;
  