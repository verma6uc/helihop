
import React from 'react';
import { StepProps } from '../types';
import { FormRadioGroup } from '../components/FormRadioGroup';
import { FormButton } from '../components/FormButton';

/**
 * MembershipSelectionStep component - Second step in the registration process
 * Allows users to select their desired membership plan
 */
export const MembershipSelectionStep: React.FC<StepProps> = ({
  formikProps,
  stepName,
  previousStep,
  nextStep,
}) => {
  const membershipOptions = [
    {
      value: 'basic',
      label: 'Basic Membership',
      description: 'Essential access to helicopter services with standard benefits.',
      price: '$99/month',
      features: [
        'Access to basic booking platform',
        'Standard availability',
        'Email customer support',
        'Basic travel insurance'
      ]
    },
    {
      value: 'premium',
      label: 'Premium Membership',
      description: 'Enhanced service with priority booking and additional benefits.',
      price: '$249/month',
      features: [
        'Priority booking privileges',
        'Extended availability windows',
        'Dedicated phone support',
        'Comprehensive travel insurance',
        '10% discount on additional services'
      ]
    },
    {
      value: 'elite',
      label: 'Elite Membership',
      description: 'Our most exclusive package with unlimited access and premium perks.',
      price: '$499/month',
      features: [
        'Unlimited booking privileges',
        '24/7 availability',
        'Personal concierge service',
        'Premium travel insurance with global coverage',
        '20% discount on additional services',
        'Complimentary luxury ground transportation'
      ]
    }
  ];

  const handleNext = () => {
    formikProps.setFieldTouched('membershipType', true);
    
    if (!formikProps.errors.membershipType && nextStep) {
      nextStep();
    }
  };

  return (
    <div>
      <h3 className="text-2xl font-montserrat font-bold mb-6 text-gray-800">{stepName}</h3>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6 border border-gray-200">
        <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-2">Choose Your HeliHop Experience</h4>
        <p className="text-gray-600 font-lato">
          Select the membership tier that best fits your travel needs. All plans include our 
          core benefits with added features at higher tiers.
        </p>
      </div>
      
      <FormRadioGroup
        name="membershipType"
        label="Select Your Membership Plan"
        options={membershipOptions}
      />
      
      <div className="mt-8 flex justify-between">
        <FormButton
          type="button"
          variant="outline"
          onClick={previousStep}
        >
          Previous Step
        </FormButton>
        
        <FormButton
          type="button"
          variant="primary"
          onClick={handleNext}
          disabled={!formikProps.values.membershipType}
        >
          Next Step
        </FormButton>
      </div>
    </div>
  );
};
