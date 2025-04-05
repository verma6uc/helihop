
import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import { StepProps } from '../types';
import { FormInput } from '../components/FormInput';
import { FormButton } from '../components/FormButton';

/**
 * PaymentInfoStep component - Third step in the registration process
 * Collects payment information for subscription
 */
export const PaymentInfoStep: React.FC<StepProps> = ({
  formikProps,
  stepName,
  previousStep,
  onSubmit,
}) => {
  const [focused, setFocused] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setFocused(e.target.name.split('card')[1].toLowerCase());
  };

  const handleSubmit = async () => {
    const fields = ['cardName', 'cardNumber', 'cardExpiry', 'cardCVC', 'agreeToTerms'];
    const touchedFields: {[key: string]: boolean} = {};
    
    fields.forEach(field => {
      touchedFields[field] = true;
    });
    
    formikProps.setTouched({
      ...formikProps.touched,
      ...touchedFields
    });
    
    // Check if there are any errors in payment fields
    const hasErrors = fields.some(field => formikProps.errors[field as keyof typeof formikProps.errors]);
    
    if (!hasErrors) {
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (onSubmit) {
          onSubmit();
        }
      } catch (error) {
        console.error('Payment submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-800">{stepName}</h3>
      
      <div className="bg-primary-50 p-4 rounded-lg mb-6 border border-primary-100">
        <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-2">
          Almost Done!
        </h4>
        <p className="text-gray-600 font-lato">
          Your {formikProps.values.membershipType.charAt(0).toUpperCase() + formikProps.values.membershipType.slice(1)} 
          membership is just a step away. Complete your payment details to get started.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="order-2 md:order-1">
          <FormInput
            id="cardName"
            name="cardName"
            label="Name on Card"
            placeholder="John Doe"
            required
            autoComplete="cc-name"
            onFocus={handleInputFocus}
          />
          
          <FormInput
            id="cardNumber"
            name="cardNumber"
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            required
            autoComplete="cc-number"
            onFocus={handleInputFocus}
          />
          
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              id="cardExpiry"
              name="cardExpiry"
              label="Expiry Date"
              placeholder="MM/YY"
              required
              autoComplete="cc-exp"
              onFocus={handleInputFocus}
            />
            
            <FormInput
              id="cardCVC"
              name="cardCVC"
              label="CVC"
              placeholder="123"
              required
              autoComplete="cc-csc"
              onFocus={handleInputFocus}
            />
          </div>
          
          <div className="mt-4">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
                  checked={formikProps.values.agreeToTerms}
                  onChange={formikProps.handleChange}
                  onBlur={formikProps.handleBlur}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeToTerms" className="font-lato text-gray-700">
                  I agree to the <a href="#" className="text-primary hover:underline">Terms of Service</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                </label>
                {formikProps.touched.agreeToTerms && formikProps.errors.agreeToTerms ? (
                  <p className="mt-1 text-sm text-red-600">{formikProps.errors.agreeToTerms}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="w-full max-w-xs">
            <Cards
              cvc={formikProps.values.cardCVC}
              expiry={formikProps.values.cardExpiry}
              focused={focused as any}
              name={formikProps.values.cardName}
              number={formikProps.values.cardNumber}
            />
            <div className="mt-4 bg-gray-50 p-3 rounded-md border border-gray-200">
              <p className="text-sm text-gray-600 font-lato">
                <span className="flex items-center">
                  <svg className="h-4 w-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Secure Payment Processing
                </span>
                Your payment information is encrypted and secure.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <FormButton
          type="button"
          variant="outline"
          onClick={previousStep}
          disabled={isSubmitting}
        >
          Previous Step
        </FormButton>
        
        <FormButton
          type="button"
          variant="primary"
          onClick={handleSubmit}
          loading={isSubmitting}
          disabled={isSubmitting}
        >
          Complete Registration
        </FormButton>
      </div>
    </div>
  );
};
