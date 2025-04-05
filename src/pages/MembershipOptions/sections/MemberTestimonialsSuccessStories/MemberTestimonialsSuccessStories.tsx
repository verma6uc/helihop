
import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import CountUp from 'react-countup';
import Masonry from 'react-masonry-css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { TestimonialCard } from './TestimonialCard';
import { VideoTestimonial } from './VideoTestimonial';
import { FilterControls } from './FilterControls';
import { useInView } from './hooks/useInView';
import { testimonialData } from './data/testimonialData';
import { StatisticsDisplay } from './StatisticsDisplay';
import { MembershipTier, Testimonial, TestimonialType } from './types';

/**
 * MemberTestimonialsSuccessStories Component
 * 
 * This section showcases member testimonials and success stories to build
 * trust and credibility for potential members considering different
 * membership tiers.
 */
const MemberTestimonialsSuccessStories: React.FC = () => {
  const [selectedTier, setSelectedTier] = useState<MembershipTier | 'all'>('all');
  const [selectedType, setSelectedType] = useState<TestimonialType | 'all'>('all');
  const [filteredTestimonials, setFilteredTestimonials] = useState<Testimonial[]>(testimonialData);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState<boolean>(window.innerWidth >= 768 && window.innerWidth < 1024);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  // Handle responsive layout changes
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Filter testimonials based on selected filters
  useEffect(() => {
    let results = testimonialData;
    
    if (selectedTier !== 'all') {
      results = results.filter(item => item.membershipTier === selectedTier);
    }
    
    if (selectedType !== 'all') {
      results = results.filter(item => item.type === selectedType);
    }
    
    setFilteredTestimonials(results);
  }, [selectedTier, selectedType]);

  // Masonry breakpoints for responsive design
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    768: 1
  };

  return (
    <section 
      ref={sectionRef}
      className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50"
      id="member-testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4"
          >
            What Our Members Say
          </h2>
          <p className="text-lg text-gray-700 font-lato max-w-2xl mx-auto">
            Real stories from HeliHop members who have transformed their travel experience and saved valuable time.
          </p>
        </div>

        {/* Statistics Display */}
        {isInView && (
          <StatisticsDisplay />
        )}

        {/* Filter Controls */}
        <FilterControls 
          selectedTier={selectedTier}
          selectedType={selectedType}
          onTierChange={setSelectedTier}
          onTypeChange={setSelectedType}
        />

        {/* Testimonials Display - Desktop & Tablet */}
        {!isMobile && (
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {filteredTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className={`mb-6 opacity-0 animate-fade-in`}
                style={{ 
                  animationDelay: `${(parseInt(testimonial.id) % 5) * 0.1}s`,
                  animationFillMode: 'forwards' 
                }}
              >
                {testimonial.type === 'video' ? (
                  <VideoTestimonial testimonial={testimonial} />
                ) : (
                  <TestimonialCard testimonial={testimonial} />
                )}
              </div>
            ))}
          </Masonry>
        )}

        {/* Testimonials Display - Mobile */}
        {isMobile && (
          <div className="mt-8">
            <Carousel
              showArrows={true}
              showStatus={false}
              showThumbs={false}
              infiniteLoop={true}
              swipeable={true}
              emulateTouch={true}
              autoPlay={false}
              className="testimonial-carousel"
            >
              {filteredTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-2 pb-8">
                  {testimonial.type === 'video' ? (
                    <VideoTestimonial testimonial={testimonial} />
                  ) : (
                    <TestimonialCard testimonial={testimonial} />
                  )}
                </div>
              ))}
            </Carousel>
          </div>
        )}

        {/* No Results Message */}
        {filteredTestimonials.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600 font-lato">
              No testimonials found for the selected filters. Please try different criteria.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <a 
            href="#join-now" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            aria-label="Join now to experience the HeliHop difference"
          >
            Experience the HeliHop Difference
            <svg className="ml-2 -mr-1 w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>

      {/* Custom styles for the Masonry grid */}
      <style jsx>{`
        .my-masonry-grid {
          display: flex;
          width: auto;
          margin-left: -16px;
        }
        .my-masonry-grid_column {
          padding-left: 16px;
          background-clip: padding-box;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .testimonial-carousel .control-arrow {
          background: rgba(0, 119, 182, 0.6) !important;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          top: 50%;
          transform: translateY(-50%);
        }
      `}</style>
    </section>
  );
};

export default MemberTestimonialsSuccessStories;
