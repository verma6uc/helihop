
/**
 * Calculates the time saved in minutes by using helicopter transportation
 * compared to ground transportation for a specific destination.
 * 
 * @param destination - The selected destination
 * @returns The time saved in minutes
 */
export const calculateTimeSavings = (destination: string): number => {
  // These values represent the minutes saved for each destination
  // In a real app, these might come from an API or more complex calculation
  const timeMap: Record<string, number> = {
    'manhattan': 45,
    'hamptons': 90,
    'philly': 75,
    'boston': 120,
    'dc': 150,
    // Default value if destination not found
    'default': 60
  };

  return timeMap[destination] || timeMap.default;
};

/**
 * Calculates the monetary value of time saved based on the user's hourly rate
 * 
 * @param timeSavedInMinutes - The time saved in minutes
 * @param hourlyRate - The user's hourly rate in dollars
 * @returns The monetary value of the saved time
 */
export const calculateMoneySavings = (timeSavedInMinutes: number, hourlyRate: number): number => {
  // Convert minutes to hours and multiply by hourly rate
  return (timeSavedInMinutes / 60) * hourlyRate;
};

/**
 * Calculates the ROI factor based on service price and value of time saved
 * 
 * @param serviceCost - The cost of the helicopter service
 * @param timeSavingsValue - The monetary value of time saved
 * @returns The ROI factor (value divided by cost)
 */
export const calculateROI = (serviceCost: number, timeSavingsValue: number): number => {
  if (serviceCost <= 0) return 0;
  return timeSavingsValue / serviceCost;
};

/**
 * Calculates the frequency multiplier based on trip frequency
 * 
 * @param frequency - How often the trip is made (daily, weekly, monthly)
 * @returns The annual multiplier
 */
export const getFrequencyMultiplier = (frequency: string): number => {
  switch (frequency) {
    case 'daily':
      // Assuming 5 business days per week, 52 weeks
      return 5 * 52;
    case 'weekly':
      return 52;
    case 'monthly':
      return 12;
    default:
      return 1;
  }
};
