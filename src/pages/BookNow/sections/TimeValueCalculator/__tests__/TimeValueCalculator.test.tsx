
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import TimeValueCalculator from '../TimeValueCalculator';
import { calculateTimeSavings, formatCurrency } from '../utils/calculator';

// Mock the react-intersection-observer
jest.mock('react-intersection-observer', () => ({
  InView: ({ children, onChange }: any) => {
    // Simulate component coming into view immediately
    onChange(true);
    return children;
  }
}));

// Mock the chart.js component to avoid canvas issues in tests
jest.mock('react-chartjs-2', () => ({
  Bar: () => <div data-testid="mock-bar-chart">Bar Chart</div>
}));

describe('TimeValueCalculator', () => {
  test('renders the component with correct heading', () => {
    render(<TimeValueCalculator />);
    expect(screen.getByText("What's Your Time Worth?")).toBeInTheDocument();
  });

  test('calculator form renders correctly', () => {
    render(<TimeValueCalculator />);
    expect(screen.getByLabelText(/Your Hourly Value/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Your Common Route/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Monthly Trip Frequency/i)).toBeInTheDocument();
  });

  test('results display shows up', async () => {
    render(<TimeValueCalculator />);
    expect(screen.getByText(/Your Time Value Results/i)).toBeInTheDocument();
    expect(screen.getByText(/Time Saved Per Trip/i)).toBeInTheDocument();
    expect(screen.getByText(/Value Saved Per Trip/i)).toBeInTheDocument();
    expect(screen.getByText(/Annual Value Saved/i)).toBeInTheDocument();
  });

  test('testimonials section is displayed', () => {
    render(<TimeValueCalculator />);
    expect(screen.getByText(/What Our Clients Say/i)).toBeInTheDocument();
    // Check for at least one testimonial
    expect(screen.getByText(/HeliHop saves me 4 hours each week on commuting/i)).toBeInTheDocument();
  });
});

describe('calculator utility functions', () => {
  test('calculateTimeSavings returns expected values', () => {
    const params = {
      hourlyRate: 500,
      groundTime: 75,
      heliTime: 12,
      tripFrequency: 4
    };
    
    const result = calculateTimeSavings(params);
    
    expect(result.timeSaved).toBe(63); // 75 - 12
    expect(result.moneySaved).toBe(525); // 63 minutes * (500/60)
    expect(result.annualSavings).toBe(25200); // 525 * 4 * 12
  });
  
  test('formatCurrency formats numbers correctly', () => {
    expect(formatCurrency(1000)).toBe('$1,000');
    expect(formatCurrency(1000.50)).toBe('$1,001'); // rounds up
    expect(formatCurrency(0)).toBe('$0');
  });
});
