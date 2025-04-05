
import { StatisticItem } from '../types';

/**
 * Statistics data for the HeliHop membership benefits
 */
export const statisticsData: StatisticItem[] = [
  {
    id: 'stat1',
    value: 98.7,
    suffix: '%',
    label: 'Member Satisfaction',
    description: 'Based on quarterly surveys of active members'
  },
  {
    id: 'stat2',
    value: 12,
    label: 'Hours Saved Monthly',
    description: 'Average time saved per member compared to traditional travel'
  },
  {
    id: 'stat3',
    value: 94,
    suffix: '%',
    label: 'Renewal Rate',
    description: 'Members who continue their subscription after the first year'
  },
  {
    id: 'stat4',
    value: 3500,
    prefix: '+',
    label: 'Happy Members',
    description: 'And growing every day across all membership tiers'
  }
];
