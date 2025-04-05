
import React from 'react';
import { StepIndicatorProps } from '../types';

/**
 * StepIndicator component - Displays the current progress through the multi-step form
 */
export const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep, totalSteps }) => {
  const steps = Array.from({ length: totalSteps }, (_, i) => i + 1);

  return (
    <div className="w-full" role="navigation" aria-label="Form progress">
      <div className="flex items-center justify-between">
        {steps.map((step) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center">
              <div 
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-colors duration-300 ${
                  step < currentStep
                    ? 'bg-primary text-white border-primary'
                    : step === currentStep
                    ? 'bg-white text-primary border-primary'
                    : 'bg-white text-gray-400 border-gray-300'
                }`}
                aria-current={step === currentStep ? 'step' : undefined}
              >
                {step < currentStep ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <span className="font-medium">{step}</span>
                )}
              </div>
              <span className={`mt-2 text-sm font-medium ${
                step <= currentStep ? 'text-primary' : 'text-gray-500'
              }`}>
                {step === 1 && 'Personal Info'}
                {step === 2 && 'Membership'}
                {step === 3 && 'Payment'}
              </span>
            </div>
            
            {step < totalSteps && (
              <div 
                className={`flex-1 h-1 mx-4 ${
                  step < currentStep ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-hidden="true"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
