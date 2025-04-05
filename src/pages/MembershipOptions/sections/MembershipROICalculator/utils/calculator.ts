
/**
 * Calculator utility functions for the Membership ROI Calculator
 */

import { routes, membershipTiers } from '../data/membershipData';

export interface CalculationInput {
  frequency: number;
  routeId: string;
  passengers: number;
}

export interface CalculationResult {
  noMembershipCost: number;
  flightCostsPerTier: Record<string, number>;
  totalCostsPerTier: Record<string, number>;
  savingsPerTier: Record<string, number>;
}

/**
 * Calculates the ROI (return on investment) for different membership tiers
 * based on the user's expected travel patterns.
 * 
 * @param input - The calculation input parameters
 * @returns The calculation results showing costs and savings for each tier
 */
export function calculateMembershipROI(input: CalculationInput): CalculationResult {
  // Find the selected route
  const selectedRoute = routes.find(route => route.id === input.routeId);
  if (!selectedRoute) {
    throw new Error(`Route with ID ${input.routeId} not found`);
  }

  // Calculate cost without membership
  const baseFlightCost = selectedRoute.basePrice + (selectedRoute.perPassengerPrice * input.passengers);
  const noMembershipCost = baseFlightCost * input.frequency;

  // Calculate costs and savings for each membership tier
  const flightCostsPerTier: Record<string, number> = {};
  const totalCostsPerTier: Record<string, number> = {};
  const savingsPerTier: Record<string, number> = {};

  membershipTiers.forEach(tier => {
    // Calculate flight costs with membership discount
    const discountedFlightCost = baseFlightCost * (1 - tier.discountPercentage / 100);
    const annualFlightCosts = discountedFlightCost * Math.max(0, input.frequency - tier.includedFlights);
    
    // Add costs of included flights if they have a minimum cost
    const includedFlightCosts = Math.min(input.frequency, tier.includedFlights) * tier.includedFlightMinimumCost;
    
    // Total flight costs
    flightCostsPerTier[tier.name] = annualFlightCosts + includedFlightCosts;
    
    // Total costs (membership fee + flight costs)
    totalCostsPerTier[tier.name] = tier.annualFee + flightCostsPerTier[tier.name];
    
    // Calculate savings compared to no membership
    savingsPerTier[tier.name] = noMembershipCost - totalCostsPerTier[tier.name];
  });

  return {
    noMembershipCost,
    flightCostsPerTier,
    totalCostsPerTier,
    savingsPerTier,
  };
}
  