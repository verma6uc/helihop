
import React from 'react';
import { FaCloudSun, FaRoute, FaClock, FaLocationArrow } from 'react-icons/fa';
import { Feature, Statistic } from './types';

/**
 * Feature data for the Intelligent Routing Showcase section
 */
export const features: Feature[] = [
  {
    id: 'weather-adaptation',
    title: 'Weather Adaptation',
    description: 'Our AI constantly monitors weather conditions along your route, automatically adjusting flight paths to ensure smooth journeys even when conditions change.',
    icon: <FaCloudSun className="w-8 h-8 text-blue-500" />,
    beforeImage: '/assets/images/routing/traditional-weather-route.webp',
    afterImage: '/assets/images/routing/ai-weather-route.webp',
    detailedDescription: 'Traditional routes often require large detours around weather systems. HeliHop\'s intelligent routing analyzes real-time data to find safe corridors through changing conditions, reducing flight time by up to 25% compared to standard rerouting protocols.',
  },
  {
    id: 'traffic-aware',
    title: 'Traffic-Aware Scheduling',
    description: 'Avoid aerial congestion with our traffic-aware system that anticipates busy corridors and adjusts departure times and routes accordingly.',
    icon: <FaClock className="w-8 h-8 text-blue-500" />,
    beforeImage: '/assets/images/routing/traditional-traffic-route.webp',
    afterImage: '/assets/images/routing/ai-traffic-route.webp',
    detailedDescription: 'By analyzing historical and real-time air traffic patterns, our AI can predict congestion up to 2 hours in advance. This allows for proactive route and schedule adjustments that minimize delays while maintaining optimal flight paths.',
  },
  {
    id: 'dynamic-optimization',
    title: 'Dynamic Optimization',
    description: 'Routes are continuously optimized in-flight based on real-time conditions, ensuring the most efficient path from takeoff to touchdown.',
    icon: <FaRoute className="w-8 h-8 text-blue-500" />,
    beforeImage: '/assets/images/routing/traditional-fixed-route.webp',
    afterImage: '/assets/images/routing/ai-dynamic-route.webp',
    detailedDescription: 'Traditional routes remain fixed once set. HeliHop\'s adaptive algorithm makes subtle course corrections during your flight to take advantage of favorable winds, optimize fuel consumption, and adapt to changing conditions—all without you noticing anything but a smoother, faster journey.',
  },
  {
    id: 'multipoint-planning',
    title: 'Multipoint Planning',
    description: 'Need to make multiple stops? Our system calculates the most efficient sequence and routing between multiple destinations.',
    icon: <FaLocationArrow className="w-8 h-8 text-blue-500" />,
    beforeImage: '/assets/images/routing/traditional-multipoint-route.webp',
    afterImage: '/assets/images/routing/ai-multipoint-route.webp',
    detailedDescription: 'While conventional planning typically arranges stops in sequence or by simple distance, our AI evaluates thousands of combinations considering time of day, location-specific conditions, and even seasonal factors to determine the truly optimal multi-stop itinerary.',
  },
];

/**
 * Statistics data for the Intelligent Routing Showcase section
 */
export const statistics: Statistic[] = [
  {
    id: 'time-saved',
    value: 28,
    unit: '%',
    label: 'Average Time Saved',
    description: 'Compared to conventional helicopter routing',
  },
  {
    id: 'weather-adaptation',
    value: 94,
    unit: '%',
    label: 'Weather Adaptation Success',
    description: 'Flights completed despite changing conditions',
  },
  {
    id: 'route-options',
    value: 1500,
    unit: '+',
    label: 'Route Options Analyzed',
    description: 'Per journey to find the optimal path',
  },
  {
    id: 'carbon-reduction',
    value: 22,
    unit: '%',
    label: 'Reduced Carbon Footprint',
    description: 'Through more efficient routing and fuel usage',
  },
];

/**
 * Comparison route data for the central visualization
 */
export const routeComparisonData = {
  title: "See the Difference",
  description: "Drag the slider to compare traditional routing with HeliHop's intelligent system",
  beforeLabel: "Traditional Routing",
  afterLabel: "HeliHop AI Routing",
  beforeImage: "/assets/images/routing/traditional-route-main.webp",
  afterImage: "/assets/images/routing/ai-route-main.webp",
  stats: {
    timeSaved: "23 minutes faster",
    distanceReduced: "18% shorter distance",
    fuelSaved: "12% less fuel consumed"
  }
};
  