
import React, { useState, useRef } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BenefitCard } from './BenefitCard';
import { TierFilter } from './TierFilter';
import { BenefitSpotlight } from './BenefitSpotlight';
import { MembershipTier, benefitCategories, benefits } from './membershipData';

/**
 * MembershipBenefitsExplorer Component
 * 
 * This component showcases the exclusive benefits associated with each HeliHop 
 * membership tier in an interactive and visually engaging way.
 */
const MembershipBenefitsExplorer: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTier, setSelectedTier] = useState<MembershipTier | null>(null);
  const [spotlightBenefit, setSpotlightBenefit] = useState(benefits[0]);
  const sliderRef = useRef<Slider>(null);

  // Animation for tab transitions
  const tabAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    reset: true,
    key: selectedTab,
  });

  // Filter benefits based on selected tier
  const filteredBenefits = selectedTier
    ? benefits.filter(benefit => benefit.tiers.includes(selectedTier))
    : benefits;

  // Filter benefits by current category
  const currentCategoryBenefits = filteredBenefits.filter(
    benefit => benefit.category === benefitCategories[selectedTab].id
  );

  // Settings for the mobile carousel
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    className: 'benefits-slider',
  };

  return (
    <section id="membership-benefits" className="px-4 py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center mb-6 text-gray-800">
          Membership Benefits Explorer
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 font-lato text-center max-w-3xl mx-auto mb-12">
          Discover the exclusive advantages that come with each HeliHop membership tier, designed to elevate your travel experience to new heights.
        </p>

        {/* Tier Filter */}
        <div className="mb-10">
          <TierFilter 
            selectedTier={selectedTier} 
            onSelectTier={setSelectedTier} 
          />
        </div>

        {/* Benefit Categories Tabs */}
        <Tabs 
          selectedIndex={selectedTab} 
          onSelect={index => setSelectedTab(index)}
          className="mb-12"
        >
          <TabList className="flex flex-wrap border-b border-gray-200 mb-8">
            {benefitCategories.map((category, index) => (
              <Tab 
                key={category.id}
                className={`px-4 py-3 font-montserrat font-semibold text-sm md:text-base outline-none transition-colors duration-200 border-b-2 mr-2 cursor-pointer ${
                  selectedTab === index ? 'border-primary text-primary' : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
                }`}
                selectedClassName="border-primary text-primary"
              >
                {category.name}
              </Tab>
            ))}
          </TabList>

          {benefitCategories.map((category, index) => (
            <TabPanel key={category.id}>
              <animated.div style={tabAnimation}>
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentCategoryBenefits.map(benefit => (
                    <BenefitCard 
                      key={benefit.id} 
                      benefit={benefit}
                      onSetSpotlight={() => setSpotlightBenefit(benefit)}
                    />
                  ))}
                </div>
                
                {/* Mobile Carousel */}
                <div className="md:hidden">
                  {currentCategoryBenefits.length > 0 ? (
                    <Slider ref={sliderRef} {...sliderSettings}>
                      {currentCategoryBenefits.map(benefit => (
                        <div key={benefit.id} className="px-2">
                          <BenefitCard 
                            benefit={benefit}
                            onSetSpotlight={() => setSpotlightBenefit(benefit)}
                          />
                        </div>
                      ))}
                    </Slider>
                  ) : (
                    <p className="text-center text-gray-500 py-8">No benefits available for the selected filter.</p>
                  )}
                </div>
                
                {/* Empty state for desktop */}
                {currentCategoryBenefits.length === 0 && (
                  <div className="hidden md:block text-center text-gray-500 py-12">
                    <p>No benefits available for the selected filter.</p>
                    <button 
                      onClick={() => setSelectedTier(null)}
                      className="mt-4 text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    >
                      Clear filter
                    </button>
                  </div>
                )}
              </animated.div>
            </TabPanel>
          ))}
        </Tabs>

        {/* Benefit Spotlight */}
        <BenefitSpotlight benefit={spotlightBenefit} />
      </div>
    </section>
  );
};

export default MembershipBenefitsExplorer;
