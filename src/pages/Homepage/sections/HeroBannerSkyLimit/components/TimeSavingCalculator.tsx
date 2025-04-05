
import React from 'react';

interface TimeSavingCalculatorProps {
  locations: string[];
  selectedOrigin: string;
  selectedDestination: string;
  onOriginChange: (origin: string) => void;
  onDestinationChange: (destination: string) => void;
}

/**
 * Calculator component that allows users to select origin and destination
 * to visualize time savings when using helicopter service
 */
const TimeSavingCalculator: React.FC<TimeSavingCalculatorProps> = ({
  locations,
  selectedOrigin,
  selectedDestination,
  onOriginChange,
  onDestinationChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Origin Selection */}
        <div className="space-y-2">
          <label 
            htmlFor="origin" 
            className="block font-lato text-white text-sm font-medium"
          >
            Select Origin
          </label>
          <select
            id="origin"
            value={selectedOrigin}
            onChange={(e) => onOriginChange(e.target.value)}
            className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-4 py-3 font-lato 
            focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent
            placeholder-white/50 appearance-none"
            aria-label="Select your departure location"
          >
            <option value="" className="bg-gray-800 text-white">Select starting point</option>
            {locations.map((location) => (
              <option 
                key={location} 
                value={location}
                disabled={location === selectedDestination}
                className="bg-gray-800 text-white"
              >
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Destination Selection */}
        <div className="space-y-2">
          <label 
            htmlFor="destination" 
            className="block font-lato text-white text-sm font-medium"
          >
            Select Destination
          </label>
          <select
            id="destination"
            value={selectedDestination}
            onChange={(e) => onDestinationChange(e.target.value)}
            className="w-full bg-white/20 border border-white/30 text-white rounded-lg px-4 py-3 font-lato 
            focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:border-transparent
            placeholder-white/50 appearance-none"
            aria-label="Select your arrival location"
          >
            <option value="" className="bg-gray-800 text-white">Select destination</option>
            {locations.map((location) => (
              <option 
                key={location} 
                value={location}
                disabled={location === selectedOrigin}
                className="bg-gray-800 text-white"
              >
                {location}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Error message if same location selected */}
      {selectedOrigin && selectedDestination && selectedOrigin === selectedDestination && (
        <p className="text-[#FFDD00] font-lato text-sm">
          Please select different locations for origin and destination
        </p>
      )}
      
      {/* Helper text */}
      {!(selectedOrigin && selectedDestination) && (
        <p className="text-white/70 font-lato text-sm italic">
          Select locations to calculate your potential time savings
        </p>
      )}
    </div>
  );
};

export default TimeSavingCalculator;
