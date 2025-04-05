
// Membership tiers enum
export enum MembershipTier {
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold',
  PLATINUM = 'platinum'
}

// Benefit category type
export interface BenefitCategory {
  id: string;
  name: string;
  icon?: React.ReactNode; // Icon component can be passed here
}

// Benefit type definition
export interface Benefit {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  category: string;
  image?: string;
  availableTiers: MembershipTier[];
  highlights?: string[];
}

// Membership tiers data
export const membershipTiers = [
  {
    id: MembershipTier.BRONZE,
    name: 'Bronze',
    color: 'amber-700'
  },
  {
    id: MembershipTier.SILVER,
    name: 'Silver',
    color: 'gray-400'
  },
  {
    id: MembershipTier.GOLD,
    name: 'Gold',
    color: 'yellow-500'
  },
  {
    id: MembershipTier.PLATINUM,
    name: 'Platinum',
    color: 'gray-800'
  }
];

// Benefit categories
export const benefitCategories: BenefitCategory[] = [
  {
    id: 'booking',
    name: 'Booking Privileges'
  },
  {
    id: 'aircraft',
    name: 'Aircraft Selection'
  },
  {
    id: 'concierge',
    name: 'Concierge Services'
  },
  {
    id: 'priority',
    name: 'Priority Access'
  }
];

