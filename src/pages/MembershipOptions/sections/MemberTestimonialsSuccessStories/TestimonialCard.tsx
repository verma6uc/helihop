
import React, { useState } from 'react';
import { Testimonial } from './types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

/**
 * TestimonialCard component displays written testimonials and success stories
 * Cards can be expanded to show full content
 */
export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  // Calculate if content is long enough to need expansion
  const needsExpansion = testimonial.content.length > 150;
  
  // Format the display content based on expansion state
  const displayContent = needsExpansion && !expanded 
    ? `${testimonial.content.substring(0, 150)}...` 
    : testimonial.content;

  // Determine card style based on testimonial type
  const isSuccessStory = testimonial.type === 'success-story';
  
  return (
    <div 
      className={`rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg ${
        isSuccessStory ? 'border-l-4 border-yellow-400' : ''
      }`}
    >
      <div className="bg-white p-6">
        {/* Card header with member info */}
        <div className="flex items-center mb-4">
          <img 
            src={testimonial.memberAvatar} 
            alt={testimonial.memberName}
            className="w-12 h-12 rounded-full object-cover mr-4"
            loading="lazy"
          />
          <div>
            <h3 className="font-bold text-gray-900">{testimonial.memberName}</h3>
            {testimonial.memberTitle && (
              <p className="text-sm text-gray-600">
                {testimonial.memberTitle}
                {testimonial.memberCompany && `, ${testimonial.memberCompany}`}
              </p>
            )}
            <div className="flex items-center mt-1">
              <span 
                className={`inline-block px-2 py-1 text-xs rounded-full ${
                  testimonial.membershipTier === 'essentials' 
                    ? 'bg-blue-100 text-blue-800' 
                    : testimonial.membershipTier === 'plus' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-yellow-100 text-yellow-800'
                }`}
              >
                {testimonial.membershipTier.charAt(0).toUpperCase() + testimonial.membershipTier.slice(1)} Member
              </span>
              {testimonial.useCase && (
                <span className="ml-2 text-xs text-gray-500">
                  {testimonial.useCase}
                </span>
              )}
            </div>
          </div>
        </div>
        
        {/* Before/After metrics for success stories */}
        {isSuccessStory && testimonial.beforeAfterMetric && (
          <div className="mb-4 bg-gray-50 p-4 rounded-md">
            <h4 className="text-sm text-gray-700 mb-2">{testimonial.beforeAfterMetric.metric}</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-gray-500 text-xs">BEFORE</div>
                <div className="text-lg font-bold text-red-600">{testimonial.beforeAfterMetric.before}</div>
              </div>
              <div className="text-center">
                <div className="text-gray-500 text-xs">AFTER</div>
                <div className="text-lg font-bold text-green-600">{testimonial.beforeAfterMetric.after}</div>
              </div>
            </div>
          </div>
        )}
        
        {/* Testimonial content */}
        <div className="relative">
          <p className="text-gray-700 font-lato leading-relaxed">
            "{displayContent}"
          </p>
          
          {/* Expand/collapse button */}
          {needsExpansion && (
            <button
              onClick={toggleExpanded}
              className="mt-2 text-blue-600 text-sm font-medium hover:text-blue-800 focus:outline-none focus:underline"
              aria-expanded={expanded}
            >
              {expanded ? 'Read less' : 'Read more'}
            </button>
          )}
        </div>
        
        {/* Card footer */}
        <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
          <time dateTime={testimonial.testimonialDate}>
            {new Date(testimonial.testimonialDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short'
            })}
          </time>
          <button 
            className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:underline"
            aria-label={`Contact ${testimonial.memberName}`}
          >
            Contact Member
          </button>
        </div>
      </div>
    </div>
  );
};
