
import React from 'react';
import { StepProps } from '../types';
import { FormInput } from '../components/FormInput';
import { FormButton } from '../components/FormButton';

/**
 * PersonalInfoStep component - First step in the registration process
 * Collects user's personal information
 */
export const PersonalInfoStep: React.FC<StepProps> = ({
  formikProps,
  stepName,
  nextStep,
}) => {
  const handleNext = () => {
    const fields = ['firstName', 'lastName', 'email', 'phone'];
    const touchedFields: {[key: string]: boolean} = {};
    
    fields.forEach(field => {
      touchedFields[field] = true;
    });
    
    formikProps.setTouched(touchedFields);
    
    // Validate only the fields in this step
    const stepErrors = Object.keys(formikProps.errors)
      .filter(key => fields.includes(key));
    
    if (stepErrors.length === 0 && nextStep) {
      nextStep();
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-800">{stepName}</h3>
      <div className="space-y-2">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <FormInput
            id="firstName"
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            required
            autoComplete="given-name"
          />
          
          <FormInput
            id="lastName"
            name="lastName"
            label="Last Name"
            placeholder="Enter your last name"
            required
            autoComplete="family-name"
          />
        </div>
        
        <FormInput
          id="email"
          name="email"
          label="Email Address"
          type="email"
          placeholder="you@example.com"
          required
          autoComplete="email"
          helpText="We'll never share your email with anyone else."
        />
        
        <FormInput
          id="phone"
          name="phone"
          label="Phone Number"
          placeholder="(123) 456-7890"
          required
          autoComplete="tel"
          helpText="For verification and important flight updates."
        />
      </div>
      
      <div className="mt-8 flex justify-end">
        <FormButton
          type="button"
          variant="primary"
          onClick={handleNext}
        >
          Next Step
        </FormButton>
      </div>
    </div>
  );
};
