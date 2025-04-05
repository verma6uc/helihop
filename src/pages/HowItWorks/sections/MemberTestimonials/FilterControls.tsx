
import { motion } from 'framer-motion';
import { TestimonialTier, UseCase } from './types';

interface FilterControlsProps {
  selectedTier: TestimonialTier | 'all';
  setSelectedTier: (tier: TestimonialTier | 'all') => void;
  selectedUseCase: UseCase | 'all';
  setSelectedUseCase: (useCase: UseCase | 'all') => void;
}

/**
 * FilterControls component for filtering testimonials by membership tier and use case
 */
const FilterControls = ({
  selectedTier,
  setSelectedTier,
  selectedUseCase,
  setSelectedUseCase
}: FilterControlsProps) => {
  // Define the available tiers and use cases for filtering
  const tiers: (TestimonialTier | 'all')[] = ['all', 'platinum', 'gold', 'silver', 'standard'];
  const useCases: (UseCase | 'all')[] = ['all', 'business', 'leisure', 'family', 'emergency'];
  
  // Button animation variants
  const buttonVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    tap: { scale: 0.95 }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="flex flex-col md:flex-row justify-between">
        {/* Filter by tier */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold text-gray-700 mb-3 font-montserrat">Filter by Membership Tier</h3>
          <div className="flex flex-wrap gap-2">
            {tiers.map((tier, index) => (
              <motion.button
                key={tier}
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 }}
                whileTap="tap"
                onClick={() => setSelectedTier(tier)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedTier === tier
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                aria-pressed={selectedTier === tier}
              >
                {tier === 'all' ? 'All Tiers' : (
                  <>
                    {tier === 'platinum' && (
                      <span className="inline-block w-2 h-2 rounded-full bg-purple-500 mr-1.5" aria-hidden="true"></span>
                    )}
                    {tier === 'gold' && (
                      <span className="inline-block w-2 h-2 rounded-full bg-amber-400 mr-1.5" aria-hidden="true"></span>
                    )}
                    {tier === 'silver' && (
                      <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-1.5" aria-hidden="true"></span>
                    )}
                    {tier === 'standard' && (
                      <span className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-1.5" aria-hidden="true"></span>
                    )}
                    {tier.charAt(0).toUpperCase() + tier.slice(1)}
                  </>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Filter by use case */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-3 font-montserrat">Filter by Use Case</h3>
          <div className="flex flex-wrap gap-2">
            {useCases.map((useCase, index) => (
              <motion.button
                key={useCase}
                variants={buttonVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.1 + 0.3 }}
                whileTap="tap"
                onClick={() => setSelectedUseCase(useCase)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedUseCase === useCase
                    ? 'bg-secondary text-gray-900 shadow-md'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
                aria-pressed={selectedUseCase === useCase}
              >
                {useCase === 'all' ? 'All Use Cases' : useCase.charAt(0).toUpperCase() + useCase.slice(1)}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FilterControls;
  