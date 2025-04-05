
import React from 'react';

interface RadioOption {
  id: string;
  value: string;
  label: string;
  description?: string;
  price?: string;
  recommended?: boolean;
}

interface FormRadioGroupProps {
  name: string;
  legend: string;
  options: RadioOption[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  className?: string;
}

export const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  legend,
  options,
  value,
  onChange,
  error,
  touched,
  required = false,
  className = '',
}) => {
  // Generate a unique ID for the error message
  const errorId = `${name}-error`;
  const showError = touched && error;
  
  return (
    <div className={`mb-4 ${className}`} role="radiogroup" aria-labelledby={`${name}-legend`}>
      <div id={`${name}-legend`} className="flex justify-between mb-2">
        <legend className="font-lato text-sm font-medium text-gray-700">
          {legend}
          {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
        </legend>
      </div>

      <div className="space-y-3">
        {options.map((option) => (
          <div 
            key={option.id}
            className={`relative p-4 border rounded-lg transition-all ${
              value === option.value 
                ? 'border-primary bg-primary/5 ring-2 ring-primary/30' 
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            {option.recommended && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                <span className="bg-secondary text-gray-900 px-2 py-1 text-xs font-montserrat font-semibold rounded shadow-sm">
                  Recommended
                </span>
              </div>
            )}
            
            <label htmlFor={option.id} className="flex cursor-pointer">
              <div className="flex items-center h-5">
                <input
                  id={option.id}
                  name={name}
                  type="radio"
                  value={option.value}
                  checked={value === option.value}
                  onChange={onChange}
                  aria-describedby={showError ? errorId : undefined}
                  className="h-4 w-4 text-primary border-gray-300 focus:ring-primary"
                />
              </div>
              <div className="ml-3 flex-grow">
                <div className="flex justify-between items-center">
                  <span className="font-montserrat font-medium text-gray-900">{option.label}</span>
                  {option.price && (
                    <span className="font-lato font-semibold text-primary">{option.price}</span>
                  )}
                </div>
                {option.description && (
                  <p className="text-gray-500 text-sm font-lato mt-1">{option.description}</p>
                )}
              </div>
            </label>
          </div>
        ))}
      </div>
      
      {/* Error message */}
      {showError && (
        <p id={errorId} className="mt-2 text-accent text-sm font-lato" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
  