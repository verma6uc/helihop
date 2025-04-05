
import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import StepWizard from 'react-step-wizard';
import Confetti from 'react-confetti';

import { PersonalInfoStep } from './steps/PersonalInfoStep';
import { MembershipSelectionStep } from './steps/MembershipSelectionStep';
import { PaymentInfoStep } from './steps/PaymentInfoStep';
import { ConfirmationStep } from './steps/ConfirmationStep';
import { StepIndicator } from './components/StepIndicator';
import { FormButton } from './components/FormButton';
import { MembershipFormValues } from './types';

/**
 * MembershipUpgradeRegistration component - A conversion-focused section with clear calls-to-action 
 * for signing up or upgrading membership, emphasizing the seamless onboarding process.
 */
const MembershipUpgradeRegistration: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const totalSteps = 3;

  const initialValues: MembershipFormValues = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    membershipType: '',
    cardName: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
    agreeToTerms: false,
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    membershipType: Yup.string().required('Please select a membership type'),
    cardName: Yup.string().when('$step', {
      is: 3,
      then: Yup.string().required('Name on card is required'),
    }),
    cardNumber: Yup.string().when('$step', {
      is: 3,
      then: Yup.string().required('Card number is required'),
    }),
    cardExpiry: Yup.string().when('$step', {
      is: 3,
      then: Yup.string().required('Expiration date is required'),
    }),
    cardCVC: Yup.string().when('$step', {
      is: 3,
      then: Yup.string().required('CVC is required'),
    }),
    agreeToTerms: Yup.boolean().when('$step', {
      is: 3,
      then: Yup.boolean().oneOf([true], 'You must agree to the terms and conditions'),
    }),
  });

  const handleFormSubmit = (values: MembershipFormValues) => {
    console.log('Form submitted with values:', values);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000);
  };

  return (
    <section id="membership-upgrade-registration" className="py-16 bg-gray-50">
      {showConfetti && <Confetti recycle={false} numberOfPieces={500} />}
      
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-4">
            Membership Upgrade & Registration
          </h2>
          <p className="text-xl font-lato text-gray-600 max-w-3xl mx-auto">
            Your journey begins now. Join HeliHop today and start experiencing helicopter travel like never before.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-6 md:p-10">
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleFormSubmit}
              validateOnMount={false}
              validateOnChange={true}
              validateOnBlur={true}
            >
              {(formikProps) => (
                <Form className="w-full">
                  <div className="mb-8">
                    <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />
                  </div>

                  <div className="mb-8 min-h-[400px]">
                    <StepWizard
                      isHashEnabled={false}
                      onStepChange={(stats) => setCurrentStep(stats.activeStep)}
                      nav={<CustomNav />}
                    >
                      <PersonalInfoStep 
                        formikProps={formikProps} 
                        stepName="Personal Information"
                      />
                      <MembershipSelectionStep 
                        formikProps={formikProps} 
                        stepName="Select Membership"
                      />
                      <PaymentInfoStep 
                        formikProps={formikProps} 
                        stepName="Payment Details"
                        onSubmit={formikProps.handleSubmit}
                      />
                    </StepWizard>
                  </div>

                  {showConfetti && (
                    <ConfirmationStep
                      formValues={formikProps.values}
                    />
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 font-lato">
            Have questions? <a href="#contact" className="text-primary hover:underline">Contact our support team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

// Custom empty nav component for StepWizard
const CustomNav = () => null;

export default MembershipUpgradeRegistration;
