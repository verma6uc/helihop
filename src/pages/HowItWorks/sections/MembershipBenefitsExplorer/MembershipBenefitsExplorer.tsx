
import React, { useState, useEffect } from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useSpring, animated } from 'react-spring';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import BenefitCard from './BenefitCard';
import TierFilter from './TierFilter';
import BenefitSpotlight from './BenefitSpotlight';
import { benefitCategories, benefitData, membershipTiers, MembershipTier } from './membershipData';
import { useInView } from 'react-intersection-observer';

/**
 * MembershipBenefitsExplorer - Interactive showcase of benefits for each membership tier
 * 
 * This component displays the various benefits associated with HeliHop membership tiers,
 * organized by categories and with filtering capabilities.
 */
const MembershipBenefitsExplorer: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<MembershipTier | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [visibleBenefits, setVisibleBenefits] = useState(benefitData);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Animation for section entrance
  const fadeIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0)' : 'translateY(50px)',
    config: { mass: 1, tension: 280, friction: 60 }
  });

  // Filter benefits when tier selection changes
  useEffect(() => {
    if (selectedTier === 'all') {
      setVisibleBenefits(benefitData);
    } else {
      setVisibleBenefits(
        benefitData.filter(benefit => 
          benefit.availableTiers.includes(selectedTier)
        )
      );
    }
  }, [selectedTier]);

  // Slider settings for mobile view
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Handle tab selection
  const handleTabSelect = (index: number) => {
    setSelectedCategory(index);
  };

  // Get benefits for current category
  const getCurrentCategoryBenefits = () => {
    return visibleBenefits.filter(
      benefit => benefit.category === benefitCategories[selectedCategory].id
    );
  };

  return (
    <section 
      ref={ref}
      className="py-16 md:py-20 bg-white"
      aria-labelledby="membership-benefits-title"
    >
      <animated.div style={fadeIn} className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 
            id="membership-benefits-title"
            className="text-3xl md:text-4xl font-bold font-montserrat text-gray-800 mb-4"
          >
            Exclusive Membership Benefits
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-3xl mx-auto">
            Discover the exceptional privileges and amenities that come with each HeliHop membership tier, designed to elevate your travel experience.
          </p>
        </div>

        {/* Benefit Spotlight - Showcasing premium benefits */}
        <div className="mb-16">
          <BenefitSpotlight />
        </div>

        {/* Tier Filter Controls */}
        <div className="mb-10">
          <TierFilter 
            selectedTier={selectedTier} 
            onTierChange={setSelectedTier} 
            tiers={membershipTiers}
          />
        </div>

        {/* Tabbed Categories */}
        <Tabs 
          selectedIndex={selectedCategory} 
          onSelect={handleTabSelect}
          className="mb-10"
        >
          <TabList className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {benefitCategories.map((category, index) => (
              <Tab
                key={category.id}
                className="px-6 py-3 font-montserrat font-medium text-gray-600 cursor-pointer focus:outline-none border-b-2 border-transparent hover:text-primary-blue transition-colors duration-200 mr-2 last:mr-0"
                selectedClassName="text-primary-blue border-primary-blue"
                aria-controls={`tabpanel-${category.id}`}
              >
                <span className="flex items-center">
                  {category.icon && (
                    <span className="mr-2">{category.icon}</span>
                  )}
                  {category.name}
                </span>
              </Tab>
            ))}
          </TabList>

          {benefitCategories.map((category) => (
            <TabPanel key={category.id} id={`tabpanel-${category.id}`}>
              <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getCurrentCategoryBenefits().map((benefit) => (
                  <BenefitCard key={benefit.id} benefit={benefit} />
                ))}
              </div>
              
              {/* Mobile slider view */}
              <div className="md:hidden">
                {getCurrentCategoryBenefits().length > 0 ? (
                  <Slider {...sliderSettings}>
                    {getCurrentCategoryBenefits().map((benefit) => (
                      <div key={benefit.id} className="px-2">
                        <BenefitCard benefit={benefit} />
                      </div>
                    ))}
                  </Slider>
                ) : (
                  <div className="text-center py-10 text-gray-500 italic">
                    No benefits available for the selected tier in this category.
                  </div>
                )}
              </div>

              {/* Empty state for desktop */}
              {getCurrentCategoryBenefits().length === 0 && (
                <div className="hidden md:block text-center py-10 text-gray-500 italic">
                  No benefits available for the selected tier in this category.
                </div>
              )}
            </TabPanel>
          ))}
        </Tabs>

        {/* Member Testimonials */}
        <div className="mt-16 bg-gray-50 rounded-lg p-8">
          <h3 className="text-2xl font-montserrat font-bold text-center mb-8">What Our Members Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-yellow">
              <p className="text-gray-700 italic mb-4 font-lato">
                "The priority booking alone has saved me countless hours. Being able to secure a helicopter with minimal notice has transformed how I manage my business travel."
              </p>
              <footer className="font-medium text-gray-900">
                — Executive Member, New York
              </footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-secondary-yellow">
              <p className="text-gray-700 italic mb-4 font-lato">
                "The concierge service is exceptional. They\'ve arranged everything from last-minute dinner reservations to special anniversary surprises during our travels."
              </p>
              <footer className="font-medium text-gray-900">
                — Platinum Member, Los Angeles
              </footer>
            </blockquote>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-montserrat font-bold mb-4">Ready to Elevate Your Journey?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Compare all membership tiers or speak with a membership advisor to find the perfect fit for your lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-primary-blue hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-md transition duration-300">
              Compare Membership Tiers
            </button>
            <button className="bg-white border-2 border-primary-blue text-primary-blue hover:bg-blue-50 font-bold py-3 px-8 rounded-md transition duration-300">
              Speak with an Advisor
            </button>
          </div>
        </div>
      </animated.div>
    </section>
  );
};

export default MembershipBenefitsExplorer;
  