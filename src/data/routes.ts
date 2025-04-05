
import { Route } from '../types';

/**
 * Popular helicopter routes with time comparisons
 */
export const POPULAR_ROUTES: Route[] = [
  {
    id: 'jfk-manhattan',
    name: 'JFK Airport to Manhattan',
    origin: {
      name: 'JFK Airport',
      coordinates: [40.6413, -73.7781]
    },
    destination: {
      name: 'Midtown Manhattan',
      coordinates: [40.7580, -73.9855]
    },
    helicopterTime: 8,
    carTime: 65
  },
  {
    id: 'lga-downtown',
    name: 'LaGuardia to Downtown',
    origin: {
      name: 'LaGuardia Airport',
      coordinates: [40.7769, -73.8740]
    },
    destination: {
      name: 'Wall Street',
      coordinates: [40.7074, -74.0104]
    },
    helicopterTime: 6,
    carTime: 55
  },
  {
    id: 'hamptons-nyc',
    name: 'Hamptons to NYC',
    origin: {
      name: 'East Hampton',
      coordinates: [40.9634, -72.1848]
    },
    destination: {
      name: 'Manhattan Heliport',
      coordinates: [40.7010, -74.0096]
    },
    helicopterTime: 35,
    carTime: 180
  },
  {
    id: 'central-jersey',
    name: 'Central Jersey to NYC',
    origin: {
      name: 'Princeton',
      coordinates: [40.3573, -74.6672]
    },
    destination: {
      name: 'Hudson Yards',
      coordinates: [40.7559, -74.0060]
    },
    helicopterTime: 20,
    carTime: 90
  }
];
  