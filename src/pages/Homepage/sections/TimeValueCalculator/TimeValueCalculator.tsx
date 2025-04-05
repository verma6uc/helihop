
import { useState, useEffect } from 'react';
import { useDebounce } from '../../../../hooks/useDebounce';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateTimeSavings, calculateMoneySavings } from './utils/calculator';
import TestimonialCard from './components/TestimonialCard';

/**
 * TimeValueCalculator Component
 * 
 * An interactive calculator that helps users quantify the value of time saved
 * by using HeliHop's helicopter services compared to traditional transportation.
 */
const TimeValueCalculator = () => {
  const [calculationValues, setCalculationValues] = useState({
    hourlyRate: 250,
    destination: 'manhattan',
    tripFrequency: 'weekly'
  });
  
  const debouncedValues = useDebounce(calculationValues, 300);
  const [results, setResults] = useState({
    timeSaved: 0,
    moneySaved: 0,
    groundTime: 0,
    heliTime: 0,
    annualSavings: 0
  });
  
  // Update calculations when inputs change
  useEffect(() => {
    const timeSaved = calculateTimeSavings(debouncedValues.destination);
    const moneySaved = calculateMoneySavings(timeSaved, debouncedValues.hourlyRate);
    const frequencyMultiplier = debouncedValues.tripFrequency === 'daily' ? 260 : 
                               debouncedValues.tripFrequency === 'weekly' ? 52 : 12;
    
    setResults({
      timeSaved,
      moneySaved,
      groundTime: timeSaved * 1.5, // Assuming ground travel is 1.5x helicopter time
      heliTime: timeSaved * 0.5,
      annualSavings: moneySaved * frequencyMultiplier
    });
  }, [debouncedValues]);

  const testimonials = [
    {
      quote: "HeliHop lets me attend two more meetings each day. That\'s worth millions to our company annually.",
      author: "Sarah C., CEO",
      company: "Fortune 500 Tech Company"
    },
    {
      quote: "I calculated that using HeliHop pays for itself just in productivity gains alone.",
      author: "Michael R.",
      company: "Investment Banking Executive"
    },
    {
      quote: "Time is the only commodity we can\'t make more of. HeliHop gives me back precious hours with my family.",
      author: "David L.",
      company: "Media Executive"
    }
  ];

  return (
    <section id="time-value-calculator" className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat text-center mb-8 text-gray-900">
          What's Your Time Worth?
        </h2>
        
        <p className="text-lg text-center font-lato text-gray-700 mb-12 max-w-3xl mx-auto">
          Discover how much time and money you could save by choosing HeliHop for your travel needs. 
          Our calculator helps you quantify the value of your most precious resource: time.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Calculator Form */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <CalculatorForm 
              values={calculationValues}
              onChange={setCalculationValues}
            />
          </div>

          {/* Results Display */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
            <ResultsDisplay results={results} />
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold font-montserrat text-center mb-8 text-gray-800">
            What Executives Are Saying
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                company={testimonial.company}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-lg font-lato text-gray-700 mb-6">
            Ready to start saving time and increasing your productivity?
          </p>
          <button 
            className="bg-[#FF5733] hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md"
            aria-label="Book a consultation"
          >
            Book a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default TimeValueCalculator;
