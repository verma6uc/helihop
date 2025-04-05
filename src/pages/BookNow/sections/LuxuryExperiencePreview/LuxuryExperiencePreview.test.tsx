
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LuxuryExperiencePreview from './LuxuryExperiencePreview';

// Mock react-image-gallery
jest.mock('react-image-gallery', () => {
  return function MockImageGallery({ items, renderItem }: any) {
    return (
      <div data-testid="mock-image-gallery">
        {items && items.length > 0 && renderItem(items[0])}
      </div>
    );
  };
});

// Mock react-modal
jest.mock('react-modal', () => {
  return function MockModal({ isOpen, children }: any) {
    return isOpen ? <div data-testid="mock-modal">{children}</div> : null;
  };
});

describe('LuxuryExperiencePreview', () => {
  test('renders the section header', () => {
    render(<LuxuryExperiencePreview />);
    
    expect(screen.getByText('Elevate Your Journey Experience')).toBeInTheDocument();
    expect(
      screen.getByText(/Beyond transportation, HeliHop offers an unparalleled luxury experience/)
    ).toBeInTheDocument();
  });

  test('renders the image gallery', () => {
    render(<LuxuryExperiencePreview />);
    
    expect(screen.getByTestId('mock-image-gallery')).toBeInTheDocument();
  });

  test('renders experience features', () => {
    render(<LuxuryExperiencePreview />);
    
    expect(screen.getByText('Premium Comfort')).toBeInTheDocument();
    expect(screen.getByText('Concierge Service')).toBeInTheDocument();
    expect(screen.getByText('Exclusive Access')).toBeInTheDocument();
  });

  test('renders safety information section', () => {
    render(<LuxuryExperiencePreview />);
    
    expect(screen.getByText('Uncompromising Safety Standards')).toBeInTheDocument();
    expect(
      screen.getByText(/At HeliHop, your safety is our absolute priority/)
    ).toBeInTheDocument();
  });

  test('opens safety modal when learn more is clicked', () => {
    render(<LuxuryExperiencePreview />);
    
    const learnMoreButton = screen.getByText(/Learn more about our comprehensive safety measures/);
    fireEvent.click(learnMoreButton);
    
    expect(screen.getByTestId('mock-modal')).toBeInTheDocument();
  });

  test('renders testimonials section', () => {
    render(<LuxuryExperiencePreview />);
    
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /expanded/ })).toHaveLength(3);
  });

  test('renders CTA section', () => {
    render(<LuxuryExperiencePreview />);
    
    expect(screen.getByText('Ready to Experience Luxury in the Skies?')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Schedule a personal consultation' })
    ).toBeInTheDocument();
  });
});
  