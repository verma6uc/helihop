
import React, { useState } from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import { BookingFormData } from './types';
import StepIndicator from './components/StepIndicator';
import MembershipOptions from './components/MembershipOptions';
import ProcessVisualization from './components/ProcessVisualization';
import TrustIndicators from './components/TrustIndicators';
import NewsletterSignup from './components/NewsletterSignup';
import ContactInfo from './components/ContactInfo';

/**
 * CallToActionBookingPreview section of the BookNow page
 * Provides a streamlined booking interface with multiple steps
 */
const CallToActionBookingPreview: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  
  const { 
    register, 
    handleSubmit, 
    control, 
    formState: { errors },
    watch 
  } = useForm<BookingFormData>();

  const onSubmit: SubmitHandler<BookingFormData> = (data) => {
    console.log(data);
    // Handle form submission here
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Final submission logic
      alert('Booking submitted successfully!');
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="origin" className="block text-gray-700 font-medium">
                Origin
              </label>
              <input
                id="origin"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                placeholder="Enter pickup location"
                {...register('origin', { required: 'Origin is required' })}
                aria-invalid={errors.origin ? 'true' : 'false'}
              />
              {errors.origin && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.origin.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="destination" className="block text-gray-700 font-medium">
                Destination
              </label>
              <input
                id="destination"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                placeholder="Enter destination"
                {...register('destination', { required: 'Destination is required' })}
                aria-invalid={errors.destination ? 'true' : 'false'}
              />
              {errors.destination && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.destination.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="date" className="block text-gray-700 font-medium">
                Date & Time
              </label>
              <Controller
                control={control}
                name="dateTime"
                rules={{ required: 'Please select a date and time' }}
                render={({ field }) => (
                  <DatePicker
                    id="date"
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    timeIntervals={15}
                    dateFormat="MMMM d, yyyy h:mm aa"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                    placeholderText="Select date and time"
                    aria-invalid={errors.dateTime ? 'true' : 'false'}
                  />
                )}
              />
              {errors.dateTime && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.dateTime.message}
                </p>
              )}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                placeholder="Enter your full name"
                {...register('name', { required: 'Name is required' })}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                placeholder="Enter your email"
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
                aria-invalid={errors.email ? 'true' : 'false'}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="block text-gray-700 font-medium">
                Phone Number
              </label>
              <Controller
                control={control}
                name="phone"
                rules={{ required: 'Phone number is required' }}
                render={({ field }) => (
                  <PhoneInput
                    id="phone"
                    international
                    placeholder="Enter phone number"
                    value={field.value}
                    onChange={field.onChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                  />
                )}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.phone.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label htmlFor="passengers" className="block text-gray-700 font-medium">
                Number of Passengers
              </label>
              <input
                id="passengers"
                type="number"
                min="1"
                max="20"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                placeholder="Enter number of passengers"
                {...register('passengers', { 
                  required: 'Number of passengers is required',
                  min: {
                    value: 1,
                    message: 'At least 1 passenger is required'
                  },
                  max: {
                    value: 20,
                    message: 'Maximum 20 passengers allowed'
                  }
                })}
                aria-invalid={errors.passengers ? 'true' : 'false'}
              />
              {errors.passengers && (
                <p className="text-red-500 text-sm mt-1" role="alert">
                  {errors.passengers.message}
                </p>
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <MembershipOptions />
            
            <div className="space-y-2">
              <label htmlFor="specialRequests" className="block text-gray-700 font-medium">
                Special Requests (Optional)
              </label>
              <textarea
                id="specialRequests"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0077B6]"
                placeholder="Any special requirements or notes for your journey"
                {...register('specialRequests')}
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-[#0077B6]"
                    {...register('termsAccepted', { required: 'You must accept the terms and conditions' })}
                    aria-invalid={errors.termsAccepted ? 'true' : 'false'}
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="text-gray-600">
                    I agree to the <a href="#" className="text-[#0077B6] hover:underline">Terms of Service</a> and <a href="#" className="text-[#0077B6] hover:underline">Privacy Policy</a>
                  </label>
                  {errors.termsAccepted && (
                    <p className="text-red-500 text-sm mt-1" role="alert">
                      {errors.termsAccepted.message}
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <TrustIndicators />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center font-montserrat text-gray-900 mb-8">
          Your Journey Begins Here
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Column - Form and Steps */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <StepIndicator currentStep={currentStep} totalSteps={3} />
            
            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
              {renderFormStep()}
              
              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="px-6 py-3 border border-[#0077B6] text-[#0077B6] rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:ring-opacity-50"
                  >
                    Back
                  </button>
                )}
                
                <button
                  type="submit"
                  className={`px-6 py-3 bg-[#0077B6] text-white rounded-md hover:bg-[#005f92] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:ring-opacity-50 ${currentStep === 1 ? 'ml-auto' : ''} animate-pulse-subtle`}
                >
                  {currentStep < 3 ? 'Continue' : 'Book Now'}
                </button>
              </div>
            </form>
            
            {currentStep === 1 && (
              <div className="mt-8 text-center">
                <button 
                  type="button"
                  className="inline-flex items-center text-[#0077B6] hover:underline focus:outline-none"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd"></path>
                  </svg>
                  Request Custom Consultation
                </button>
              </div>
            )}
          </div>
          
          {/* Right Column - Supporting Information */}
          <div className="space-y-10">
            <ProcessVisualization />
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-montserrat text-xl font-semibold mb-4">Why Book with Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Exclusive fleet of luxury vehicles</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Professional, experienced chauffeurs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">24/7 concierge service</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Complimentary amenities during your journey</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-[#0077B6] mt-1 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="text-gray-700">Flexible cancellation policy</span>
                </li>
              </ul>
            </div>
            
            <ContactInfo />
            
            <NewsletterSignup />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionBookingPreview;
