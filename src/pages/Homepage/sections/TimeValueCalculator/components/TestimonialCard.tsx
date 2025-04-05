
interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
}

/**
 * TestimonialCard Component
 * 
 * Displays a customer testimonial with quote and attribution.
 */
const TestimonialCard = ({ quote, author, company }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 text-[#FFDD00]">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
        </svg>
      </div>
      
      <blockquote className="text-gray-700 font-lato text-md md:text-lg mb-4 italic">
        "{quote}"
      </blockquote>
      
      <div className="flex items-center">
        <div className="w-10 h-10 bg-[#0077B6] rounded-full flex items-center justify-center text-white font-bold">
          {author.charAt(0)}
        </div>
        <div className="ml-3">
          <p className="font-semibold font-montserrat text-gray-800">{author}</p>
          <p className="text-sm text-gray-500 font-lato">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
