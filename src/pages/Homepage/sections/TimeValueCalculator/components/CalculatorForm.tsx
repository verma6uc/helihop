
import { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { NumericFormat } from 'react-number-format';

interface CalculatorFormProps {
  values: {
    hourlyRate: number;
    destination: string;
    tripFrequency: string;
  };
  onChange: (values: {
    hourlyRate: number;
    destination: string;
    tripFrequency: string;
  }) => void;
}

/**
 * CalculatorForm Component
 * 
 * A form that collects user input for the time value calculator.
 */
const CalculatorForm = ({ values, onChange }: CalculatorFormProps) => {
  const destinations = [
    { value: 'manhattan', label: 'Manhattan' },
    { value: 'hamptons', label: 'The Hamptons' },
    { value: 'philly', label: 'Philadelphia' },
    { value: 'boston', label: 'Boston' },
    { value: 'dc', label: 'Washington D.C.' }
  ];

  const frequencies = [
    { value: 'daily', label: 'Daily (5 days/week)' },
    { value: 'weekly', label: 'Weekly' },
    { value: 'monthly', label: 'Monthly' }
  ];

  const validationSchema = Yup.object({
    hourlyRate: Yup.number()
      .min(50, 'Minimum rate is $50/hour')
      .max(10000, 'Maximum rate is $10,000/hour')
      .required('Required'),
    destination: Yup.string().required('Please select a destination'),
    tripFrequency: Yup.string().required('Please select a frequency')
  });

  const formik = useFormik({
    initialValues: values,
    validationSchema,
    onSubmit: (values) => {
      // This form doesn't actually submit - it updates in real time
      onChange(values);
    },
    enableReinitialize: true
  });

  // Update parent component when form values change
  useEffect(() => {
    if (formik.dirty && !formik.isSubmitting) {
      onChange(formik.values);
    }
  }, [formik.values]);

  return (
    <form className="space-y-6" onSubmit={formik.handleSubmit}>
      <div className="space-y-2">
        <label 
          htmlFor="hourlyRate" 
          className="block text-lg font-medium font-lato text-gray-700"
        >
          What is your hourly value? ($)
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="text-gray-500 font-lato">$</span>
          </div>
          <NumericFormat
            id="hourlyRate"
            name="hourlyRate"
            thousandSeparator={true}
            valueIsNumericString={true}
            value={formik.values.hourlyRate}
            onValueChange={(values) => {
              formik.setFieldValue('hourlyRate', values.floatValue || 0);
            }}
            className={`block w-full pl-7 pr-12 py-3 rounded-lg font-lato 
              ${formik.touched.hourlyRate && formik.errors.hourlyRate 
                ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
                : 'border-gray-300 focus:ring-[#0077B6] focus:border-[#0077B6]'}`}
            placeholder="250"
            aria-describedby="hourlyRateHelp"
          />
        </div>
        {formik.touched.hourlyRate && formik.errors.hourlyRate && (
          <p className="mt-1 text-red-500 text-sm">{formik.errors.hourlyRate}</p>
        )}
        <p id="hourlyRateHelp" className="text-sm text-gray-500 mt-1">
          Consider your salary, billable rate, or the value of your productive time.
        </p>
      </div>

      {/* Destination Selector */}
      <div className="space-y-2">
        <label 
          htmlFor="destination" 
          className="block text-lg font-medium font-lato text-gray-700"
        >
          Common destination
        </label>
        <select
          id="destination"
          name="destination"
          value={formik.values.destination}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={`block w-full px-4 py-3 rounded-lg font-lato 
            ${formik.touched.destination && formik.errors.destination 
              ? 'border-red-500 focus:ring-red-500 focus:border-red-500' 
              : 'border-gray-300 focus:ring-[#0077B6] focus:border-[#0077B6]'}`}
          aria-describedby="destinationHelp"
        >
          {destinations.map((dest) => (
            <option key={dest.value} value={dest.value}>
              {dest.label}
            </option>
          ))}
        </select>
        {formik.touched.destination && formik.errors.destination && (
          <p className="mt-1 text-red-500 text-sm">{formik.errors.destination}</p>
        )}
        <p id="destinationHelp" className="text-sm text-gray-500 mt-1">
          Select a frequent travel destination to calculate time savings.
        </p>
      </div>

      {/* Trip Frequency */}
      <div className="space-y-2">
        <label className="block text-lg font-medium font-lato text-gray-700">
          How often do you make this trip?
        </label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {frequencies.map((freq) => (
            <div key={freq.value} className="relative">
              <input
                type="radio"
                id={freq.value}
                name="tripFrequency"
                value={freq.value}
                checked={formik.values.tripFrequency === freq.value}
                onChange={formik.handleChange}
                className="absolute opacity-0 w-0 h-0"
              />
              <label
                htmlFor={freq.value}
                className={`block w-full text-center py-3 px-4 rounded-lg cursor-pointer transition-colors duration-200 
                  ${formik.values.tripFrequency === freq.value 
                    ? 'bg-[#0077B6] text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {freq.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Slider for Hourly Rate */}
      <div className="space-y-2 pt-4">
        <label htmlFor="hourlyRateSlider" className="block text-md font-medium font-lato text-gray-700">
          Adjust hourly value: ${formik.values.hourlyRate}
        </label>
        <input
          type="range"
          id="hourlyRateSlider"
          min="50"
          max="1000"
          step="10"
          value={formik.values.hourlyRate}
          onChange={(e) => {
            formik.setFieldValue('hourlyRate', parseInt(e.target.value));
          }}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#0077B6]"
        />
        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>$50</span>
          <span>$250</span>
          <span>$500</span>
          <span>$750</span>
          <span>$1000</span>
        </div>
      </div>
    </form>
  );
};

export default CalculatorForm;
