
import { RoutingFeature, RouteStatistic } from './types';

/**
 * Data for routing features
 */
export const routingFeatures: RoutingFeature[] = [
  {
    id: 'weather-adaptation',
    title: 'Weather Adaptation',
    description: 'Our AI continuously monitors meteorological conditions and instantly adapts routes to avoid turbulence, severe weather, and visibility issues.',
    icon: '🌦️',
    image: '/images/weather-routing.jpg',
    imageAlt: 'Visualization showing how HeliHop routes adapt to weather patterns',
    traditionalTime: '1h 35m',
    optimizedTime: '58m',
    timeSaved: '37m'
  },
  {
    id: 'traffic-aware',
    title: 'Traffic-Aware Scheduling',
    description: 'Unlike standard charters, our system analyzes air traffic patterns and automatically adjusts departure times to minimize ground and air delays.',
    icon: '🚦',
    image: '/images/traffic-routing.jpg',
    imageAlt: 'Visualization of air traffic optimization',
    traditionalTime: '1h 25m',
    optimizedTime: '55m',
    timeSaved: '30m'
  },
  {
    id: 'dynamic-optimization',
    title: 'Dynamic Route Optimization',
    description: 'HeliHop\'s AI continuously recalculates optimal paths in real-time, accounting for changing conditions and finding the most efficient flight corridor.',
    icon: '⚡',
    image: '/images/dynamic-routing.jpg',
    imageAlt: 'Visualization of dynamic route optimization process',
    traditionalTime: '1h 50m',
    optimizedTime: '1h 05m',
    timeSaved: '45m'
  },
  {
    id: 'multipoint-planning',
    title: 'Multipoint Journey Planning',
    description: 'For trips with multiple stops, our system calculates the most efficient sequence and routing to minimize total flight time and maximize efficiency.',
    icon: '📍',
    image: '/images/multipoint-routing.jpg',
    imageAlt: 'Visualization of multipoint journey optimization',
    traditionalTime: '2h 45m',
    optimizedTime: '1h 50m',
    timeSaved: '55m'
  }
];

/**
 * Data for route statistics
 */
export const routeStatistics: RouteStatistic[] = [
  {
    id: 'time-saved',
    value: 42,
    format: 'percent',
    label: 'Average Time Saved',
    description: 'Compared to traditional helicopter routing'
  },
  {
    id: 'weather-reroutes',
    value: 98,
    format: 'percent',
    label: 'Weather Adaptation',
    description: 'Success rate in adverse conditions'
  },
  {
    id: 'nyc-hamptons',
    value: 45,
    unit: 'min',
    format: 'time',
    label: 'NYC to Hamptons',
    description: 'Average time saved on popular route'
  },
  {
    id: 'efficiency',
    value: 35,
    format: 'percent',
    label: 'Fuel Efficiency',
    description: 'Average improvement vs standard routes'
  }
];
  