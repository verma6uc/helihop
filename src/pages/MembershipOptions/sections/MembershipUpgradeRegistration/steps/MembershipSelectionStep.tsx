
import React, { useEffect } from 'react';
import { StepProps } from '../types';
import { FormRadioGroup } from '../components/FormRadioGroup';
import { FormButton } from '../components/FormButton';

export const MembershipSelectionStep: React.FC<StepProps> = ({ 
  formik, 
  onNext, 
  onPrev 
}) => {
  // Membership tier options
  const membershipOptions = [
    {
      id: 'basic-tier',
      value: 'basic',
      label: 'Basic Tier',
      description: 'Perfect for occasional travelers seeking convenience and reliability.',
      price: '$199/month',
    },
    {
      id: 'premium-tier',
      value: 'premium',
      label: 'Premium Tier',
      description: 'Enhanced access with premium privileges for regular travelers.',
      price: '$399/month',
      recommended: true,
    },
    {
      id: 'executive-tier',
      value: 'executive',
      label: 'Executive Tier',
      description: 'The ultimate luxury experience with unlimited priority flights.',
      price: '$899/month',
    },
  ];

  // Check if user might be upgrading (could be based on existing data)
  useEffect(() => {
    // This would typically come from a user context or similar
    // For now, we'll simulate this with a placeholder
    const userHasExistingMembership = false;
    
    if (userHasExistingMembership) {
      formik.setFieldValue('isUpgrade', true);
    }
  }, [formik]);

  // The form title changes based on whether user is upgrading or new
  const formTitle = formik.values.isUpgrade 
    ? 'Select Your New Membership Tier' 
    : 'Choose Your Membership Plan';

  return (
    <>
      <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-6">
        {formTitle}
      </h3>
      
      <FormRadioGroup
        name="membershipTier"
        legend="Available Membership Tiers"
        options={membershipOptions}
        value={formik.values.membershipTier}
        onChange={formik.handleChange}
        error={formik.errors.membershipTier}
        touched={formik.touched.membershipTier}
        required
      />
      
      <div className="mb-4 mt-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="acceptPromotions"
              name="acceptPromotions"
              type="checkbox"
              checked={formik.values.acceptPromotions}
              onChange={formik.handleChange}
              className="h-4 w-4 text-primary border-gray-300 rounded focus:ring-primary"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="acceptPromotions" className="font-lato text-sm text-gray-600">
              Send me special offers and flight promotions
            </label>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <FormButton 
          type="button" 
          variant="outline" 
          onClick={onPrev}
        >
          Back
        </FormButton>
        
        <FormButton 
          type="button" 
          variant="primary" 
          onClick={onNext}
        >
          Continue to Payment
        </FormButton>
      </div>
    </>
  );
};
  