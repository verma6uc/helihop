
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

interface PricingOption {
  monthly: number;
  annual: number;
}

interface TierCardProps {
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
  isAnnual: boolean;
  variants: any;
}

/**
 * TierCard component displays a single membership tier card
 * showing the pricing, features, and call-to-action button.
 */
const TierCard = ({
  id,
  name,
  description,
  pricing,
  features,
  isRecommended,
  ctaText,
  ctaAction,
  isAnnual,
  variants
}: TierCardProps) => {
  // Calculate the annual savings percentage
  const calculateSavings = (monthly: number, annual: number) => {
    if (monthly === 0 || annual === 0) return 0;
    const monthlyCost = monthly * 12;
    const savings = ((monthlyCost - annual) / monthlyCost) * 100;
    return Math.round(savings);
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
    <motion.div
      variants={variants}
      className="relative h-full"
    >
      <Card className={`h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 ${
        isRecommended ? 'border-[#0077B6] border-2' : ''
      }`}>
        {isRecommended && (
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
          <h3 className="text-2xl font-bold font-montserrat text-[#333333]">{name}</h3>
          <p className="text-[#777777] font-lato">{description}</p>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="mb-6">
            <p className="text-4xl font-bold font-montserrat text-[#333333]">
              {pricing[isAnnual ? 'annual' : 'monthly'] === 0 
                ? 'Free' 
                : `$${pricing[isAnnual ? 'annual' : 'monthly']}`}
            </p>
            <p className="text-[#777777] font-lato">
              {pricing[isAnnual ? 'annual' : 'monthly'] === 0 
                ? 'Pay only when you fly' 
                : isAnnual ? 'per year' : 'per month'}
            </p>
            
            {isAnnual && pricing.annual > 0 && (
              <p className="text-sm text-[#FF5733] mt-1 font-lato">
                Save {calculateSavings(pricing.monthly, pricing.annual)}%
              </p>
            )}
          </div>
          
          <ul className="space-y-3 mb-6">
            {features.map((feature, index) => (
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
            onClick={ctaAction}
            className={`w-full ${
              isRecommended 
                ? 'bg-[#0077B6] hover:bg-[#00659E]' 
                : 'bg-white text-[#0077B6] border-[#0077B6] border hover:bg-[#F0F7FF]'
            }`}
            aria-label={`Select ${name} membership`}
          >
            {ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default TierCard;
  