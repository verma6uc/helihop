
import * as yup from 'yup';

/**
 * Newsletter form validation schema
 */
export const newsletterSchema = yup.object({
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required')
});

/**
 * Consultation request form validation schema
 */
export const consultationSchema = yup.object({
  name: yup
    .string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  phone: yup
    .string()
    .required('Phone number is required'),
  message: yup
    .string()
    .required('Please provide some details about your inquiry')
});
