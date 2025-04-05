
import { useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NumericFormat } from 'react-number-format';
import { motion } from 'framer-motion';
import useDebounce from '../../../../../hooks/useDebounce';
import { calculateTimeSavings } from '../utils/calculator';

// Define common routes for selection
const COMMON_ROUTES = [
  { id: 'manhattan-jfk', label: 'Manhattan to JFK', distance: 30, groundTime: 75, heliTime: 12 },
  { id: 'manhattan-ewr', label: 'Manhattan to Newark', distance: 25, groundTime: 60, heliTime: 10 },
  { id: 'hamptons-manhattan', label: 'Hamptons to Manhattan', distance: 100, groundTime: 180, heliTime: 30 },
  { id: 'westchester-manhattan', label: 'Westchester to Manhattan', distance: 35, groundTime: 90, heliTime: 15 },
  { id: 'manhattan-lga', label: 'Manhattan to LaGuardia', distance: 20, groundTime: 45, heliTime: 8 },
];

// Validation schema for the form
const CalculatorSchema = Yup.object().shape({
  hourlyRate: Yup.number()
    .min(100, 'Minimum rate is $100')
    .max(10000, 'Maximum rate is $10,000')
    .required('Required'),
  tripFrequency: Yup.number()
    .min(1, 'Minimum is 1 trip')
    .max(30, 'Maximum is 30 trips')
    .required('Required'),
  routeId: Yup.string().required('Please select a route'),
});

interface CalculatorFormProps {
  onCalculate: (result: { timeSaved: number; moneySaved: number; annualSavings: number }) => void;
  isVisible: boolean;
}

/**
 * CalculatorForm Component
 * Form for users to input their hourly rate, route, and trip frequency
 */
const CalculatorForm = ({ onCalculate, isVisible }: CalculatorFormProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 md:p-8"
    >
      <h3 className="text-xl md:text-2xl font-montserrat font-semibold mb-6 text-gray-800">Calculate Your Savings</h3>
      
      <Formik
        initialValues={{
          hourlyRate: 500,
          tripFrequency: 4,
          routeId: 'manhattan-jfk',
        }}
        validationSchema={CalculatorSchema}
        onSubmit={() => {}}
      >
        {({ values, errors, touched, setFieldValue }) => {
          // Use debounce to prevent excessive calculations during input
          const debouncedValues = useDebounce(values, 300);
          
          useEffect(() => {
            const selectedRoute = COMMON_ROUTES.find(route => route.id === debouncedValues.routeId);
            
            if (selectedRoute) {
              const { timeSaved, moneySaved, annualSavings } = calculateTimeSavings({
                hourlyRate: debouncedValues.hourlyRate,
                groundTime: selectedRoute.groundTime,
                heliTime: selectedRoute.heliTime,
                tripFrequency: debouncedValues.tripFrequency
              });
              
              onCalculate({ timeSaved, moneySaved, annualSavings });
            }
          }, [debouncedValues]);

          return (
            <Form className="space-y-6">
              {/* Hourly Rate Input */}
              <div>
                <label htmlFor="hourlyRate" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Hourly Value (USD)
                </label>
                <NumericFormat
                  id="hourlyRate"
                  name="hourlyRate"
                  value={values.hourlyRate}
                  onValueChange={(values) => {
                    setFieldValue('hourlyRate', values.floatValue);
                  }}
                  thousandSeparator={true}
                  prefix="$"
                  className={`w-full px-4 py-2 border ${
                    errors.hourlyRate && touched.hourlyRate ? 'border-red-500' : 'border-gray-300'
                  } rounded-md focus:outline-none focus:ring-2 focus:ring-primary`}
                  placeholder="$500"
                  aria-describedby="hourlyRateHelp"
                />
                <div id="hourlyRateHelp" className="mt-1 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Minimum: $100</span>
                  <span className="text-sm text-gray-500">Maximum: $10,000</span>
                </div>
                <ErrorMessage name="hourlyRate" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Common Routes Selection */}
              <div>
                <label htmlFor="routeId" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Your Common Route
                </label>
                <Field
                  as="select"
                  id="routeId"
                  name="routeId"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Select your common route"
                >
                  {COMMON_ROUTES.map((route) => (
                    <option key={route.id} value={route.id}>
                      {route.label} ({route.groundTime} min by car, {route.heliTime} min by helicopter)
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="routeId" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              {/* Trip Frequency Slider */}
              <div>
                <label htmlFor="tripFrequency" className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Trip Frequency
                </label>
                <div className="flex items-center space-x-4">
                  <input
                    type="range"
                    id="tripFrequency"
                    name="tripFrequency"
                    min="1"
                    max="30"
                    value={values.tripFrequency}
                    onChange={(e) => setFieldValue('tripFrequency', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
                  />
                  <span className="w-12 text-center font-medium">{values.tripFrequency}</span>
                </div>
                <div className="mt-1 flex justify-between items-center">
                  <span className="text-sm text-gray-500">1 trip</span>
                  <span className="text-sm text-gray-500">30 trips</span>
                </div>
                <ErrorMessage name="tripFrequency" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="py-2 px-4 bg-gray-50 rounded-md">
                <p className="text-sm text-gray-600 italic">
                  Adjust the sliders above to see how much time and money you could save with HeliHop.
                </p>
              </div>
            </Form>
          );
        }}
      </Formik>
    </motion.div>
  );
};

export default CalculatorForm;
