
import React, { useState } from 'react';

/**
 * Newsletter signup form component
 */
const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // Here you would typically call an API to save the email
    // This is just a simulated success
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
      <h3 className="font-montserrat text-lg font-semibold mb-2">Stay Updated on Exclusive Offers</h3>
      <p className="text-sm text-gray-600 mb-4">
        Subscribe to receive special promotions, travel tips, and VIP discounts.
      </p>
      
      {isSubmitted ? (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-md">
          <p className="text-sm">Thank you for subscribing! You\'ll be the first to know about our exclusive offers.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="flex-grow">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                aria-invalid={error ? 'true' : 'false'}
                aria-describedby={error ? 'newsletter-error' : undefined}
              />
              {error && (
                <p id="newsletter-error" className="mt-1 text-sm text-red-600" role="alert">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-[#FFDD00] text-gray-900 font-medium rounded-md hover:bg-[#e6c700] focus:outline-none focus:ring-2 focus:ring-[#FFDD00] focus:ring-opacity-50 transition-colors"
            >
              Subscribe
            </button>
          </div>
          <p className="mt-2 text-xs text-gray-500">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>
      )}
    </div>
  );
};

export default NewsletterSignup;
