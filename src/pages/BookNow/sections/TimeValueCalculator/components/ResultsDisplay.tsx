
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import { formatCurrency } from '../utils/calculator';

interface ResultsDisplayProps {
  results: {
    timeSaved: number;
    moneySaved: number;
    annualSavings: number;
  };
  isVisible: boolean;
}

/**
 * ResultsDisplay Component
 * Displays the calculated time and money savings with interactive visualizations
 */
const ResultsDisplay = ({ results, isVisible }: ResultsDisplayProps) => {
  const [animatedTimeSaved, setAnimatedTimeSaved] = useState(0);
  const [animatedMoneySaved, setAnimatedMoneySaved] = useState(0);
  const [animatedAnnualSavings, setAnimatedAnnualSavings] = useState(0);
  
  useEffect(() => {
    if (isVisible) {
      const duration = 1000; // Animation duration in ms
      const frames = 60; // Number of frames in animation
      const timeIncrement = results.timeSaved / frames;
      const moneyIncrement = results.moneySaved / frames;
      const annualIncrement = results.annualSavings / frames;
      let frame = 0;
      
      const animate = () => {
        if (frame < frames) {
          setAnimatedTimeSaved(prev => Math.min(prev + timeIncrement, results.timeSaved));
          setAnimatedMoneySaved(prev => Math.min(prev + moneyIncrement, results.moneySaved));
          setAnimatedAnnualSavings(prev => Math.min(prev + annualIncrement, results.annualSavings));
          frame++;
          setTimeout(animate, duration / frames);
        } else {
          setAnimatedTimeSaved(results.timeSaved);
          setAnimatedMoneySaved(results.moneySaved);
          setAnimatedAnnualSavings(results.annualSavings);
        }
      };
      
      animate();
    }
  }, [results, isVisible]);
  
  // Chart data for time comparison
  const timeComparisonData = {
    labels: ['Ground Transport', 'HeliHop'],
    datasets: [
      {
        label: 'Travel Time (min)',
        data: [results.timeSaved + 15, 15], // Assuming 15 min helicopter time on average
        backgroundColor: ['#777777', '#0077B6'],
        borderColor: ['#666666', '#006699'],
        borderWidth: 1,
      },
    ],
  };
  
  // Chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `${context.raw} minutes`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Minutes',
        },
      },
    },
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      <h3 className="text-xl md:text-2xl font-montserrat font-semibold mb-6 text-gray-800">Your Time Value Results</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {/* Time Saved Per Trip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gray-50 p-4 rounded-lg"
        >
          <h4 className="text-sm text-gray-600 font-lato mb-1">Time Saved Per Trip</h4>
          <p className="text-2xl md:text-3xl font-montserrat font-bold text-primary">
            {Math.round(animatedTimeSaved)} <span className="text-base font-normal">mins</span>
          </p>
        </motion.div>
        
        {/* Money Saved Per Trip */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gray-50 p-4 rounded-lg"
        >
          <h4 className="text-sm text-gray-600 font-lato mb-1">Value Saved Per Trip</h4>
          <p className="text-2xl md:text-3xl font-montserrat font-bold text-accent">
            {formatCurrency(animatedMoneySaved)}
          </p>
        </motion.div>
        
        {/* Annual Savings */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gray-50 p-4 rounded-lg"
        >
          <h4 className="text-sm text-gray-600 font-lato mb-1">Annual Value Saved</h4>
          <p className="text-2xl md:text-3xl font-montserrat font-bold text-secondary">
            {formatCurrency(animatedAnnualSavings)}
          </p>
        </motion.div>
      </div>
      
      {/* Time Comparison Chart */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6"
      >
        <h4 className="text-lg font-montserrat font-semibold mb-3 text-gray-800">Time Comparison</h4>
        <div className="h-64 md:h-80" aria-label="Chart comparing ground transport time to HeliHop transport time">
          <Bar data={timeComparisonData} options={chartOptions} />
        </div>
      </motion.div>
      
      {/* ROI Summary Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="bg-gray-50 p-5 rounded-lg border-l-4 border-accent"
      >
        <h4 className="text-lg font-montserrat font-semibold mb-2 text-gray-800">Your Return on Investment</h4>
        <p className="text-gray-700 font-lato">
          Based on your hourly value of <span className="font-semibold">{formatCurrency(results.moneySaved / (results.timeSaved / 60))}</span>, 
          you save <span className="font-semibold text-accent">{formatCurrency(results.moneySaved)}</span> worth of time per trip with HeliHop.
          That's <span className="font-semibold text-secondary">{formatCurrency(results.annualSavings)}</span> annually that you could reinvest in your business or personal life.
        </p>
      </motion.div>
      
      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <button 
          type="button" 
          className="px-8 py-3 bg-primary text-white font-montserrat font-semibold rounded-md shadow-md hover:bg-primary/90 transition duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          aria-label="Continue to booking"
        >
          Book Your Time-Saving Flight
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ResultsDisplay;
