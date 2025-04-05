
/**
 * Type definitions for the IntelligentRoutingShowcase components
 */

/**
 * Represents a feature of the routing system with comparison data
 */
export interface RoutingFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode | string;
  image: string;
  imageAlt: string;
  traditionalTime: string;
  optimizedTime: string;
  timeSaved: string;
}

/**
 * Represents a statistical data point about route optimization
 */
export interface RouteStatistic {
  id: string;
  value: number;
  unit?: string;
  format: 'percent' | 'time' | 'number';
  label: string;
  description: string;
}
  