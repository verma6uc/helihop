
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import TierCard from './components/TierCard';
import ComparisonModal from './components/ComparisonModal';
import PricingToggle from './components/PricingToggle';
import { MembershipTier } from './types';

/**
 * MembershipTierShowcase component displays a comparison of different
 * HeliHop membership tiers with their features and pricing.
 * 
 * @returns {JSX.Element} The rendered MembershipTierShowcase component
 */
const MembershipTierShowcase = (): JSX.Element => {
  const [isAnnual, setIsAnnual] = useState<boolean>(false);
  const [isComparisonModalOpen, setIsComparisonModalOpen] = useState<boolean>(false);
  
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Animation variants for staggered reveal
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  // Membership tier data
  const membershipTiers: MembershipTier[] = [
    {
      id: 'pay-per-flight',
      name: 'Pay-Per-Flight',
      description: 'Perfect for occasional travelers with no commitment required.',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'No membership fee',
        'Book flights when needed',
        'Standard booking window',
        'Basic support'
      ],
      recommended: false,
      ctaText: 'Book First Flight',
      ctaLink: '/book-flight',
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Enhanced benefits for the regular traveler seeking better value.',
      monthlyPrice: 199,
      annualPrice: 1990, // ~15% savings annually
      features: [
        'Priority booking window',
        'Discounted flight rates',
        'Free cancellations',
        'Priority support'
      ],
      recommended: true,
      ctaText: 'Upgrade to Premium',
      ctaLink: '/membership/premium',
    },
    {
      id: 'elite',
      name: 'Elite',
      description: 'Premium perks for frequent flyers with exclusive benefits.',
      monthlyPrice: 399,
      annualPrice: 3990, // ~15% savings annually
      features: [
        'Extended booking window',
        'Higher discounts on flights',
        'Complimentary upgrades',
        'Dedicated support line',
        'Guest privileges'
      ],
      recommended: false,
      ctaText: 'Upgrade to Elite',
      ctaLink: '/membership/elite',
    },
    {
      id: 'executive',
      name: 'Executive',
      description: 'Ultimate luxury experience with all-inclusive benefits.',
      monthlyPrice: 799,
      annualPrice: 7990, // ~15% savings annually
      features: [
        'Unlimited booking window',
        'Maximum flight discounts',
        'Exclusive executive lounges',
        'Concierge service',
        'Family membership benefits',
        'Special events access'
      ],
      recommended: false,
      ctaText: 'Upgrade to Executive',
      ctaLink: '/membership/executive',
    }
  ];

  const togglePricingPeriod = () => {
    setIsAnnual(!isAnnual);
  };

  const openComparisonModal = () => {
    setIsComparisonModalOpen(true);
  };

  const closeComparisonModal = () => {
    setIsComparisonModalOpen(false);
  };

  return (
    <section className="py-16 px-4 bg-white" id="membership-tiers">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Choose Your Membership Tier
          </h2>
          <p className="text-lg text-gray-700 font-lato max-w-3xl mx-auto">
            Select the perfect HeliHop membership tier that fits your travel frequency and preferences.
            Each tier offers progressive benefits to enhance your flying experience.
          </p>
          
          <div className="mt-8">
            <PricingToggle isAnnual={isAnnual} onToggle={togglePricingPeriod} />
          </div>
        </div>

        {/* Mobile sticky comparison button */}
        <div className="fixed bottom-6 left-0 right-0 flex justify-center z-10 md:hidden">
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="bg-primary text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center"
            onClick={openComparisonModal}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Compare All Tiers
          </motion.button>
        </div>

        {/* Membership tier cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8"
        >
          {membershipTiers.map((tier) => (
            <motion.div key={tier.id} variants={itemVariants}>
              <TierCard 
                tier={tier} 
                isAnnual={isAnnual}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Full comparison table (visible on larger screens) */}
        <div className="hidden md:block mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-montserrat text-gray-900">
              Full Feature Comparison
            </h3>
            <p className="text-gray-600 font-lato mt-2">
              Compare all features across our membership tiers
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 text-left font-montserrat font-semibold text-gray-800">Feature</th>
                  {membershipTiers.map((tier) => (
                    <th 
                      key={tier.id} 
                      className={`py-4 px-6 text-center font-montserrat font-semibold ${tier.recommended ? 'text-primary' : 'text-gray-800'}`}
                    >
                      {tier.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Row 1: Pricing */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-lato text-gray-800">Pricing</td>
                  {membershipTiers.map((tier) => (
                    <td key={tier.id} className="py-4 px-6 text-center font-lato">
                      {tier.id === 'pay-per-flight' ? (
                        <span>No fee</span>
                      ) : (
                        <div>
                          <span className="font-semibold text-gray-900">
                            ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                          </span>
                          <span className="text-gray-600 text-sm block">
                            {isAnnual ? '/year' : '/month'}
                          </span>
                          {isAnnual && <span className="text-green-600 text-xs block mt-1">Save ~15%</span>}
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
                
                {/* Row 2: Booking Window */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-lato text-gray-800">Booking Window</td>
                  <td className="py-4 px-6 text-center font-lato">Standard (7 days)</td>
                  <td className="py-4 px-6 text-center font-lato">Priority (14 days)</td>
                  <td className="py-4 px-6 text-center font-lato">Extended (30 days)</td>
                  <td className="py-4 px-6 text-center font-lato">Unlimited</td>
                </tr>
                
                {/* Row 3: Flight Discounts */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-lato text-gray-800">Flight Discounts</td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">10% off</td>
                  <td className="py-4 px-6 text-center font-lato">15% off</td>
                  <td className="py-4 px-6 text-center font-lato">25% off</td>
                </tr>
                
                {/* Row 4: Cancellations */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-lato text-gray-800">Cancellations</td>
                  <td className="py-4 px-6 text-center font-lato">Fee applies</td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
                
                {/* Row 5: Support Level */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-lato text-gray-800">Support Level</td>
                  <td className="py-4 px-6 text-center font-lato">Basic</td>
                  <td className="py-4 px-6 text-center font-lato">Priority</td>
                  <td className="py-4 px-6 text-center font-lato">Dedicated Line</td>
                  <td className="py-4 px-6 text-center font-lato">Concierge</td>
                </tr>
                
                {/* Row 6: Guest Privileges */}
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-lato text-gray-800">Guest Privileges</td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">
                    <div className="flex items-center justify-center">
                      <svg className="h-5 w-5 text-green-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs">(Family)</span>
                    </div>
                  </td>
                </tr>
                
                {/* Row 7: Special Events */}
                <tr>
                  <td className="py-4 px-6 font-lato text-gray-800">Special Events Access</td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center font-lato">Limited</td>
                  <td className="py-4 px-6 text-center font-lato">
                    <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Comparison Modal (for mobile) */}
      <ComparisonModal 
        isOpen={isComparisonModalOpen} 
        onClose={closeComparisonModal} 
        tiers={membershipTiers}
        isAnnual={isAnnual}
      />
    </section>
  );
};

export default MembershipTierShowcase;
