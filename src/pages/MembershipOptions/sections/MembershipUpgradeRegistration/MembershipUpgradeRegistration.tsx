
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Confetti from 'react-confetti';
import { StepWizard, StepWizardChildProps } from './types';
import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { MembershipSelectionStep } from './steps/MembershipSelectionStep';
import { PaymentInfoStep } from './steps/PaymentInfoStep';
import { ConfirmationStep } from './steps/ConfirmationStep';
import { StepIndicator } from './components/StepIndicator';

/**
 * MembershipUpgradeRegistration component
 * 
 * A multi-step form section for users to sign up for a new membership or upgrade their existing one.
 * This component serves as the primary conversion point on the Membership Options page.
 */
export const MembershipUpgradeRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const totalSteps = 4;

  // Define the validation schema for different steps
  const validationSchemas = {
    1: Yup.object({
      firstName: Yup.string().required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    }),
    2: Yup.object({
      membershipTier: Yup.string().required('Please select a membership tier'),
    }),
    3: Yup.object({
      cardNumber: Yup.string().matches(/^[0-9]{16}$/, 'Card number must be 16 digits').required('Card number is required'),
      cardName: Yup.string().required('Name on card is required'),
      expiryDate: Yup.string().matches(/^(0[1-9]|1[0-2])\/[0-9]{2}$/, 'Expiry date must be in MM/YY format').required('Expiry date is required'),
      cvv: Yup.string().matches(/^[0-9]{3,4}$/, 'CVV must be 3 or 4 digits').required('CVV is required'),
    }),
  };

  // Initialize Formik with all fields from all steps
  const formik = useFormik({
    initialValues: {
      // Step 1: Personal Information
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      
      // Step 2: Membership Selection
      membershipTier: '',
      isUpgrade: false,
      
      // Step 3: Payment Information
      cardNumber: '',
      cardName: '',
      expiryDate: '',
      cvv: '',
      
      // Special offers
      acceptPromotions: true,
    },
    validationSchema: validationSchemas[currentStep as keyof typeof validationSchemas],
    onSubmit: (values) => {
      if (currentStep < totalSteps) {
        setCurrentStep(currentStep + 1);
      } else {
        // Final submission
        setShowConfetti(true);
        console.log('Form submitted successfully:', values);
        
        // Reset confetti after a few seconds
        setTimeout(() => {
          setShowConfetti(false);
        }, 5000);
      }
    },
  });

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Define props for step wizard components
  const stepProps: StepWizardChildProps = {
    formik,
    onNext: formik.submitForm,
    onPrev: handlePrevStep,
    currentStep,
    totalSteps,
  };

  // Render the current step
  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep {...stepProps} />;
      case 2:
        return <MembershipSelectionStep {...stepProps} />;
      case 3:
        return <PaymentInfoStep {...stepProps} />;
      case 4:
        return <ConfirmationStep {...stepProps} />;
      default:
        return null;
    }
  };

  return (
    <section id="membership-registration" className="py-16 bg-gradient-to-br from-white to-gray-100">
      {showConfetti && <Confetti recycle={false} />}
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-gray-900 mb-4">
              {formik.values.isUpgrade ? 'Upgrade Your Membership' : 'Join HeliHop Today'}
            </h2>
            <p className="font-lato text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
              {formik.values.isUpgrade 
                ? 'Elevate your experience with enhanced benefits and exclusive privileges.'
                : 'Get flying today with instant approval and unlock a world of premium helicopter travel.'}
            </p>
          </div>

          {/* Step indicators */}
          <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
          
          <div className="mt-8 bg-white rounded-lg shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Form section */}
              <div className="md:w-3/5 p-6 md:p-8">
                <form onSubmit={formik.handleSubmit}>
                  {renderStep()}
                </form>
              </div>
              
              {/* Info sidebar */}
              <div className="md:w-2/5 bg-gray-50 p-6 md:p-8 border-t md:border-t-0 md:border-l border-gray-200">
                <div className="sticky top-8">
                  <h3 className="font-montserrat font-bold text-xl text-gray-800 mb-4">
                    Membership Benefits
                  </h3>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="font-lato text-gray-700">Instant membership activation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="font-lato text-gray-700">Priority booking with exclusive time slots</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="font-lato text-gray-700">Dedicated concierge service</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="font-lato text-gray-700">Significant savings on every flight</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="font-lato text-gray-700">Access to special events and experiences</span>
                    </li>
                  </ul>
                  
                  <div className="bg-secondary/20 border border-secondary/30 rounded-lg p-4 mb-6">
                    <h4 className="font-montserrat font-semibold text-gray-900 flex items-center">
                      <span className="mr-2">⚡</span> Special Offer
                    </h4>
                    <p className="font-lato text-gray-700 text-sm mt-2">
                      Sign up today and receive a complimentary welcome flight to experience our premium service firsthand.
                    </p>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                      Need Assistance?
                    </h4>
                    <p className="font-lato text-gray-600 text-sm mb-3">
                      Our membership specialists are ready to help you choose the perfect plan.
                    </p>
                    <a href="tel:+18005551234" className="inline-flex items-center font-lato text-primary hover:text-primary-dark transition-colors">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      1-800-555-1234
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipUpgradeRegistration;
  