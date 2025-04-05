
/**
 * Data for the Membership ROI Calculator
 */

/**
 * Available flight routes with pricing information
 */
export const routes = [
  {
    id: 'nyc-hamptons',
    name: 'NYC to Hamptons',
    distance: 95,
    basePrice: 1950,
    perPassengerPrice: 250,
  },
  {
    id: 'nyc-atlantic-city',
    name: 'NYC to Atlantic City',
    distance: 115,
    basePrice: 2150,
    perPassengerPrice: 275,
  },
  {
    id: 'la-palm-springs',
    name: 'LA to Palm Springs',
    distance: 110,
    basePrice: 2050,
    perPassengerPrice: 265,
  },
  {
    id: 'sf-napa',
    name: 'San Francisco to Napa',
    distance: 50,
    basePrice: 1500,
    perPassengerPrice: 200,
  },
  {
    id: 'miami-keys',
    name: 'Miami to Keys',
    distance: 160,
    basePrice: 2350,
    perPassengerPrice: 300,
  },
  {
    id: 'chicago-milwaukee',
    name: 'Chicago to Milwaukee',
    distance: 85,
    basePrice: 1800,
    perPassengerPrice: 225,
  },
  {
    id: 'dallas-austin',
    name: 'Dallas to Austin',
    distance: 190,
    basePrice: 2600,
    perPassengerPrice: 325,
  },
  {
    id: 'seattle-vancouver',
    name: 'Seattle to Vancouver',
    distance: 120,
    basePrice: 2200,
    perPassengerPrice: 280,
  },
];

/**
 * Membership tier information with pricing and benefits
 */
export const membershipTiers = [
  {
    name: 'Basic',
    annualFee: 5000,
    discountPercentage: 10,
    includedFlights: 0,
    includedFlightMinimumCost: 0,
  },
  {
    name: 'Premium',
    annualFee: 15000,
    discountPercentage: 20,
    includedFlights: 2,
    includedFlightMinimumCost: 250,
  },
  {
    name: 'Executive',
    annualFee: 30000,
    discountPercentage: 30,
    includedFlights: 5,
    includedFlightMinimumCost: 200,
  },
  {
    name: 'Elite',
    annualFee: 50000,
    discountPercentage: 40,
    includedFlights: 10,
    includedFlightMinimumCost: 150,
  },
];
  