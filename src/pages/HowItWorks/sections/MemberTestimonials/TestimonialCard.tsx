
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * TestimonialCard component displays a single text testimonial with member information
 * It supports both short and expanded views for longer testimonials
 */
const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const isLongContent = testimonial.content.length > 200;

  // Get the tier color for the card border
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'border-purple-500';
      case 'gold':
        return 'border-amber-400';
      case 'silver':
        return 'border-gray-400';
      default:
        return 'border-blue-300';
    }
  };

  // Format the date string
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short'
    }).format(date);
  };

  // Truncate content for non-expanded view
  const truncatedContent = isLongContent && !expanded 
    ? `${testimonial.content.substring(0, 180)}...` 
    : testimonial.content;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative overflow-hidden rounded-lg shadow-md bg-white p-6 border-l-4 ${getTierColor(testimonial.memberTier)}`}
    >
      <div className="mb-4">
        <div className="flex items-start mb-3">
          {/* Quote icon */}
          <svg className="w-10 h-10 text-gray-200 mr-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
          </svg>
          
          {/* Member tier badge */}
          <span className={`
            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
            ${testimonial.memberTier === 'platinum' ? 'bg-purple-100 text-purple-800' : ''}
            ${testimonial.memberTier === 'gold' ? 'bg-amber-100 text-amber-800' : ''}
            ${testimonial.memberTier === 'silver' ? 'bg-gray-100 text-gray-800' : ''}
            ${testimonial.memberTier === 'standard' ? 'bg-blue-100 text-blue-800' : ''}
          `}>
            {testimonial.memberTier} Member
          </span>
        </div>

        <p className="text-gray-700 font-lato text-lg italic mb-4">
          {truncatedContent}
        </p>
        
        {isLongContent && (
          <button 
            onClick={() => setExpanded(!expanded)}
            className="text-primary hover:text-primary/80 text-sm font-medium focus:outline-none focus:underline transition-colors"
            aria-expanded={expanded}
          >
            {expanded ? 'Read less' : 'Read more'}
          </button>
        )}
      </div>

      <div className="flex items-center mt-6">
        {testimonial.memberImage ? (
          <img 
            src={testimonial.memberImage} 
            alt={testimonial.memberName}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <span className="text-gray-500 font-medium">
              {testimonial.memberName.charAt(0)}
            </span>
          </div>
        )}
        
        <div>
          <h4 className="font-bold text-gray-900 font-montserrat">
            {testimonial.memberName}
          </h4>
          <p className="text-sm text-gray-600">
            {testimonial.memberTitle}
            {testimonial.date && (
              <span className="text-gray-400 ml-2">• {formatDate(testimonial.date)}</span>
            )}
          </p>
        </div>
      </div>

      {testimonial.useCase && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            Use Case: {testimonial.useCase}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default TestimonialCard;
  