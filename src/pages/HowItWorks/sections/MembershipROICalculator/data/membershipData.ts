
/**
 * Interface for membership tier data
 */
export interface MembershipTier {
  id: string;
  name: string;
  annualFee: number;
  discountPercentage: number;
  features: string[];
}

/**
 * Interface for route option data
 */
export interface RouteOption {
  id: string;
  name: string;
  basePrice: number;
  distance: number;
  duration: number;
}

/**
 * Membership tier data
 */
export const membershipTiers: MembershipTier[] = [
  {
    id: 'bronze',
    name: 'Bronze',
    annualFee: 2500,
    discountPercentage: 10,
    features: [
      'Basic priority booking',
      'Standard helicopter options',
      '10% discount on all flights',
      'Member-only events'
    ]
  },
  {
    id: 'silver',
    name: 'Silver',
    annualFee: 5000,
    discountPercentage: 20,
    features: [
      'Enhanced priority booking',
      'Premium helicopter options',
      '20% discount on all flights',
      'VIP member events',
      'Flexible rescheduling'
    ]
  },
  {
    id: 'gold',
    name: 'Gold',
    annualFee: 10000,
    discountPercentage: 30,
    features: [
      'Highest priority booking',
      'Access to luxury helicopter fleet',
      '30% discount on all flights',
      'Exclusive member events',
      '24/7 concierge service',
      'Free companion passes'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum',
    annualFee: 25000,
    discountPercentage: 50,
    features: [
      'Guaranteed availability',
      'Access to entire helicopter fleet',
      '50% discount on all flights',
      'Private events and experiences',
      'Dedicated personal concierge',
      'Multiple companion passes',
      'Custom route options'
    ]
  }
];

/**
 * Route options data
 */
export const routeOptions: RouteOption[] = [
  {
    id: 'nyc-hamptons',
    name: 'NYC to Hamptons',
    basePrice: 1950,
    distance: 80,
    duration: 40
  },
  {
    id: 'nyc-montauk',
    name: 'NYC to Montauk',
    basePrice: 2450,
    distance: 110,
    duration: 55
  },
  {
    id: 'nyc-atlantic-city',
    name: 'NYC to Atlantic City',
    basePrice: 2100,
    distance: 95,
    duration: 45
  },
  {
    id: 'lax-palm-springs',
    name: 'LAX to Palm Springs',
    basePrice: 1800,
    distance: 75,
    duration: 35
  },
  {
    id: 'miami-key-west',
    name: 'Miami to Key West',
    basePrice: 2300,
    distance: 130,
    duration: 60
  },
  {
    id: 'sf-napa',
    name: 'San Francisco to Napa',
    basePrice: 1600,
    distance: 50,
    duration: 25
  }
];
