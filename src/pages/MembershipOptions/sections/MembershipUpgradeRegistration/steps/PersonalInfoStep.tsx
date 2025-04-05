
import React from 'react';
import { StepProps } from '../types';
import { FormInput } from '../components/FormInput';
import { FormButton } from '../components/FormButton';

export const PersonalInfoStep: React.FC<StepProps> = ({ formik, onNext }) => {
  return (
    <>
      <h3 className="font-montserrat font-semibold text-xl text-gray-800 mb-6">
        Tell us about yourself
      </h3>
      
      <div className="md:grid md:grid-cols-2 md:gap-x-4">
        <FormInput
          id="firstName"
          name="firstName"
          label="First Name"
          placeholder="John"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.firstName}
          touched={formik.touched.firstName}
          required
          autoComplete="given-name"
        />
        
        <FormInput
          id="lastName"
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.lastName}
          touched={formik.touched.lastName}
          required
          autoComplete="family-name"
        />
      </div>
      
      <FormInput
        id="email"
        name="email"
        type="email"
        label="Email Address"
        placeholder="john.doe@example.com"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
        touched={formik.touched.email}
        required
        autoComplete="email"
      />
      
      <FormInput
        id="phone"
        name="phone"
        type="tel"
        label="Phone Number"
        placeholder="(123) 456-7890"
        tooltip="We\'ll only contact you about your membership"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.phone}
        touched={formik.touched.phone}
        required
        autoComplete="tel"
      />
      
      <div className="mt-8 flex justify-end">
        <FormButton 
          type="button" 
          variant="primary" 
          onClick={onNext}
        >
          Continue to Plan Selection
        </FormButton>
      </div>
    </>
  );
};
  