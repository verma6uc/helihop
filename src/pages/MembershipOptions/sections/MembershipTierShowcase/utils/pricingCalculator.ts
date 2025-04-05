
/**
 * Calculate the savings percentage between monthly and annual pricing
 * @param monthly The monthly price
 * @param annual The annual price
 * @returns The percentage savings rounded to the nearest integer
 */
export const calculateSavings = (monthly: number, annual: number): number => {
  if (monthly === 0 || annual === 0) return 0;
  const monthlyCost = monthly * 12;
  const savings = ((monthlyCost - annual) / monthlyCost) * 100;
  return Math.round(savings);
};

/**
 * Format the price for display
 * @param price The price to format
 * @param isAnnual Whether the price is annual
 * @returns Formatted price string (e.g., "Free" or "$299")
 */
export const formatPrice = (price: number, isAnnual: boolean): string => {
  if (price === 0) return 'Free';
  return `$${price}`;
};

/**
 * Get pricing subtitle based on the tier and pricing type
 * @param price The price
 * @param isAnnual Whether the price is annual
 * @returns The subtitle text (e.g., "per month", "per year", "Pay only when you fly")
 */
export const getPricingSubtitle = (price: number, isAnnual: boolean): string => {
  if (price === 0) return 'Pay only when you fly';
  return isAnnual ? 'per year' : 'per month';
};
  