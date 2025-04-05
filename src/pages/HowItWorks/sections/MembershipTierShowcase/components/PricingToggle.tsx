
import { motion } from 'framer-motion';

interface PricingToggleProps {
  /** Whether annual pricing is selected */
  isAnnual: boolean;
  
  /** Callback function for when the toggle is clicked */
  onToggle: () => void;
}

/**
 * PricingToggle component allows users to switch between monthly and annual pricing views
 */
const PricingToggle = ({ isAnnual, onToggle }: PricingToggleProps): JSX.Element => {
  return (
    <div className="inline-flex items-center bg-gray-100 p-1 rounded-full">
      <button
        onClick={!isAnnual ? undefined : onToggle}
        className={`relative py-2 px-4 rounded-full font-medium transition-colors duration-200 ${
          !isAnnual ? 'text-white' : 'text-gray-700 hover:text-gray-900'
        }`}
        aria-label="Switch to monthly pricing"
      >
        Monthly
        {!isAnnual && (
          <motion.div
            layoutId="pill"
            className="absolute inset-0 bg-primary rounded-full"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", duration: 0.5 }}
          />
        )}
      </button>
      
      <button
        onClick={isAnnual ? undefined : onToggle}
        className={`relative py-2 px-4 rounded-full font-medium transition-colors duration-200 ${
          isAnnual ? 'text-white' : 'text-gray-700 hover:text-gray-900'
        }`}
        aria-label="Switch to annual pricing"
      >
        Annual
        <div className="ml-1 inline-block">
          <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded-full">Save 15%</span>
        </div>
        
        {isAnnual && (
          <motion.div
            layoutId="pill"
            className="absolute inset-0 bg-primary rounded-full"
            style={{ zIndex: -1 }}
            transition={{ type: "spring", duration: 0.5 }}
          />
        )}
      </button>
    </div>
  );
};

export default PricingToggle;
