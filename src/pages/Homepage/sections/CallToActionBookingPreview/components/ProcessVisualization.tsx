
import React from 'react';

/**
 * ProcessVisualization component
 * 
 * Visual representation of the 3-step booking process
 */
export const ProcessVisualization: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: 'Select Route',
      description: 'Choose your preferred route and travel date'
    },
    {
      number: 2,
      title: 'Confirm Details',
      description: 'Review and confirm your booking information'
    },
    {
      number: 3,
      title: 'Fly',
      description: 'Enjoy your exclusive helicopter journey'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-6">
        Book in 3 Simple Steps
      </h3>
      
      <div className="relative">
        {/* Connection line */}
        <div className="absolute top-10 left-7 w-[calc(100%-56px)] h-0.5 bg-gray-200 z-0 hidden md:block"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#0077B6] text-white flex items-center justify-center mb-4 font-montserrat font-bold text-xl">
                {step.number}
              </div>
              <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                {step.title}
              </h4>
              <p className="text-sm font-lato text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
