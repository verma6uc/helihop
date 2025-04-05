
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

/**
 * BookingPreview component 
 * 
 * A simplified visual representation of the booking process
 */
export const BookingPreview: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  const [selectedRoute, setSelectedRoute] = React.useState<string>('');
  
  // Example available routes
  const availableRoutes = [
    { id: 'jfk-manhattan', name: 'JFK → Manhattan' },
    { id: 'lga-manhattan', name: 'LaGuardia → Manhattan' },
    { id: 'manhattan-hamptons', name: 'Manhattan → Hamptons' },
    { id: 'manhattan-jersey', name: 'Manhattan → Jersey City' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-montserrat font-semibold text-gray-800 mb-4">
        Quick Booking Preview
      </h3>
      
      <div className="space-y-5">
        <div>
          <label htmlFor="route-select" className="block mb-2 text-sm font-medium font-lato text-gray-700">
            Select Route
          </label>
          <select
            id="route-select"
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077B6] focus:outline-none font-lato"
          >
            <option value="">Choose your route</option>
            {availableRoutes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.name}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="date-picker" className="block mb-2 text-sm font-medium font-lato text-gray-700">
            Select Date
          </label>
          <DatePicker
            id="date-picker"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()}
            placeholderText="Select your travel date"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0077B6] focus:outline-none font-lato"
            wrapperClassName="w-full"
          />
        </div>
        
        <div className="pt-4">
          <div className="flex items-center justify-between">
            <span className="text-sm font-lato text-gray-500">Available times:</span>
            <span className="text-xs font-lato text-gray-400">All times in EDT</span>
          </div>
          
          <div className="mt-2 grid grid-cols-3 gap-2">
            {['08:30 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM'].map((time) => (
              <button
                key={time}
                className="py-2 px-3 border border-gray-200 rounded-md text-sm font-lato hover:bg-gray-50 focus:ring-2 focus:ring-[#0077B6] focus:outline-none transition-colors"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
