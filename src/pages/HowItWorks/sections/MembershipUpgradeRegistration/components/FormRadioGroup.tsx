
import React from 'react';
import { useField } from 'formik';
import { FormRadioGroupProps } from '../types';

/**
 * FormRadioGroup component - Radio button group for selecting membership options
 */
export const FormRadioGroup: React.FC<FormRadioGroupProps> = ({
  name,
  label,
  options,
}) => {
  const [field, meta, helpers] = useField(name);
  const hasError = meta.touched && meta.error;
  
  const handleChange = (value: string) => {
    helpers.setValue(value);
  };

  return (
    <div className="mb-6">
      <label className="block text-sm font-medium font-lato text-gray-700 mb-2">
        {label}
      </label>
      
      <div className="space-y-4">
        {options.map((option) => (
          <div 
            key={option.value}
            className={`
              relative rounded-lg border-2 p-4 cursor-pointer transition-all hover:shadow-md
              ${field.value === option.value 
                ? 'border-primary bg-primary-50' 
                : 'border-gray-200 bg-white'}
            `}
            onClick={() => handleChange(option.value)}
          >
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id={`${name}-${option.value}`}
                  name={name}
                  type="radio"
                  className="h-5 w-5 text-primary border-gray-300 focus:ring-primary"
                  checked={field.value === option.value}
                  onChange={() => handleChange(option.value)}
                  aria-describedby={`${name}-${option.value}-description`}
                />
              </div>
              <div className="ml-3 flex-1">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor={`${name}-${option.value}`}
                    className="font-medium text-gray-800 text-lg"
                  >
                    {option.label}
                  </label>
                  {option.price && (
                    <span className="font-bold text-lg text-primary">
                      {option.price}
                    </span>
                  )}
                </div>
                
                {option.description && (
                  <p
                    id={`${name}-${option.value}-description`}
                    className="text-gray-600 mt-1"
                  >
                    {option.description}
                  </p>
                )}
                
                {option.features && option.features.length > 0 && (
                  <ul className="mt-2 space-y-1">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <svg 
                          className="h-4 w-4 text-primary mr-2" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {hasError && (
        <p className="mt-2 text-sm text-red-600" id={`${name}-error`}>
          {meta.error}
        </p>
      )}
    </div>
  );
};
