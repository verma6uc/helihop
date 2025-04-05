
import { motion } from 'framer-motion';
import { MembershipTier } from '../types';

interface TierCardProps {
  /** Tier data to display */
  tier: MembershipTier;
  
  /** Whether to show annual or monthly pricing */
  isAnnual: boolean;
}

/**
 * TierCard component displays information about a membership tier
 * including name, price, and features.
 */
const TierCard = ({ tier, isAnnual }: TierCardProps): JSX.Element => {
  const { 
    id, 
    name, 
    description, 
    monthlyPrice, 
    annualPrice, 
    features, 
    recommended, 
    ctaText, 
    ctaLink 
  } = tier;

  // Determine which price to display based on the pricing period
  const displayPrice = isAnnual ? annualPrice : monthlyPrice;
  const pricingPeriod = isAnnual ? '/year' : '/month';
  const savingsPercentage = 15; // ~15% savings for annual plans

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`
        h-full rounded-xl shadow-lg overflow-hidden border-2 transition-all duration-300
        ${recommended ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white'}
      `}
    >
      {/* Recommended badge */}
      {recommended && (
        <div className="bg-primary text-white text-center py-2 px-4 font-medium text-sm">
          RECOMMENDED
        </div>
      )}
      
      <div className="p-6">
        {/* Tier name and description */}
        <h3 className="text-xl font-bold font-montserrat text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 font-lato mb-5 h-12">{description}</p>
        
        {/* Pricing */}
        <div className="mb-6">
          {id === 'pay-per-flight' ? (
            <div className="font-montserrat">
              <span className="text-3xl font-bold text-gray-900">No Fee</span>
              <p className="text-gray-600 mt-1 text-sm">Pay only when you fly</p>
            </div>
          ) : (
            <div className="font-montserrat">
              <div className="flex items-end">
                <span className="text-3xl font-bold text-gray-900">${displayPrice}</span>
                <span className="text-gray-600 ml-1">{pricingPeriod}</span>
              </div>
              {isAnnual && (
                <p className="text-green-600 mt-1 text-sm">Save {savingsPercentage}%</p>
              )}
            </div>
          )}
        </div>
        
        {/* Features list */}
        <ul className="mb-8 space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <svg className="h-5 w-5 text-primary mt-0.5 mr-2 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-gray-700 font-lato">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* Call-to-action button */}
        <div className="mt-auto">
          <motion.a
            href={ctaLink}
            whileTap={{ scale: 0.95 }}
            className={`
              block w-full py-3 px-4 text-center rounded-md font-medium transition-colors
              ${recommended 
                ? 'bg-primary text-white hover:bg-primary-dark' 
                : 'bg-white text-primary border-2 border-primary hover:bg-blue-50'}
            `}
          >
            {ctaText}
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default TierCard;
