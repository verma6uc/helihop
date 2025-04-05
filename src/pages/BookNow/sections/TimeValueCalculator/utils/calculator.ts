
/**
 * Calculator utility functions for the Time-Value Calculator
 */

interface TimeSavingsParams {
  hourlyRate: number;
  groundTime: number; // in minutes
  heliTime: number; // in minutes
  tripFrequency: number; // trips per month
}

interface TimeSavingsResult {
  timeSaved: number; // in minutes per trip
  moneySaved: number; // in dollars per trip
  annualSavings: number; // in dollars per year
}

/**
 * Calculates the time and money savings from using HeliHop vs. ground transport
 * @param params - Parameters for calculation
 * @returns Object containing time saved, money saved per trip, and annual savings
 */
export const calculateTimeSavings = (params: TimeSavingsParams): TimeSavingsResult => {
  const { hourlyRate, groundTime, heliTime, tripFrequency } = params;
  
  // Calculate time saved in minutes per trip
  const timeSaved = groundTime - heliTime;
  
  // Convert hourly rate to per-minute rate
  const minuteRate = hourlyRate / 60;
  
  // Calculate money saved per trip
  const moneySaved = timeSaved * minuteRate;
  
  // Calculate annual savings (monthly frequency * 12 months)
  const annualSavings = moneySaved * tripFrequency * 12;
  
  return {
    timeSaved,
    moneySaved,
    annualSavings
  };
};

/**
 * Formats a number as USD currency
 * @param value - Number to format
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(value);
};
