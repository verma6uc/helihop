
import React, { useState } from 'react';

interface TestimonialCardProps {
  name: string;
  role?: string;
  quote: string;
  image?: string;
}

/**
 * TestimonialCard - Displays a customer testimonial with expandable text
 */
const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  quote,
  image,
}) => {
  const [expanded, setExpanded] = useState(false);
  
  // Determine if the quote is long enough to need expansion
  const isLongQuote = quote.length > 120;
  const displayQuote = isLongQuote && !expanded ? `${quote.substring(0, 120)}...` : quote;

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
      onClick={() => isLongQuote && setExpanded(!expanded)}
    >
      <div className="mb-4 flex items-center">
        <div className="mr-4 flex-shrink-0">
          {image ? (
            <img 
              src={image} 
              alt={name} 
              className="w-12 h-12 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-[#0077B6] flex items-center justify-center text-white font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-montserrat font-medium text-gray-800">{name}</h4>
          {role && <p className="text-sm text-gray-600 font-lato">{role}</p>}
        </div>
      </div>
      
      <div className="mb-4 flex-grow">
        <p className="font-lato text-gray-700 italic">"{displayQuote}"</p>
      </div>
      
      {isLongQuote && (
        <button 
          className="text-[#0077B6] text-sm font-lato hover:underline focus:outline-none mt-auto self-start"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};

export default TestimonialCard;
  