
import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import MembershipTierShowcase from './MembershipTierShowcase';

// Mock framer-motion and react-intersection-observer
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  useAnimation: () => ({
    start: vi.fn(),
  }),
}));

vi.mock('react-intersection-observer', () => ({
  useInView: () => [null, true],
}));

describe('MembershipTierShowcase', () => {
  it('renders the component with the correct title', () => {
    render(<MembershipTierShowcase />);
    
    expect(screen.getByText('Choose Your Flight Path')).toBeInTheDocument();
  });

  it('displays all membership tiers', () => {
    render(<MembershipTierShowcase />);
    
    expect(screen.getByText('Pay-Per-Flight')).toBeInTheDocument();
    expect(screen.getByText('Premium')).toBeInTheDocument();
    expect(screen.getByText('Elite')).toBeInTheDocument();
    expect(screen.getByText('Executive')).toBeInTheDocument();
  });

  it('shows monthly pricing by default', () => {
    render(<MembershipTierShowcase />);
    
    expect(screen.getByText('Free')).toBeInTheDocument();
    expect(screen.getByText('$299')).toBeInTheDocument();
    expect(screen.getByText('$499')).toBeInTheDocument();
    expect(screen.getByText('$799')).toBeInTheDocument();
  });

  it('toggles between monthly and annual pricing', () => {
    render(<MembershipTierShowcase />);
    
    // Default is monthly pricing
    expect(screen.getByText('$299')).toBeInTheDocument();
    
    // Click toggle to switch to annual
    const toggle = screen.getByLabelText('Toggle between monthly and annual pricing');
    fireEvent.click(toggle);
    
    // Now should show annual pricing
    expect(screen.getByText('$2990')).toBeInTheDocument();
    expect(screen.getByText('$4990')).toBeInTheDocument();
    expect(screen.getByText('$7990')).toBeInTheDocument();
    
    // Should also show savings badge
    expect(screen.getByText('Save up to 15%')).toBeInTheDocument();
  });

  it('displays the most popular badge for the recommended tier', () => {
    render(<MembershipTierShowcase />);
    
    const mostPopularBadge = screen.getByText('Most Popular');
    expect(mostPopularBadge).toBeInTheDocument();
    
    // The badge should be near the Premium tier
    const premiumTier = screen.getByText('Premium');
    expect(premiumTier).toBeInTheDocument();
  });

  it('renders all CTA buttons with correct text', () => {
    render(<MembershipTierShowcase />);
    
    expect(screen.getByText('Book First Flight')).toBeInTheDocument();
    expect(screen.getByText('Select Premium')).toBeInTheDocument();
    expect(screen.getByText('Choose Elite')).toBeInTheDocument();
    expect(screen.getByText('Go Executive')).toBeInTheDocument();
  });

  it('displays features for each tier', () => {
    render(<MembershipTierShowcase />);
    
    // Check some features from different tiers
    expect(screen.getByText('No monthly fees')).toBeInTheDocument();
    expect(screen.getByText('Priority flight selection')).toBeInTheDocument();
    expect(screen.getByText('Premium lounge access')).toBeInTheDocument();
    expect(screen.getByText('Dedicated concierge')).toBeInTheDocument();
  });

  it('displays the sticky mobile button', () => {
    render(<MembershipTierShowcase />);
    
    const mobileButton = screen.getByText('Compare Tiers');
    expect(mobileButton).toBeInTheDocument();
  });
});
  