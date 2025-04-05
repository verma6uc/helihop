
export type MembershipTier = 'essentials' | 'plus' | 'executive';

export type TestimonialType = 'video' | 'written' | 'success-story';

export interface Testimonial {
  id: string;
  type: TestimonialType;
  memberName: string;
  memberTitle?: string;
  memberCompany?: string;
  membershipTier: MembershipTier;
  memberAvatar: string;
  content: string;
  videoUrl?: string;
  posterImage?: string;
  beforeAfterMetric?: {
    metric: string;
    before: string;
    after: string;
  };
  useCase?: string;
  testimonialDate: string;
  expanded?: boolean;
}

export interface StatisticItem {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  description?: string;
}
