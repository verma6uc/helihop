
import { FormikProps } from 'formik';

export interface MembershipFormValues {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  
  // Step 2: Membership Selection
  membershipTier: string;
  isUpgrade: boolean;
  
  // Step 3: Payment Information
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  
  // Special offers
  acceptPromotions: boolean;
}

export interface StepWizardChildProps {
  formik: FormikProps<MembershipFormValues>;
  onNext: () => void;
  onPrev: () => void;
  currentStep: number;
  totalSteps: number;
}

export interface StepProps extends StepWizardChildProps {}

export interface StepWizardProps {
  children: React.ReactNode;
  currentStep: number;
}

export interface MembershipTierOption {
  id: string;
  name: string;
  price: number;
  billingPeriod: string;
  features: string[];
  recommended?: boolean;
}
  