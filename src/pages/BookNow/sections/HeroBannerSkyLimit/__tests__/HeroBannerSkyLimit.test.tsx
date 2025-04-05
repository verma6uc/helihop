
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeroBannerSkyLimit from '../HeroBannerSkyLimit';

// Mock the dependencies
jest.mock('react-intersection-observer', () => ({
  useInView: () => ({ ref: jest.fn(), inView: true }),
}));

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren) => <div {...props}>{children}</div>,
    button: ({ children, ...props }: React.PropsWithChildren) => <button {...props}>{children}</button>,
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => <>{children}</>,
}));

jest.mock('../components/MapVisualization', () => {
  return {
    __esModule: true,
    default: ({ selectedRoute }: { selectedRoute: any }) => (
      <div data-testid="map-visualization">
        {selectedRoute ? `Map for ${selectedRoute.name}` : 'No route selected'}
      </div>
    ),
  };
});

jest.mock('../components/TimeSavingCalculator', () => {
  return {
    __esModule: true,
    default: ({ routes, onRouteSelect, selectedRoute }: { routes: any[], onRouteSelect: Function, selectedRoute: any }) => (
      <div data-testid="time-saving-calculator">
        <select 
          data-testid="route-selector" 
          onChange={(e) => {
            const routeId = e.target.value;
            const route = routes.find((r: any) => r.id === routeId) || null;
            onRouteSelect(route);
          }}
        >
          <option value="">Select route</option>
          {routes.map((route: any) => (
            <option key={route.id} value={route.id}>{route.name}</option>
          ))}
        </select>
        {selectedRoute && <div data-testid="selected-route">{selectedRoute.name}</div>}
      </div>
    ),
  };
});

describe('HeroBannerSkyLimit', () => {
  test('renders the hero banner with correct title and subtitle', () => {
    render(<HeroBannerSkyLimit />);
    
    expect(screen.getByText('Redefine Your Commute with Intelligent Aerial Mobility')).toBeInTheDocument();
    expect(screen.getByText('Save hours, not minutes, with optimized helicopter routing')).toBeInTheDocument();
  });

  test('renders the calculator and map components', () => {
    render(<HeroBannerSkyLimit />);
    
    expect(screen.getByTestId('time-saving-calculator')).toBeInTheDocument();
    expect(screen.getByTestId('map-visualization')).toBeInTheDocument();
  });

  test('renders the CTA buttons', () => {
    render(<HeroBannerSkyLimit />);
    
    expect(screen.getByText('Book Your Flight')).toBeInTheDocument();
    expect(screen.getByText('Explore Routes')).toBeInTheDocument();
  });

  test('selecting a route updates the state', () => {
    render(<HeroBannerSkyLimit />);
    
    const routeSelector = screen.getByTestId('route-selector');
    
    // Initially no route is selected
    expect(screen.queryByTestId('selected-route')).not.toBeInTheDocument();
    
    // Select first route (assuming route data structure matches)
    fireEvent.change(routeSelector, { target: { value: 'jfk-manhattan' } });
    
    // Now a route should be selected and displayed
    expect(screen.getByTestId('selected-route')).toBeInTheDocument();
  });
});
  