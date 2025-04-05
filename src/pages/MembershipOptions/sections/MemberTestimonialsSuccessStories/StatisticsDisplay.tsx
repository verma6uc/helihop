
import React from 'react';
import CountUp from 'react-countup';
import { statisticsData } from './data/statisticsData';

/**
 * StatisticsDisplay component presents key metrics about HeliHop membership
 * Uses react-countup for animated number counting
 */
export const StatisticsDisplay: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
      {statisticsData.map((stat) => (
        <div 
          key={stat.id} 
          className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border-t-4 border-blue-600"
        >
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 flex items-baseline">
              {stat.prefix && <span>{stat.prefix}</span>}
              <CountUp 
                end={stat.value} 
                duration={2.5} 
                separator="," 
                decimal="."
                decimals={stat.value % 1 === 0 ? 0 : 1}
              />
              {stat.suffix && <span className="ml-1">{stat.suffix}</span>}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-1">{stat.label}</h3>
            {stat.description && (
              <p className="text-sm text-gray-600">{stat.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
