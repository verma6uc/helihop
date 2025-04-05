
import * as yup from 'yup';
import 'yup-phone';

/**
 * Validation schema for the booking form
 */
export const bookingFormSchema = yup.object({
  origin: yup.string().required('Origin is required'),
  destination: yup.string().required('Destination is required'),
  dateTime: yup.date().required('Date and time are required').nullable(),
  name: yup.string().required('Full name is required'),
  email: yup.string().email('Invalid email address').required('Email is required'),
  phone: yup.string().phone('Invalid phone number').required('Phone number is required'),
  passengers: yup
    .number()
    .required('Number of passengers is required')
    .min(1, 'At least 1 passenger is required')
    .max(20, 'Maximum 20 passengers allowed'),
  specialRequests: yup.string(),
  termsAccepted: yup
    .boolean()
    .oneOf([true], 'You must accept the terms and conditions')
    .required(),
  membershipTier: yup.string().oneOf(['standard', 'premium', 'elite']),
});

/**
 * Type definition for validation schema
 */
export type BookingFormValidationSchema = yup.InferType<typeof bookingFormSchema>;
