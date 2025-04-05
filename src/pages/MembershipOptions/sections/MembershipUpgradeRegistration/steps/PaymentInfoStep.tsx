
import React, { useState } from 'react';
import { StepProps } from '../types';
import { FormInput } from '../components/FormInput';
import { FormButton } from '../components/FormButton';

export const PaymentInfoStep: React.FC<StepProps> = ({ 
  formik, 
  onNext, 
  onPrev 
}) => {
  const [isProcessing, setIsProcessing] = useState(false);

  // Format credit card number with spaces
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (value.length <= 16) {
      formik.setFieldValue('cardNumber', value);
    }
  };

  // Format expiry date with slash
  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/[^0-9]/g, '');
    
    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2, 4);
    }
    
    formik.setFieldValue('expiryDate', value);
  };

  // Simulate payment processing
  const handleContinue = () => {
    setIsProcessing(true);
    // Simulate API call
    setTimeout(() => {
      setIsProcessing(false);
      onNext();
    }, 1500);
  };

  return (
    <>
      <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-6">
        Payment Information
      </h3>
      
      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <div className="flex items-center mb-2">
          <svg 
            className="w-5 h-5 text-primary mr-2" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h4 className="font-montserrat font-medium text-gray-700">Secure Payment</h4>
        </div>
        <p className="text-sm text-gray-600 font-lato">
          Your payment information is securely encrypted and processed. We don\'t store full card details on our servers.
        </p>
      </div>
      
      <FormInput
        id="cardName"
        name="cardName"
        label="Name on Card"
        placeholder="John Doe"
        value={formik.values.cardName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.cardName}
        touched={formik.touched.cardName}
        required
        autoComplete="cc-name"
      />
      
      <FormInput
        id="cardNumber"
        name="cardNumber"
        label="Card Number"
        placeholder="1234 5678 9012 3456"
        value={formik.values.cardNumber}
        onChange={handleCardNumberChange}
        onBlur={formik.handleBlur}
        error={formik.errors.cardNumber}
        touched={formik.touched.cardNumber}
        required
        autoComplete="cc-number"
      />
      
      <div className="md:grid md:grid-cols-2 md:gap-x-4">
        <FormInput
          id="expiryDate"
          name="expiryDate"
          label="Expiry Date"
          placeholder="MM/YY"
          value={formik.values.expiryDate}
          onChange={handleExpiryChange}
          onBlur={formik.handleBlur}
          error={formik.errors.expiryDate}
          touched={formik.touched.expiryDate}
          required
          autoComplete="cc-exp"
        />
        
        <FormInput
          id="cvv"
          name="cvv"
          label="CVV"
          placeholder="123"
          tooltip="3 or 4 digit security code on the back of your card"
          value={formik.values.cvv}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.cvv}
          touched={formik.touched.cvv}
          required
          autoComplete="cc-csc"
        />
      </div>
      
      <div className="mt-8 flex justify-between">
        <FormButton 
          type="button" 
          variant="outline" 
          onClick={onPrev}
          disabled={isProcessing}
        >
          Back
        </FormButton>
        
        <FormButton 
          type="button" 
          variant="primary" 
          onClick={handleContinue}
          isLoading={isProcessing}
          disabled={isProcessing}
        >
          {isProcessing ? 'Processing...' : 'Complete Membership'}
        </FormButton>
      </div>
    </>
  );
};
  