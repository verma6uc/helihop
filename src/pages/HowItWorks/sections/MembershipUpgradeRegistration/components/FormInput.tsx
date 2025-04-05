
import React from 'react';
import { useField } from 'formik';
import { FormInputProps } from '../types';

/**
 * FormInput component - Reusable form input field with validation
 */
export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  type = 'text',
  helpText,
  ...props
}) => {
  const [field, meta] = useField(props.name);
  const hasError = meta.touched && meta.error;
  
  return (
    <div className="mb-4">
      <label 
        htmlFor={id} 
        className="block text-sm font-medium font-lato text-gray-700 mb-1"
      >
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <input
          id={id}
          type={type}
          className={`
            w-full px-4 py-2 rounded-md border font-lato shadow-sm focus:ring-2 focus:ring-opacity-50 transition-colors
            ${hasError 
              ? 'border-red-500 focus:border-red-500 focus:ring-red-200' 
              : 'border-gray-300 focus:border-primary focus:ring-primary-200'}
          `}
          aria-invalid={hasError ? 'true' : 'false'}
          aria-describedby={hasError ? `${id}-error` : helpText ? `${id}-description` : undefined}
          {...field}
          {...props}
        />
        {hasError && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
      {hasError ? (
        <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
          {meta.error}
        </p>
      ) : helpText ? (
        <p className="mt-1 text-sm text-gray-500" id={`${id}-description`}>
          {helpText}
        </p>
      ) : null}
    </div>
  );
};
