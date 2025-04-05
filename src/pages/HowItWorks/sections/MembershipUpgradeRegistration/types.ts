
import { FormikProps } from 'formik';

export interface MembershipFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  membershipType: string;
  cardName: string;
  cardNumber: string;
  cardExpiry: string;
  cardCVC: string;
  agreeToTerms: boolean;
}

export interface StepProps {
  formikProps: FormikProps<MembershipFormValues>;
  stepName: string;
  isActive?: boolean;
  previousStep?: () => void;
  nextStep?: () => void;
  goToStep?: (step: number) => void;
  firstStep?: () => void;
  lastStep?: () => void;
}

export interface ConfirmationStepProps {
  formValues: MembershipFormValues;
}

export interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export interface FormInputProps {
  id: string;
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
  helpText?: string;
}

export interface FormButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

export interface FormRadioGroupProps {
  name: string;
  label: string;
  options: {
    value: string;
    label: string;
    description?: string;
    price?: string;
    features?: string[];
  }[];
}
