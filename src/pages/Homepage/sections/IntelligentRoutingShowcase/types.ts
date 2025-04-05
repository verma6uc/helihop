
import { ReactNode } from 'react';

/**
 * Interface for feature data
 */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  beforeImage: string;
  afterImage: string;
  detailedDescription: string;
}

/**
 * Interface for statistic data
 */
export interface Statistic {
  id: string;
  value: number;
  unit: string;
  label: string;
  description: string;
}

/**
 * Props for the FeatureCard component
 */
export interface FeatureCardProps {
  feature: Feature;
  index: number;
  inView: boolean;
}

/**
 * Props for the StatisticCard component
 */
export interface StatisticCardProps {
  statistic: Statistic;
  index: number;
  inView: boolean;
}

/**
 * Props for the RouteComparison component
 */
export interface RouteComparisonProps {
  inView: boolean;
}
  