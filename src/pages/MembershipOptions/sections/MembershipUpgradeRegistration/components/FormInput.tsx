
import React from 'react';

interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  required?: boolean;
  disabled?: boolean;
  tooltip?: string;
  className?: string;
  autoComplete?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  name,
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  required = false,
  disabled = false,
  tooltip,
  className = '',
  autoComplete,
}) => {
  // Determine if the error should be shown (touched and has error)
  const showError = touched && error;
  
  // Unique IDs for assistive elements
  const errorId = `${id}-error`;
  const tooltipId = tooltip ? `${id}-tooltip` : undefined;

  return (
    <div className={`mb-4 ${className}`}>
      <div className="flex justify-between">
        <label htmlFor={id} className="block font-lato text-sm font-medium text-gray-700 mb-1">
          {label}
          {required && <span className="text-accent ml-1" aria-hidden="true">*</span>}
          
          {/* If there's a tooltip, show an info icon */}
          {tooltip && (
            <div className="relative inline-block ml-1 group">
              <button
                type="button"
                aria-describedby={tooltipId}
                className="w-4 h-4 rounded-full bg-gray-200 text-gray-600 inline-flex items-center justify-center text-xs font-bold focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-primary"
                tabIndex={0}
              >
                i
              </button>
              <div 
                id={tooltipId}
                role="tooltip" 
                className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 p-2 bg-gray-800 text-white text-xs rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {tooltip}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
              </div>
            </div>
          )}
        </label>
      </div>
      
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
        aria-invalid={showError ? 'true' : 'false'}
        aria-describedby={showError ? errorId : tooltipId}
        autoComplete={autoComplete}
        className={`w-full px-4 py-2 border rounded-md font-lato text-gray-900 ${
          showError 
            ? 'border-accent focus:ring-accent/50 focus:border-accent' 
            : 'border-gray-300 focus:ring-primary/50 focus:border-primary'
        } focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:text-gray-500`}
      />
      
      {/* Error message */}
      {showError && (
        <p id={errorId} className="mt-1 text-accent text-sm font-lato" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
  