
import { useMemo } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Doughnut, Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

interface ResultsDisplayProps {
  results: {
    timeSaved: number;
    moneySaved: number;
    groundTime: number;
    heliTime: number;
    annualSavings: number;
  };
}

/**
 * ResultsDisplay Component
 * 
 * Displays the calculation results with visualizations.
 */
const ResultsDisplay = ({ results }: ResultsDisplayProps) => {
  const { timeSaved, moneySaved, groundTime, heliTime, annualSavings } = results;
  
  // Format the currency values
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Format the time values (convert minutes to hours and minutes)
  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    
    if (hours === 0) {
      return `${mins} min`;
    } else if (mins === 0) {
      return `${hours} hr`;
    } else {
      return `${hours} hr ${mins} min`;
    }
  };

  // Time comparison chart data
  const timeComparisonData = useMemo(() => ({
    labels: ['Ground Transport', 'HeliHop'],
    datasets: [
      {
        data: [groundTime, heliTime],
        backgroundColor: ['#777777', '#0077B6'],
        borderColor: ['#666666', '#006699'],
        borderWidth: 1,
        hoverOffset: 4
      }
    ]
  }), [groundTime, heliTime]);

  // Annual savings chart data
  const annualSavingsData = useMemo(() => ({
    labels: ['Monthly', 'Quarterly', 'Annual'],
    datasets: [
      {
        label: 'Time Value Savings',
        data: [annualSavings / 12, annualSavings / 4, annualSavings],
        backgroundColor: '#FF5733',
        borderColor: '#E74C3C',
        borderWidth: 1
      }
    ]
  }), [annualSavings]);

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Projected Savings Over Time',
        font: {
          family: 'Montserrat',
          size: 16,
          weight: 'bold' as const
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value: number) => formatCurrency(value)
        }
      }
    }
  };

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold font-montserrat text-gray-800">Your Results</h3>
      
      {/* Key Metrics */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 font-lato">Time Saved Per Trip</p>
          <p className="text-2xl font-bold font-montserrat text-[#0077B6]">
            {formatTime(timeSaved)}
          </p>
        </div>
        <div className="bg-slate-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500 font-lato">Value Per Trip</p>
          <p className="text-2xl font-bold font-montserrat text-[#0077B6]">
            {formatCurrency(moneySaved)}
          </p>
        </div>
        <div className="col-span-2 bg-[#FF5733] bg-opacity-10 p-4 rounded-lg">
          <p className="text-sm text-gray-600 font-lato">Annual Value Savings</p>
          <p className="text-3xl font-bold font-montserrat text-[#FF5733]">
            {formatCurrency(annualSavings)}
          </p>
        </div>
      </div>
      
      {/* Visualizations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Time Comparison Donut Chart */}
        <div className="bg-white p-4 rounded-lg">
          <h4 className="text-lg font-bold font-montserrat text-gray-800 mb-4 text-center">
            Travel Time Comparison
          </h4>
          <div className="h-56 relative">
            <Doughnut 
              data={timeComparisonData} 
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
              aria-label="Chart comparing travel time between ground transport and HeliHop"
            />
          </div>
          <div className="mt-4 text-center text-sm text-gray-600 font-lato">
            <p>HeliHop saves you {formatTime(timeSaved)} per trip</p>
          </div>
        </div>
        
        {/* Annual Savings Bar Chart */}
        <div className="bg-white p-4 rounded-lg">
          <h4 className="text-lg font-bold font-montserrat text-gray-800 mb-4 text-center">
            Financial Impact
          </h4>
          <div className="h-56 relative">
            <Bar 
              data={annualSavingsData} 
              options={barOptions}
              aria-label="Bar chart showing projected savings over time"
            />
          </div>
        </div>
      </div>
      
      {/* Insight Message */}
      <div className="bg-[#0077B6] bg-opacity-10 p-4 rounded-lg">
        <p className="text-gray-800 font-lato">
          By choosing HeliHop, you save <span className="font-bold">{formatTime(timeSaved)}</span> per trip, 
          which equates to <span className="font-bold">{formatCurrency(moneySaved)}</span> in value. 
          Over a year, this could save you up to <span className="font-bold">{formatCurrency(annualSavings)}</span> 
          in productive time.
        </p>
      </div>
    </div>
  );
};

export default ResultsDisplay;
