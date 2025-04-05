
/**
 * Interface for the booking form data
 */
export interface BookingFormData {
  origin: string;
  destination: string;
  dateTime: Date | null;
  name: string;
  email: string;
  phone: string;
  passengers: number;
  specialRequests?: string;
  termsAccepted: boolean;
  membershipTier?: 'standard' | 'premium' | 'elite';
}

/**
 * Interface for membership tier details
 */
export interface MembershipTier {
  id: string;
  name: string;
  price: string;
  benefits: string[];
  isRecommended?: boolean;
}
