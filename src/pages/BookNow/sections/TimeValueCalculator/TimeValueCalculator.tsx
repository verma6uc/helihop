
import { useState, useEffect } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { NumericFormat } from 'react-number-format';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { InView } from 'react-intersection-observer';
import useDebounce from '../../../../hooks/useDebounce';
import { calculateTimeSavings, formatCurrency } from './utils/calculator';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

/**
 * TimeValueCalculator Section Component
 * Allows users to calculate the monetary value of time saved by using HeliHop
 */
const TimeValueCalculator = () => {
  const [isComponentVisible, setIsComponentVisible] = useState(false);
  const [calculationResult, setCalculationResult] = useState({
    timeSaved: 0,
    moneySaved: 0,
    annualSavings: 0,
  });
  
  return (
    <section id="time-value-calculator" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <InView 
          as="div" 
          onChange={(inView) => setIsComponentVisible(inView)}
          threshold={0.1}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isComponentVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-gray-900 mb-4">
              What&apos;s Your Time Worth?
            </h2>
            <p className="text-lg font-lato text-gray-700 max-w-3xl mx-auto">
              Calculate how much time and money you could save by choosing HeliHop for your travel needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <CalculatorForm 
              onCalculate={setCalculationResult} 
              isVisible={isComponentVisible} 
            />
            
            <ResultsDisplay 
              results={calculationResult} 
              isVisible={isComponentVisible}
            />
          </div>
          
          <div className="mt-16">
            <TestimonialCarousel isVisible={isComponentVisible} />
          </div>
        </InView>
      </div>
    </section>
  );
};

/**
 * Testimonial Carousel Component
 * Displays testimonials from executives about time savings
 */
const TestimonialCarousel = ({ isVisible }: { isVisible: boolean }) => {
  const testimonials = [
    {
      quote: "HeliHop saves me 4 hours each week on commuting. That\'s 200+ hours annually I can reinvest in my business or with family.",
      author: "Sarah J., CEO",
    },
    {
      quote: "Time is the one resource I can\'t get back. Using HeliHop has been a game-changer for my productivity and work-life balance.",
      author: "Michael T., CFO",
    },
    {
      quote: "The ROI is a no-brainer for executives. My billable hour rate makes HeliHop an obvious efficiency investment.",
      author: "David R., Managing Director",
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gray-50 rounded-lg p-8"
    >
      <h3 className="text-2xl font-montserrat font-semibold text-center mb-8 text-gray-800">What Our Clients Say</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col"
          >
            <div className="flex-grow">
              <blockquote className="text-gray-700 font-lato italic mb-4">
                "{testimonial.quote}"
              </blockquote>
            </div>
            <p className="text-right font-semibold text-gray-900">{testimonial.author}</p>
            <div className="absolute top-0 left-0 w-2 h-full bg-secondary rounded-l-lg"></div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TimeValueCalculator;
