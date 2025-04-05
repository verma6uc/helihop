
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { newsletterSchema } from '../utils/validation';

interface NewsletterFormData {
  email: string;
}

/**
 * NewsletterSignup component
 * 
 * Email newsletter signup form with validation
 */
export const NewsletterSignup: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterSchema)
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Success
      setIsSuccess(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Newsletter signup error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-montserrat font-semibold text-gray-800 mb-3">
        Stay Updated
      </h3>
      
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-3 mb-3">
          <p className="text-green-700 text-sm font-lato">
            Thank you for subscribing! We\'ll keep you updated with the latest news and offers.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Your email address"
              {...register('email')}
              className={`w-full p-3 border ${errors.email ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-[#0077B6]'} rounded-md focus:outline-none focus:ring-2 font-lato`}
              aria-describedby={errors.email ? "email-error" : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-600 font-lato">
                {errors.email.message}
              </p>
            )}
          </div>
          
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#FF5733] hover:bg-[#FF5733]/90 text-white font-montserrat font-bold py-3 px-4 rounded-md shadow-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Subscribe to Updates'
            )}
          </button>
          
          <p className="text-xs text-gray-500 font-lato">
            We respect your privacy and won\'t share your information.
          </p>
        </form>
      )}
    </div>
  );
};
