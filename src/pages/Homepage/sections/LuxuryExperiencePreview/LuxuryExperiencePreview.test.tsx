
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LuxuryExperiencePreview from './LuxuryExperiencePreview';

// Mock dependencies
jest.mock('react-slick', () => {
  return function MockSlider({ children }: { children: React.ReactNode }) {
    return <div data-testid="mock-slider">{children}</div>;
  };
});

jest.mock('react-modal', () => {
  return function MockModal({ isOpen, children, onRequestClose }: { isOpen: boolean, children: React.ReactNode, onRequestClose: () => void }) {
    return isOpen ? (
      <div data-testid="mock-modal">
        {children}
        <button onClick={onRequestClose} data-testid="close-modal-button">Close</button>
      </div>
    ) : null;
  };
});

// Mock setAppElement to avoid console warnings
jest.mock('react-modal', () => {
  const actual = jest.requireActual('react-modal');
  return {
    ...actual,
    setAppElement: jest.fn(),
  };
});

const mockProps = {
  images: [
    { src: '/image1.jpg', alt: 'Luxury helicopter interior' },
    { src: '/image2.jpg', alt: 'Exclusive helipad', caption: 'Our private helipad facilities' }
  ],
  experiencePoints: [
    {
      icon: <span>🛋️</span>,
      title: 'Premium Comfort',
      description: 'Enjoy spacious seating and climate control in our luxury helicopters'
    },
    {
      icon: <span>🥂</span>,
      title: 'VIP Service',
      description: 'Experience concierge service and personalized attention throughout your journey'
    }
  ],
  safetyCredentials: [
    {
      icon: <span>✓</span>,
      title: 'FAA Certified',
      details: 'Our pilots have over 10,000 combined flight hours with perfect safety records'
    }
  ],
  testimonials: [
    {
      name: 'Jane Smith',
      role: 'CEO, Tech Innovations',
      quote: 'HeliHop transformed my business travel. The time saved and comfort provided is unmatched.'
    }
  ],
  partnerLogos: [
    { src: '/partner1.png', alt: 'Luxury Hotel Partner' }
  ]
};

describe('LuxuryExperiencePreview', () => {
  test('renders headline correctly', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    expect(screen.getByText('Elevate Your Journey Experience')).toBeInTheDocument();
  });

  test('renders experience points', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    expect(screen.getByText('Premium Comfort')).toBeInTheDocument();
    expect(screen.getByText('VIP Service')).toBeInTheDocument();
  });

  test('renders testimonials', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
    expect(screen.getByText('CEO, Tech Innovations')).toBeInTheDocument();
    expect(screen.getByText(/HeliHop transformed my business travel/)).toBeInTheDocument();
  });

  test('renders safety credentials', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    expect(screen.getByText('FAA Certified')).toBeInTheDocument();
  });

  test('renders partner logos section', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    expect(screen.getByText('Our Luxury Partners')).toBeInTheDocument();
  });

  test('renders CTA button', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    expect(screen.getByRole('button', { name: /Schedule a Consultation/i })).toBeInTheDocument();
  });

  test('opens modal when safety credential is clicked', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    
    // Click the safety credential
    const safetyBadge = screen.getByText('FAA Certified');
    fireEvent.click(safetyBadge);
    
    // Modal should be visible
    expect(screen.getByTestId('mock-modal')).toBeInTheDocument();
    expect(screen.getByText('Our pilots have over 10,000 combined flight hours with perfect safety records')).toBeInTheDocument();
  });

  test('closes modal when close button is clicked', () => {
    render(<LuxuryExperiencePreview {...mockProps} />);
    
    // Open the modal
    const safetyBadge = screen.getByText('FAA Certified');
    fireEvent.click(safetyBadge);
    
    // Modal should be visible
    expect(screen.getByTestId('mock-modal')).toBeInTheDocument();
    
    // Close the modal
    const closeButton = screen.getByTestId('close-modal-button');
    fireEvent.click(closeButton);
    
    // Modal should not be visible
    expect(screen.queryByTestId('mock-modal')).not.toBeInTheDocument();
  });

  test('renders with empty props without crashing', () => {
    render(<LuxuryExperiencePreview />);
    expect(screen.getByText('Elevate Your Journey Experience')).toBeInTheDocument();
  });
});
  