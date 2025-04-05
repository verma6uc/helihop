
export type MembershipTier = 'essential' | 'premium' | 'elite';

export interface Testimonial {
  author: string;
  quote: string;
  tierName: string;
}

export interface Benefit {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  imageUrl: string;
  tiers: MembershipTier[];
  testimonial?: Testimonial;
  highlights?: string[];
}

export const benefitCategories = [
  {
    id: 'booking',
    name: 'Booking Privileges',
  },
  {
    id: 'aircraft',
    name: 'Aircraft Selection',
  },
  {
    id: 'concierge',
    name: 'Concierge Services',
  },
  {
    id: 'priority',
    name: 'Priority Access',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle Benefits',
  },
];

export const benefits: Benefit[] = [
  {
    id: 'priority-booking',
    title: 'Priority Booking Windows',
    category: 'booking',
    shortDescription: 'Book flights further in advance based on your membership tier.',
    fullDescription: 'Secure your travel plans with confidence. Essential members can book 30 days in advance, Premium members enjoy a 60-day booking window, and Elite members receive the privilege of booking up to 90 days ahead, ensuring you never miss out on critical travel dates.',
    imageUrl: 'https://images.unsplash.com/photo-1569098644584-210bcd375b59?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tiers: ['essential', 'premium', 'elite'],
    highlights: [
      'Essential: 30-day advance booking',
      'Premium: 60-day advance booking',
      'Elite: 90-day advance booking'
    ],
    testimonial: {
      author: 'Michael R.',
      quote: 'The 90-day booking window has been a game-changer for planning my quarterly business trips. I always get the slots I need.',
      tierName: 'Elite'
    }
  },
  {
    id: 'flexible-cancellation',
    title: 'Flexible Cancellation Policy',
    category: 'booking',
    shortDescription: 'Change your plans with minimal or no penalties.',
    fullDescription: 'Life is unpredictable. That\'s why HeliHop offers increasingly generous cancellation terms based on your membership level. Elite members can cancel or reschedule up to 12 hours before departure with no penalty, Premium members up to 24 hours prior, and Essential members up to 48 hours ahead.',
    imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tiers: ['premium', 'elite'],
    highlights: [
      'Premium: Free cancellation up to 24 hours before departure',
      'Elite: Free cancellation up to 12 hours before departure',
      'Full credit toward future flights for unavoidable last-minute changes'
    ]
  },
  {
    id: 'luxury-helicopters',
    title: 'Luxury Helicopter Fleet Access',
    category: 'aircraft',
    shortDescription: 'Fly in increasingly premium helicopters based on your tier.',
    fullDescription: 'Experience aviation luxury at its finest with our meticulously maintained fleet. Essential members access our comfortable standard helicopters, Premium members enjoy our enhanced comfort fleet with leather interiors and upgraded amenities, while Elite members experience our ultra-luxury helicopters featuring custom interiors, noise-canceling technology, and premium refreshments.',
    imageUrl: 'https://images.unsplash.com/photo-1540962351504-03099e0a754b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    tiers: ['essential', 'premium', 'elite'],
    testimonial: {
      author: 'Sarah L.',
      quote: 'The Elite fleet helicopters are extraordinary - the noise-canceling technology makes conversations easy, and the custom leather seating is more comfortable than my first-class flights.',
      tierName: 'Elite'
    }
  },
  {
    id: 'guaranteed-model',
    title: 'Guaranteed Aircraft Model',
    category: 'aircraft',
    shortDescription: 'Select your preferred helicopter model for each journey.',
    fullDescription: 'With Elite membership, you\'re guaranteed your choice of specific helicopter models for each trip, subject to availability. Premium members can request preferred models with priority consideration, while all members benefit from our commitment to providing the most suitable aircraft for your journey needs.',
    imageUrl: 'https://images.unsplash.com/photo-1565623833408-d77e39b88af6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    tiers: ['premium', 'elite'],
    highlights: [
      'Elite: Guaranteed choice of helicopter model',
      'Premium: Priority consideration for model requests',
      'Detailed aircraft specifications available when booking'
    ]
  },
  {
    id: 'personal-concierge',
    title: 'Personal Travel Concierge',
    category: 'concierge',
    shortDescription: 'Dedicated assistance for all your travel needs.',
    fullDescription: 'Navigate your journey with ease using our personalized concierge service. Essential members receive standard booking assistance, Premium members are assigned a dedicated booking team, and Elite members enjoy a personal travel concierge who handles everything from special requests to coordinating ground transportation and accommodations.',
    imageUrl: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    tiers: ['premium', 'elite'],
    testimonial: {
      author: 'David T.',
      quote: 'My concierge anticipated needs I didn\'t even know I had - from arranging a last-minute dinner reservation to having my preferred beverages stocked on board.',
      tierName: 'Premium'
    }
  },
  {
    id: 'door-to-door',
    title: 'Door-to-Door Service',
    category: 'concierge',
    shortDescription: 'Seamless ground transportation to and from heliports.',
    fullDescription: 'Experience true door-to-door luxury. Elite members receive complimentary luxury car service between any location and our heliports within a 50-mile radius. Premium members enjoy this service at preferred rates, while Essential members can add this service for an additional fee, ensuring a completely seamless journey from start to finish.',
    imageUrl: 'https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    tiers: ['elite'],
    highlights: [
      'Elite: Complimentary luxury car service (50-mile radius)',
      'Professional drivers with intimate knowledge of all heliport locations',
      'Real-time coordination with flight schedules for zero wait times'
    ]
  },
  {
    id: 'peak-time',
    title: 'Peak-Time Availability Guarantee',
    category: 'priority',
    shortDescription: 'Assured flights during high-demand periods.',
    fullDescription: 'When demand is highest, our priority system ensures you\'re never left without options. Elite members receive guaranteed availability even during peak periods with as little as 24 hours notice. Premium members get priority on waitlists, while Essential members benefit from our expanded fleet management during busy times.',
    imageUrl: 'https://images.unsplash.com/photo-1605548109944-9040d0973e85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tiers: ['premium', 'elite'],
    testimonial: {
      author: 'Jennifer K.',
      quote: 'Securing a helicopter during the holiday rush would normally be impossible, but my Elite status got me home for Christmas Eve despite booking only two days ahead.',
      tierName: 'Elite'
    }
  },
  {
    id: 'expedited-boarding',
    title: 'Expedited Boarding Process',
    category: 'priority',
    shortDescription: 'Minimal wait times with streamlined pre-flight procedures.',
    fullDescription: 'Your time is valuable. Elite members enjoy our most expedited experience with private lounges and direct helicopter boarding with minimal waiting. Premium members receive expedited check-in and priority boarding, while all members benefit from our efficiency-focused procedures that minimize ground time.',
    imageUrl: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tiers: ['essential', 'premium', 'elite'],
    highlights: [
      'Elite: Private lounges and direct boarding',
      'Premium: Expedited check-in and priority boarding',
      'Essential: Streamlined regular boarding procedures'
    ]
  },
  {
    id: 'exclusive-events',
    title: 'Exclusive Member Events',
    category: 'lifestyle',
    shortDescription: 'Access to invitation-only experiences and networking.',
    fullDescription: 'Join an exclusive community of discerning travelers with access to HeliHop\'s curated events. Elite members receive invitations to all HeliHop events including luxury partner experiences and aviation showcases. Premium members access select seasonal events, while Essential members can participate in our annual member gatherings.',
    imageUrl: 'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tiers: ['premium', 'elite'],
    testimonial: {
      author: 'Robert M.',
      quote: 'The private wine tasting event HeliHop arranged last summer introduced me to business connections that have been invaluable, not to mention some exceptional vintages.',
      tierName: 'Premium'
    }
  },
  {
    id: 'companion-privileges',
    title: 'Companion Privileges',
    category: 'lifestyle',
    shortDescription: 'Share your membership benefits with friends and family.',
    fullDescription: 'Extend the HeliHop experience to those important to you. Elite members can add up to 3 authorized companions who can book and travel independently under your membership. Premium members can add 1 companion, while all members can purchase guest passes for accompanying travelers at preferred rates.',
    imageUrl: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    tiers: ['premium', 'elite'],
    highlights: [
      'Elite: Add up to 3 authorized companions',
      'Premium: Add 1 authorized companion',
      'All tiers: Purchase guest passes at member rates'
    ]
  }
];
