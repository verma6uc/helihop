
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Toggle } from '@/components/ui/toggle';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, X } from 'lucide-react';

interface PricingOption {
  monthly: number;
  annual: number;
}

interface MembershipTier {
  id: string;
  name: string;
  description: string;
  pricing: PricingOption;
  features: {
    text: string;
    included: boolean;
  }[];
  isRecommended?: boolean;
  ctaText: string;
  ctaAction: () => void;
}

/**
 * MembershipTierShowcase component displays a comparison of different membership tiers.
 * It allows users to toggle between monthly and annual pricing and highlights the
 * progressive benefits of each tier.
 */
const MembershipTierShowcase = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample data for membership tiers - in a real application, this would come from an API or props
  const tiers: MembershipTier[] = [
    {
      id: 'pay-per-flight',
      name: 'Pay-Per-Flight',
      description: 'Perfect for occasional travelers',
      pricing: {
        monthly: 0,
        annual: 0,
      },
      features: [
        { text: 'No monthly fees', included: true },
        { text: 'Access to all destinations', included: true },
        { text: 'Standard booking', included: true },
        { text: 'Standard customer support', included: true },
        { text: 'Priority flight selection', included: false },
        { text: 'Advanced flight booking', included: false },
        { text: 'Premium lounge access', included: false },
        { text: 'Dedicated concierge', included: false },
      ],
      ctaText: 'Book First Flight',
      ctaAction: () => console.log('Book first flight clicked'),
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'For regular travelers',
      pricing: {
        monthly: 299,
        annual: 2990,
      },
      features: [
        { text: 'All Pay-Per-Flight benefits', included: true },
        { text: 'Priority flight selection', included: true },
        { text: 'Discounted flights', included: true },
        { text: 'Advanced flight booking', included: true },
        { text: 'Premium customer support', included: true },
        { text: 'Premium lounge access', included: false },
        { text: 'Dedicated concierge', included: false },
        { text: 'Exclusive events access', included: false },
      ],
      isRecommended: true,
      ctaText: 'Select Premium',
      ctaAction: () => console.log('Select premium clicked'),
    },
    {
      id: 'elite',
      name: 'Elite',
      description: 'For frequent travelers',
      pricing: {
        monthly: 499,
        annual: 4990,
      },
      features: [
        { text: 'All Premium benefits', included: true },
        { text: 'Premium lounge access', included: true },
        { text: 'Exclusive flight routes', included: true },
        { text: 'Flexible booking changes', included: true },
        { text: 'Priority upgrades', included: true },
        { text: 'Dedicated concierge', included: false },
        { text: 'Exclusive events access', included: false },
        { text: 'Family benefits', included: false },
      ],
      ctaText: 'Choose Elite',
      ctaAction: () => console.log('Choose elite clicked'),
    },
    {
      id: 'executive',
      name: 'Executive',
      description: 'Our premium experience',
      pricing: {
        monthly: 799,
        annual: 7990,
      },
      features: [
        { text: 'All Elite benefits', included: true },
        { text: 'Dedicated concierge', included: true },
        { text: 'Exclusive events access', included: true },
        { text: 'Private terminal access', included: true },
        { text: 'Family benefits', included: true },
        { text: 'Flight customization', included: true },
        { text: 'Unlimited flight changes', included: true },
        { text: 'Global partner privileges', included: true },
      ],
      ctaText: 'Go Executive',
      ctaAction: () => console.log('Go executive clicked'),
    },
  ];

  // Calculate the annual savings percentage
  const calculateSavings = (monthly: number, annual: number) => {
    if (monthly === 0 || annual === 0) return 0;
    const monthlyCost = monthly * 12;
    const savings = ((monthlyCost - annual) / monthlyCost) * 100;
    return Math.round(savings);
  };

  // Animation variants for card container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Animation variants for individual cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      },
    },
  };

  // Animation for the recommended badge pulse
  const pulseBadge = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };

  return (
    <section className="py-16 bg-white" id="membership-tiers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-[#333333] mb-4">
            Choose Your Flight Path
          </h2>
          <p className="text-lg text-[#777777] max-w-2xl mx-auto font-lato">
            Select the membership tier that best fits your travel needs and lifestyle.
          </p>
          
          <div className="flex justify-center items-center mt-8 space-x-4">
            <span className={`text-base font-medium ${!isAnnual ? 'text-[#333333]' : 'text-[#777777]'}`}>Monthly</span>
            <Toggle
              pressed={isAnnual}
              onPressedChange={setIsAnnual}
              aria-label="Toggle between monthly and annual pricing"
              className="data-[state=on]:bg-[#0077B6]"
            />
            <span className={`text-base font-medium ${isAnnual ? 'text-[#333333]' : 'text-[#777777]'}`}>
              Annual
              {isAnnual && (
                <Badge className="ml-2 bg-[#FFDD00] text-[#333333]">
                  Save up to 15%
                </Badge>
              )}
            </span>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tiers.map((tier) => (
            <motion.div
              key={tier.id}
              variants={cardVariants}
              className="relative h-full"
            >
              <Card className={`h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${
                tier.isRecommended ? 'border-[#0077B6] border-2' : ''
              }`}>
                {tier.isRecommended && (
                  <motion.div
                    variants={pulseBadge}
                    animate="pulse"
                    className="absolute -top-3 right-4"
                  >
                    <Badge className="bg-[#FFDD00] text-[#333333] px-3 py-1">
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <CardHeader className="pb-4">
                  <h3 className="text-2xl font-bold font-montserrat text-[#333333]">{tier.name}</h3>
                  <p className="text-[#777777] font-lato">{tier.description}</p>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <div className="mb-6">
                    <p className="text-4xl font-bold font-montserrat text-[#333333]">
                      {tier.pricing[isAnnual ? 'annual' : 'monthly'] === 0 
                        ? 'Free' 
                        : `$${tier.pricing[isAnnual ? 'annual' : 'monthly']}`}
                    </p>
                    <p className="text-[#777777] font-lato">
                      {tier.pricing[isAnnual ? 'annual' : 'monthly'] === 0 
                        ? 'Pay only when you fly' 
                        : isAnnual ? 'per year' : 'per month'}
                    </p>
                    
                    {isAnnual && tier.pricing.annual > 0 && (
                      <p className="text-sm text-[#FF5733] mt-1 font-lato">
                        Save {calculateSavings(tier.pricing.monthly, tier.pricing.annual)}%
                      </p>
                    )}
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-[#0077B6] mr-2 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-[#777777] mr-2 flex-shrink-0" />
                        )}
                        <span className={`font-lato ${feature.included ? 'text-[#333333]' : 'text-[#777777]'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter className="pt-2">
                  <Button 
                    onClick={tier.ctaAction}
                    className={`w-full ${
                      tier.isRecommended 
                        ? 'bg-[#0077B6] hover:bg-[#00659E]' 
                        : 'bg-white text-[#0077B6] border-[#0077B6] border hover:bg-[#F0F7FF]'
                    }`}
                    aria-label={`Select ${tier.name} membership`}
                  >
                    {tier.ctaText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile sticky button */}
        <div className="md:hidden fixed bottom-6 left-0 right-0 flex justify-center z-10">
          <Button 
            className="bg-[#0077B6] hover:bg-[#00659E] shadow-lg rounded-full px-6"
            onClick={() => document.getElementById('membership-tiers')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Compare Tiers
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MembershipTierShowcase;
  