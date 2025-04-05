
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { Statistic } from './types';

interface StatisticsDisplayProps {
  statistics: Statistic[];
}

/**
 * StatisticsDisplay component shows animated statistics about member satisfaction
 * Uses CountUp for animated number display
 */
const StatisticsDisplay = ({ statistics }: StatisticsDisplayProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6 md:p-8 shadow-md"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {statistics.map((stat, index) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="mb-2">
              <span className="inline-block p-3 rounded-full bg-white shadow-sm">
                <span className="text-primary" aria-hidden="true">
                  {stat.icon}
                </span>
              </span>
            </div>
            <div className="font-bold text-4xl text-gray-900 font-montserrat flex justify-center items-end">
              <CountUp 
                end={stat.value} 
                duration={2.5}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
                decimal="."
                enableScrollSpy
                scrollSpyDelay={200}
              />
              {stat.valueAddition && (
                <span className="text-lg text-primary ml-1">{stat.valueAddition}</span>
              )}
            </div>
            <p className="mt-2 text-gray-600 font-lato">{stat.label}</p>
            {stat.subtext && (
              <p className="text-sm text-gray-500 mt-1 italic">{stat.subtext}</p>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default StatisticsDisplay;
  