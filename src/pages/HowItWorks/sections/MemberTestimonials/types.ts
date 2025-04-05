
// Testimonial types
export type TestimonialType = 'text' | 'video';
export type TestimonialTier = 'platinum' | 'gold' | 'silver' | 'standard';
export type UseCase = 'business' | 'leisure' | 'family' | 'emergency';

/**
 * Testimonial interface - represents both text and video testimonials
 */
export interface Testimonial {
  id: string;
  type: TestimonialType;
  memberName: string;
  memberTitle: string;
  memberImage?: string;
  memberTier: TestimonialTier;
  content: string; // Either testimonial text or video URL depending on type
  date?: string;
  useCase?: UseCase;
  thumbnailUrl?: string; // Only used for video testimonials
}

/**
 * Statistic interface - for displaying animated statistics
 */
export interface Statistic {
  id: string;
  icon: JSX.Element;
  value: number;
  suffix?: string;
  valueAddition?: string;
  label: string;
  subtext?: string;
  decimals?: number;
}
  