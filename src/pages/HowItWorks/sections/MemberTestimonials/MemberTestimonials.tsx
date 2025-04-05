
import { useState, useEffect } from 'react';
import { Container } from '@/components/ui/container';
import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import TestimonialCard from './TestimonialCard';
import VideoTestimonial from './VideoTestimonial';
import StatisticsDisplay from './StatisticsDisplay';
import FilterControls from './FilterControls';
import { testimonialData } from './data/testimonialData';
import { statisticsData } from './data/statisticsData';
import { TestimonialTier, TestimonialType, UseCase } from './types';
import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * MemberTestimonials component displays testimonials and success stories from HeliHop members
 * This section provides social proof and builds trust by featuring authentic user experiences
 */
const MemberTestimonials = () => {
  const [selectedTier, setSelectedTier] = useState<TestimonialTier | 'all'>('all');
  const [selectedUseCase, setSelectedUseCase] = useState<UseCase | 'all'>('all');
  const [filteredTestimonials, setFilteredTestimonials] = useState(testimonialData);
  
  const isMobile = useMediaQuery('(max-width: 640px)');
  const isTablet = useMediaQuery('(min-width: 641px) and (max-width: 1024px)');

  // Apply filters when selections change
  useEffect(() => {
    let filtered = testimonialData;
    
    if (selectedTier !== 'all') {
      filtered = filtered.filter(testimonial => testimonial.memberTier === selectedTier);
    }
    
    if (selectedUseCase !== 'all') {
      filtered = filtered.filter(testimonial => testimonial.useCase === selectedUseCase);
    }
    
    setFilteredTestimonials(filtered);
  }, [selectedTier, selectedUseCase]);

  // Configure breakpoints for the masonry layout
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  // Animation variants for content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  // Render testimonials based on device size
  const renderTestimonials = () => {
    if (isMobile) {
      return (
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={false}
          swipeable={true}
          emulateTouch={true}
          className="mt-8"
        >
          {filteredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-4 mb-8">
              {testimonial.type === 'video' ? (
                <VideoTestimonial 
                  videoUrl={testimonial.content}
                  memberName={testimonial.memberName}
                  memberTitle={testimonial.memberTitle}
                  memberTier={testimonial.memberTier}
                  thumbnailUrl={testimonial.thumbnailUrl}
                />
              ) : (
                <TestimonialCard testimonial={testimonial} />
              )}
            </div>
          ))}
        </Carousel>
      );
    } else if (isTablet) {
      return (
        <div className="grid grid-cols-2 gap-6 mt-8">
          {filteredTestimonials.map((testimonial) => (
            <motion.div 
              key={testimonial.id}
              variants={itemVariants}
              className="mb-6"
            >
              {testimonial.type === 'video' ? (
                <VideoTestimonial 
                  videoUrl={testimonial.content}
                  memberName={testimonial.memberName}
                  memberTitle={testimonial.memberTitle}
                  memberTier={testimonial.memberTier}
                  thumbnailUrl={testimonial.thumbnailUrl}
                />
              ) : (
                <TestimonialCard testimonial={testimonial} />
              )}
            </motion.div>
          ))}
        </div>
      );
    } else {
      return (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex w-auto -ml-6 mt-8"
          columnClassName="pl-6"
        >
          {filteredTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="mb-6"
            >
              {testimonial.type === 'video' ? (
                <VideoTestimonial 
                  videoUrl={testimonial.content}
                  memberName={testimonial.memberName}
                  memberTitle={testimonial.memberTitle}
                  memberTier={testimonial.memberTier}
                  thumbnailUrl={testimonial.thumbnailUrl}
                />
              ) : (
                <TestimonialCard testimonial={testimonial} />
              )}
            </motion.div>
          ))}
        </Masonry>
      );
    }
  };

  return (
    <section id="member-testimonials" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-4">
            Hear From Our Members
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-3xl mx-auto">
            Real stories from real members who have transformed their travel experience with HeliHop
          </p>
        </motion.div>

        <StatisticsDisplay statistics={statisticsData} />

        <div className="mt-12">
          <FilterControls
            selectedTier={selectedTier}
            setSelectedTier={setSelectedTier}
            selectedUseCase={selectedUseCase}
            setSelectedUseCase={setSelectedUseCase}
          />
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {renderTestimonials()}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-6">
            Ready to Join Our Community?
          </h3>
          <a 
            href="/membership-options" 
            className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md transition duration-300 shadow-md hover:shadow-lg"
            aria-label="Explore membership options"
          >
            Explore Membership Options
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default MemberTestimonials;
  