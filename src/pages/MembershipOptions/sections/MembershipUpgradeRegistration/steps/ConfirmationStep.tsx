
import React from 'react';
import { StepProps } from '../types';
import { FormButton } from '../components/FormButton';

export const ConfirmationStep: React.FC<StepProps> = ({ formik }) => {
  // Get tier name based on selected value
  const getTierName = () => {
    switch (formik.values.membershipTier) {
      case 'basic':
        return 'Basic Tier';
      case 'premium':
        return 'Premium Tier';
      case 'executive':
        return 'Executive Tier';
      default:
        return 'Selected Tier';
    }
  };
  
  // Get price based on selected tier
  const getTierPrice = () => {
    switch (formik.values.membershipTier) {
      case 'basic':
        return '$199/month';
      case 'premium':
        return '$399/month';
      case 'executive':
        return '$899/month';
      default:
        return '';
    }
  };

  // Format card number to only show last 4 digits
  const getFormattedCardNumber = () => {
    const last4 = formik.values.cardNumber.slice(-4);
    return `•••• •••• •••• ${last4}`;
  };

  return (
    <div className="text-center">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 text-green-600 mb-6">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h3 className="font-montserrat font-bold text-2xl text-gray-900 mb-3">
        {formik.values.isUpgrade ? 'Membership Upgraded!' : 'Welcome to HeliHop!'}
      </h3>
      
      <p className="font-lato text-gray-600 mb-6 max-w-lg mx-auto">
        {formik.values.isUpgrade 
          ? 'Your membership has been successfully upgraded. You now have access to enhanced benefits and privileges.' 
          : 'Your membership has been successfully activated. You\'re now ready to experience premium helicopter travel with HeliHop.'}
      </p>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
        <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-4">
          Membership Details
        </h4>
        
        <div className="space-y-3 text-left">
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="font-lato text-sm text-gray-500">Name</span>
            <span className="font-lato font-medium text-gray-900">{formik.values.firstName} {formik.values.lastName}</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="font-lato text-sm text-gray-500">Membership</span>
            <span className="font-lato font-medium text-gray-900">{getTierName()}</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="font-lato text-sm text-gray-500">Price</span>
            <span className="font-lato font-medium text-primary">{getTierPrice()}</span>
          </div>
          
          <div className="flex justify-between items-center border-b border-gray-200 pb-2">
            <span className="font-lato text-sm text-gray-500">Payment Method</span>
            <span className="font-lato font-medium text-gray-900">{getFormattedCardNumber()}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="font-lato text-sm text-gray-500">Membership ID</span>
            <span className="font-lato font-medium text-gray-900">HH-{Math.floor(10000 + Math.random() * 90000)}</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <p className="font-lato text-gray-700 text-sm">
          A confirmation has been sent to <strong>{formik.values.email}</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <FormButton 
            type="button" 
            variant="primary"
            onClick={() => window.location.href = '/dashboard'}
          >
            Go to My Dashboard
          </FormButton>
          
          <FormButton 
            type="button" 
            variant="outline"
            onClick={() => window.location.href = '/book-flight'}
          >
            Book Your First Flight
          </FormButton>
        </div>
      </div>
    </div>
  );
};
  