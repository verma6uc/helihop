
/**
 * Newsletter form data interface
 */
export interface NewsletterFormData {
  email: string;
}

/**
 * Consultation request form data interface
 */
export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Membership tier interface
 */
export interface MembershipTier {
  name: string;
  highlight?: string;
  features: string[];
}

/**
 * Trust indicator interface
 */
export interface TrustIndicator {
  icon: string;
  title: string;
  description: string;
}

/**
 * Booking route interface
 */
export interface BookingRoute {
  id: string;
  name: string;
}

/**
 * Process step interface
 */
export interface ProcessStep {
  number: number;
  title: string;
  description: string;
}
