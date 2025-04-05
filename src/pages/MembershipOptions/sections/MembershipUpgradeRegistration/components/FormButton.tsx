
import React from 'react';

interface FormButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  children: React.ReactNode;
  className?: string;
  fullWidth?: boolean;
}

export const FormButton: React.FC<FormButtonProps> = ({
  type = 'button',
  variant = 'primary',
  onClick,
  disabled = false,
  isLoading = false,
  children,
  className = '',
  fullWidth = false,
}) => {
  // Base classes
  const baseClasses = "font-montserrat font-semibold py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  // Variant-specific classes
  const variantClasses = {
    primary: "bg-primary hover:bg-primary-dark text-white focus:ring-primary",
    secondary: "bg-secondary hover:bg-secondary-dark text-gray-900 focus:ring-secondary",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary"
  };
  
  // State classes
  const stateClasses = {
    disabled: "opacity-50 cursor-not-allowed",
    loading: "relative !text-transparent",
    fullWidth: "w-full"
  };
  
  // Combine classes
  const buttonClasses = [
    baseClasses,
    variantClasses[variant],
    disabled ? stateClasses.disabled : '',
    isLoading ? stateClasses.loading : '',
    fullWidth ? stateClasses.fullWidth : '',
    className
  ].join(' ');
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={buttonClasses}
      aria-busy={isLoading}
    >
      {children}
      
      {/* Loading spinner */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      )}
    </button>
  );
};
  