// Sample benefit data
export const benefitData: Benefit[] = [
  {
    id: 'priority-booking',
    title: 'Priority Booking Windows',
    description: 'Reserve your flights before general availability with our priority booking windows.',
    detailedDescription: 'Access exclusive booking windows that open before general availability. Platinum members can book up to 90 days in advance, Gold up to 60 days, Silver up to 30 days, and Bronze up to 14 days.',
    category: 'booking',
    image: '/images/benefits/priority-booking.jpg',
    availableTiers: [
      MembershipTier.BRONZE,
      MembershipTier.SILVER,
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: 90 days advance booking',
      'Gold: 60 days advance booking',
      'Silver: 30 days advance booking',
      'Bronze: 14 days advance booking'
    ]
  },
  {
    id: 'flexible-cancellation',
    title: 'Flexible Cancellation Policy',
    description: 'Enjoy more flexibility with our tier-based cancellation policies.',
    detailedDescription: 'Change your plans with peace of mind. Higher tier members enjoy increasingly flexible cancellation windows with reduced or waived fees.',
    category: 'booking',
    image: '/images/benefits/flexible-cancellation.jpg',
    availableTiers: [
      MembershipTier.SILVER,
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: Cancel up to 4 hours before departure with no fee',
      'Gold: Cancel up to 12 hours before departure with no fee',
      'Silver: Cancel up to 24 hours before departure with reduced fee'
    ]
  },
  {
    id: 'premium-aircraft',
    title: 'Premium Aircraft Selection',
    description: 'Access to an expanded fleet of premium helicopters for superior comfort.',
    detailedDescription: 'Choose from our collection of high-end helicopters featuring luxurious interiors, enhanced amenities, and superior performance capabilities. Platinum members have access to the entire fleet, while other tiers have graduated access.',
    category: 'aircraft',
    image: '/images/benefits/premium-aircraft.jpg',
    availableTiers: [
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: Full access to ultra-luxury models',
      'Gold: Access to premium comfort models',
      'All models feature noise-cancelling interiors'
    ]
  },
  {
    id: 'custom-routes',
    title: 'Custom Flight Routes',
    description: 'Request personalized flight paths to match your specific needs.',
    detailedDescription: 'Beyond our standard routes, members can request custom flight paths to suit their unique requirements. Our team will work with you to create bespoke travel plans that optimize your journey.',
    category: 'booking',
    image: '/images/benefits/custom-routes.jpg',
    availableTiers: [
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Direct point-to-point travel between custom locations',
      'Custom scenic routes available',
      'Special event aerial access (pending approval)'
    ]
  },
  {
    id: 'personal-concierge',
    title: 'Personal Travel Concierge',
    description: 'Dedicated concierge service to handle all your travel arrangements.',
    detailedDescription: 'Your personal travel concierge is available to coordinate all aspects of your journey, from ground transportation to accommodation and dining reservations. Platinum members receive 24/7 dedicated service.',
    category: 'concierge',
    image: '/images/benefits/personal-concierge.jpg',
    availableTiers: [
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: 24/7 dedicated personal concierge',
      'Gold: Priority concierge service during business hours',
      'Complete travel arrangement assistance'
    ]
  },
  {
    id: 'lounge-access',
    title: 'Premium Lounge Access',
    description: 'Enjoy comfortable waiting areas with premium amenities before your flight.',
    detailedDescription: 'Relax in our exclusive lounges equipped with premium refreshments, comfortable seating, high-speed WiFi, and business facilities. Platinum members have access to private sections with enhanced services.',
    category: 'priority',
    image: '/images/benefits/lounge-access.jpg',
    availableTiers: [
      MembershipTier.SILVER,
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: Private lounge areas',
      'Gold & Silver: Priority lounge access',
      'Complimentary premium refreshments',
      'Business facilities and high-speed WiFi'
    ]
  },
  {
    id: 'expedited-boarding',
    title: 'Expedited Boarding',
    description: 'Skip the line with priority boarding for all your flights.',
    detailedDescription: 'Enjoy streamlined pre-flight procedures with expedited security screening and priority boarding that gets you settled faster and more comfortably.',
    category: 'priority',
    image: '/images/benefits/expedited-boarding.jpg',
    availableTiers: [
      MembershipTier.BRONZE,
      MembershipTier.SILVER,
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: Completely private check-in experience',
      'Gold: Dedicated security lane',
      'Silver & Bronze: Priority boarding'
    ]
  },
  {
    id: 'guest-privileges',
    title: 'Enhanced Guest Privileges',
    description: 'Bring additional guests on your journeys with special member rates.',
    detailedDescription: 'Share the HeliHop experience with friends, family, or colleagues. Higher tier memberships include complimentary guest passes and preferential rates for additional passengers.',
    category: 'booking',
    image: '/images/benefits/guest-privileges.jpg',
    availableTiers: [
      MembershipTier.SILVER,
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: 8 complimentary guest passes annually',
      'Gold: 4 complimentary guest passes annually',
      'Silver: 2 complimentary guest passes annually',
      'Discounted rates for additional guests'
    ]
  },
  {
    id: 'exclusive-events',
    title: 'Exclusive Member Events',
    description: 'Access to special events, experiences, and networking opportunities.',
    detailedDescription: 'Join us for exclusive member-only events including seasonal celebrations, industry networking gatherings, luxury partner experiences, and special aviation showcases.',
    category: 'concierge',
    image: '/images/benefits/exclusive-events.jpg',
    availableTiers: [
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Luxury partner experiences',
      'Seasonal member celebrations',
      'Aviation industry events',
      'Networking opportunities'
    ]
  },
  {
    id: 'luggage-service',
    title: 'Premium Luggage Service',
    description: 'Enhanced baggage allowance and handling for a seamless travel experience.',
    detailedDescription: 'Enjoy increased luggage allowances and our premium handling service that ensures your belongings are transported with the utmost care. Platinum members receive door-to-door luggage delivery service.',
    category: 'concierge',
    image: '/images/benefits/luggage-service.jpg',
    availableTiers: [
      MembershipTier.SILVER,
      MembershipTier.GOLD,
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Platinum: Door-to-door luggage delivery',
      'Gold: Increased weight allowance and priority handling',
      'Silver: Priority luggage handling'
    ]
  },
  {
    id: 'companion-program',
    title: 'Companion Membership Program',
    description: 'Extend select benefits to a designated companion year-round.',
    detailedDescription: 'Nominate a companion who can enjoy select membership benefits throughout the year, even when not traveling with you. Perfect for family members or business partners who frequently travel independently.',
    category: 'booking',
    image: '/images/benefits/companion-program.jpg',
    availableTiers: [
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Designate one companion who receives select benefits',
      'Companion can book independently using your membership privileges',
      'Annual companion designation with option to change once per year'
    ]
  },
  {
    id: 'private-terminal',
    title: 'Private Terminal Access',
    description: 'Bypass the main terminal with exclusive private facilities and expedited security.',
    detailedDescription: 'Enjoy complete privacy and convenience with access to our exclusive private terminals featuring dedicated check-in, security screening, and luxury amenities, all designed to make your journey supremely comfortable and efficient.',
    category: 'priority',
    image: '/images/benefits/private-terminal.jpg',
    availableTiers: [
      MembershipTier.PLATINUM
    ],
    highlights: [
      'Completely private check-in experience',
      'Dedicated security screening',
      'Luxury lounge with premium services',
      'Direct helicopter boarding from private facility'
    ]
  }
];
  