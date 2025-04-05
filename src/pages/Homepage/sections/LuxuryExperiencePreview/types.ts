
import { ReactNode } from 'react';

export interface ImageItem {
  src: string;
  alt: string;
  caption?: string;
}

export interface ExperiencePointItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface SafetyCredentialItem {
  icon: ReactNode;
  title: string;
  details?: string;
}

export interface TestimonialItem {
  name: string;
  role?: string;
  quote: string;
  image?: string;
}

export interface PartnerLogoItem {
  src: string;
  alt: string;
}

export interface LuxuryExperiencePreviewProps {
  /**
   * Array of images to be displayed in the carousel/gallery
   */
  images?: ImageItem[];
  
  /**
   * Array of key experience points highlighting luxury features
   */
  experiencePoints?: ExperiencePointItem[];
  
  /**
   * Array of safety credentials and certifications
   */
  safetyCredentials?: SafetyCredentialItem[];
  
  /**
   * Array of customer testimonials
   */
  testimonials?: TestimonialItem[];
  
  /**
   * Array of partner/luxury brand logos
   */
  partnerLogos?: PartnerLogoItem[];
}
  