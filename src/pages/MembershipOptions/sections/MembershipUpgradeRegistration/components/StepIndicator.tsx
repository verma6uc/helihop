
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  const stepTitles = [
    'Personal Info',
    'Select Plan',
    'Payment',
    'Confirmation'
  ];

  return (
    <div className="hidden md:block mb-8" aria-label="Form progress">
      <div className="flex justify-between">
        {stepTitles.map((title, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;
          
          return (
            <div key={stepNumber} className="relative flex flex-col items-center" style={{ width: `${100 / totalSteps}%` }}>
              {/* Connector line */}
              {stepNumber < totalSteps && (
                <div
                  className={`absolute top-5 w-full h-1 left-1/2 ${isCompleted ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-hidden="true"
                ></div>
              )}
              
              {/* Step circle */}
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full z-10 relative ${
                  isActive 
                    ? 'bg-primary text-white border-2 border-primary-light' 
                    : isCompleted 
                    ? 'bg-primary text-white' 
                    : 'bg-white text-gray-500 border-2 border-gray-300'
                }`}
                aria-current={isActive ? 'step' : undefined}
              >
                {isCompleted ? (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="font-montserrat font-semibold">{stepNumber}</span>
                )}
              </div>
              
              {/* Step title */}
              <div className="mt-2 text-center">
                <span 
                  className={`font-lato text-sm ${
                    isActive 
                      ? 'font-semibold text-primary' 
                      : isCompleted 
                      ? 'font-medium text-primary' 
                      : 'text-gray-500'
                  }`}
                >
                  {title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
  