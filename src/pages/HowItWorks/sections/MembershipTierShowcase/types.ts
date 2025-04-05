
/**
 * Interface representing a HeliHop membership tier
 */
export interface MembershipTier {
  /** Unique identifier for the tier */
  id: string;
  
  /** Name of the membership tier */
  name: string;
  
  /** Short description of the tier's value proposition */
  description: string;
  
  /** Monthly price in USD (0 for free tiers) */
  monthlyPrice: number;
  
  /** Annual price in USD (0 for free tiers) */
  annualPrice: number;
  
  /** List of features included in this tier */
  features: string[];
  
  /** Whether this tier is recommended/highlighted */
  recommended: boolean;
  
  /** Text for the call-to-action button */
  ctaText: string;
  
  /** Link for the call-to-action button */
  ctaLink: string;
}
