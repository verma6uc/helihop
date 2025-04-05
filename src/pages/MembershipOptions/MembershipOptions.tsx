
import React, { useState } from 'react';
import MembershipTierShowcase from '@/components/membership/MembershipTierShowcase';
import MembershipBenefitsExplorer from '@/components/membership/MembershipBenefitsExplorer';
import MembershipROICalculator from '@/components/membership/MembershipROICalculator';
import MemberTestimonialsAndSuccessStories from '@/components/membership/MemberTestimonialsAndSuccessStories';
import MembershipUpgradeAndRegistration from '@/components/membership/MembershipUpgradeAndRegistration';

/**
 * MembershipOptions page component that assembles all membership-related sections 
 * into a cohesive and persuasive user journey to explore HeliHop's membership options.
 */
const MembershipOptions: React.FC = () => {
  // Shared state for selected membership tier that can be passed between components
  const [selectedTierId, setSelectedTierId] = useState<string | null>(null);
  
  // State for ROI calculator results that might influence other sections
  const [calculatedROI, setCalculatedROI] = useState<number | null>(null);

  // Handler for when a user selects a tier in the showcase
  const handleTierSelect = (tierId: string) => {
    setSelectedTierId(tierId);
    // Scroll to benefits section when a tier is selected
    document.getElementById('benefits-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Handler for when ROI calculation is completed
  const handleROICalculated = (roi: number) => {
    setCalculatedROI(roi);
  };

  return (
    <div className="bg-helihop-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-helihop-offwhite to-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-bold text-helihop-dark md:text-5xl lg:text-6xl">
            HeliHop Membership Options
          </h1>
          <p className="mt-6 text-center text-lg text-helihop-medium md:text-xl">
            Discover the perfect membership tier to elevate your helicopter travel experience
          </p>
        </div>
      </section>

      {/* Membership Tier Showcase Section */}
      <section className="section-padding" id="tiers-section">
        <div className="container mx-auto container-padding">
          <MembershipTierShowcase onTierSelect={handleTierSelect} />
        </div>
      </section>

      {/* Membership Benefits Explorer Section */}
      <section className="section-padding bg-helihop-offwhite" id="benefits-section">
        <div className="container mx-auto container-padding">
          <MembershipBenefitsExplorer selectedTierId={selectedTierId} />
        </div>
      </section>

      {/* Membership ROI Calculator Section */}
      <section className="section-padding" id="roi-section">
        <div className="container mx-auto container-padding">
          <MembershipROICalculator onCalculate={handleROICalculated} />
        </div>
      </section>

      {/* Member Testimonials & Success Stories Section */}
      <section className="section-padding bg-helihop-offwhite" id="testimonials-section">
        <div className="container mx-auto container-padding">
          <MemberTestimonialsAndSuccessStories />
        </div>
      </section>

      {/* Membership Upgrade & Registration Section */}
      <section className="section-padding" id="registration-section">
        <div className="container mx-auto container-padding">
          <MembershipUpgradeAndRegistration 
            selectedTierId={selectedTierId} 
            calculatedROI={calculatedROI}
          />
        </div>
      </section>

      {/* Call-to-Action Floating Button (visible on scroll) */}
      <div className="fixed bottom-8 right-8 z-50 hidden md:block">
        <button 
          onClick={() => document.getElementById('registration-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="btn-primary flex items-center space-x-2 rounded-full px-6 py-3 shadow-lg hover:shadow-xl"
          aria-label="Join Now"
        >
          <span>Join Now</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MembershipOptions;
  