
import React from 'react';
import { ConfirmationStepProps } from '../types';

/**
 * ConfirmationStep component - Final step showing successful registration
 */
export const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formValues }) => {
  const membershipTypeDisplay = {
    basic: 'Basic Membership',
    premium: 'Premium Membership',
    elite: 'Elite Membership'
  };
  
  const membershipType = formValues.membershipType as keyof typeof membershipTypeDisplay;
  
  return (
    <div className="text-center max-w-2xl mx-auto animate-fadeIn">
      <div className="mb-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold font-montserrat text-gray-800 mb-2">Registration Complete!</h3>
        <p className="text-lg text-gray-600 font-lato">
          Welcome to HeliHop, {formValues.firstName}! Your journey begins now.
        </p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200 text-left">
        <h4 className="font-montserrat font-semibold text-lg text-gray-800 mb-4">
          Membership Details
        </h4>
        <div className="space-y-2 font-lato">
          <p className="flex justify-between">
            <span className="text-gray-600">Name:</span>
            <span className="font-medium text-gray-900">{formValues.firstName} {formValues.lastName}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600">Email:</span>
            <span className="font-medium text-gray-900">{formValues.email}</span>
          </p>
          <p className="flex justify-between">
            <span className="text-gray-600">Membership Type:</span>
            <span className="font-medium text-primary">
              {membershipTypeDisplay[membershipType] || formValues.membershipType}
            </span>
          </p>
        </div>
      </div>
      
      <div className="space-y-4 mb-8">
        <h4 className="font-montserrat font-semibold text-lg text-gray-800">
          What's Next?
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-primary text-xl font-bold mb-2">1</div>
            <h5 className="font-montserrat font-medium text-gray-800 mb-1">
              Check Your Email
            </h5>
            <p className="text-sm text-gray-600 font-lato">
              We've sent a confirmation email with your login details.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-primary text-xl font-bold mb-2">2</div>
            <h5 className="font-montserrat font-medium text-gray-800 mb-1">
              Complete Your Profile
            </h5>
            <p className="text-sm text-gray-600 font-lato">
              Log in and provide additional information to enhance your experience.
            </p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-primary text-xl font-bold mb-2">3</div>
            <h5 className="font-montserrat font-medium text-gray-800 mb-1">
              Book Your First Flight
            </h5>
            <p className="text-sm text-gray-600 font-lato">
              Explore available routes and schedule your first HeliHop journey.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center space-x-4">
        <a 
          href="/dashboard" 
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Go to Dashboard
        </a>
        <a 
          href="/routes" 
          className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Explore Routes
        </a>
      </div>
    </div>
  );
};
