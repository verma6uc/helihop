
/**
 * Interface for tier details
 */
interface TierDetails {
  id: string;
  name: string;
  annualFee: number;
  discountPercentage: number;
}

/**
 * Interface for ROI calculation input parameters
 */
interface ROICalculationParams {
  tierDetails: TierDetails;
  frequency: number;
  routePrice: number;
  passengerCount: number;
}

/**
 * Interface for ROI calculation results
 */
interface ROICalculationResult {
  annualCost: number;
  payPerTripCost: number;
  savings: number;
}

/**
 * Interface for tier comparison data
 */
interface TierComparisonData {
  tierName: string;
  annualCost: number;
  payPerTripCost: number;
  savings: number;
  isRecommended?: boolean;
}

/**
 * Calculates ROI for a specific membership tier based on user inputs
 * 
 * @param {ROICalculationParams} params - The calculation parameters
 * @returns {ROICalculationResult} The calculation results
 */
export const calculateROI = (params: ROICalculationParams): ROICalculationResult => {
  const { tierDetails, frequency, routePrice, passengerCount } = params;
  
  // Calculate base cost (pay-per-trip) for standard users
  const standardAnnualCost = frequency * routePrice * passengerCount;
  
  // Calculate discounted cost for membership holders
  const discountedTripCost = routePrice * (1 - tierDetails.discountPercentage / 100);
  const discountedAnnualTripCost = frequency * discountedTripCost * passengerCount;
  
  // Total cost with membership (annual fee + discounted trips)
  const totalAnnualCostWithMembership = tierDetails.annualFee + discountedAnnualTripCost;
  
  // Calculate savings
  const savings = standardAnnualCost - totalAnnualCostWithMembership;
  
  // Calculate per-trip cost
  const perTripCost = totalAnnualCostWithMembership / frequency;
  
  return {
    annualCost: totalAnnualCostWithMembership,
    payPerTripCost: perTripCost,
    savings: savings
  };
};

/**
 * Determines the best tier based on savings
 * 
 * @param {TierComparisonData[]} tierData - Array of tier calculation results
 * @returns {string} The name of the recommended tier
 */
export const determineBestTier = (tierData: TierComparisonData[]): string => {
  if (!tierData.length) return '';
  
  // Find tier with highest savings
  const bestTier = tierData.reduce((prev, current) => {
    // Only consider tiers with positive savings
    if (current.savings <= 0) return prev;
    return current.savings > prev.savings ? current : prev;
  }, tierData[0]);
  
  // If no tier has positive savings, recommend the cheapest tier
  if (bestTier.savings <= 0) {
    return tierData.reduce((prev, current) => {
      return current.annualCost < prev.annualCost ? current : prev;
    }, tierData[0]).tierName;
  }
  
  return bestTier.tierName;
};
