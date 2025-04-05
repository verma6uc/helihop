
import React from 'react';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

/**
 * Displays the current step in a multi-step form process
 */
const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center space-x-2 md:space-x-4">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        
        return (
          <React.Fragment key={stepNumber}>
            {/* Step circle */}
            <div className="flex flex-col items-center">
              <div 
                className={`
                  flex items-center justify-center w-8 h-8 rounded-full transition-colors
                  ${isCompleted ? 'bg-[#0077B6] text-white' : ''}
                  ${isActive ? 'bg-[#0077B6] text-white ring-2 ring-[#0077B6] ring-opacity-50' : ''}
                  ${!isActive && !isCompleted ? 'bg-gray-200 text-gray-600' : ''}
                `}
                aria-current={isActive ? 'step' : undefined}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <span className="text-sm font-medium">{stepNumber}</span>
                )}
              </div>
              <span className={`text-xs mt-1 hidden md:block ${isActive ? 'font-medium text-[#0077B6]' : 'text-gray-500'}`}>
                {stepNumber === 1 && 'Trip Details'}
                {stepNumber === 2 && 'Personal Info'}
                {stepNumber === 3 && 'Confirmation'}
              </span>
            </div>
            
            {/* Connector line between steps */}
            {stepNumber < totalSteps && (
              <div 
                className={`flex-1 h-0.5 max-w-[40px] ${
                  stepNumber < currentStep ? 'bg-[#0077B6]' : 'bg-gray-300'
                }`}
              ></div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StepIndicator;
