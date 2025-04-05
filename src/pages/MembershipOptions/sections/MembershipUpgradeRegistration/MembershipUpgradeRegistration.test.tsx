
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MembershipUpgradeRegistration } from './MembershipUpgradeRegistration';

describe('MembershipUpgradeRegistration', () => {
  beforeEach(() => {
    // Mock console.log to prevent noise in test output
    jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('renders the component with initial step', () => {
    render(<MembershipUpgradeRegistration />);
    
    // Check for heading and form fields in first step
    expect(screen.getByText('Join HeliHop Today')).toBeInTheDocument();
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
  });

  test('shows validation errors when form is submitted without required fields', async () => {
    render(<MembershipUpgradeRegistration />);
    
    // Try to continue without filling in required fields
    const continueButton = screen.getByText('Continue to Plan Selection');
    userEvent.click(continueButton);
    
    // Check for validation errors
    await waitFor(() => {
      expect(screen.getByText('First name is required')).toBeInTheDocument();
      expect(screen.getByText('Last name is required')).toBeInTheDocument();
      expect(screen.getByText('Email is required')).toBeInTheDocument();
      expect(screen.getByText('Phone number is required')).toBeInTheDocument();
    });
  });

  test('allows user to proceed to next step when form is valid', async () => {
    render(<MembershipUpgradeRegistration />);
    
    // Fill in the required fields
    userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
    userEvent.type(screen.getByLabelText(/Email Address/i), 'john.doe@example.com');
    userEvent.type(screen.getByLabelText(/Phone Number/i), '1234567890');
    
    // Click continue
    const continueButton = screen.getByText('Continue to Plan Selection');
    userEvent.click(continueButton);
    
    // Check that we're on the second step
    await waitFor(() => {
      expect(screen.getByText(/Choose Your Membership Plan/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/Basic Tier/i)).toBeInTheDocument();
    });
  });

  test('allows navigation between steps', async () => {
    render(<MembershipUpgradeRegistration />);
    
    // Fill in the first step
    userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
    userEvent.type(screen.getByLabelText(/Email Address/i), 'john.doe@example.com');
    userEvent.type(screen.getByLabelText(/Phone Number/i), '1234567890');
    userEvent.click(screen.getByText('Continue to Plan Selection'));
    
    // We should be on step 2
    await waitFor(() => {
      expect(screen.getByText(/Choose Your Membership Plan/i)).toBeInTheDocument();
    });
    
    // Go back to step 1
    userEvent.click(screen.getByText('Back'));
    
    // We should be back to step 1
    await waitFor(() => {
      expect(screen.getByText('Tell us about yourself')).toBeInTheDocument();
    });
  });

  test('displays correct information in the confirmation step', async () => {
    render(<MembershipUpgradeRegistration />);
    
    // Complete step 1
    userEvent.type(screen.getByLabelText(/First Name/i), 'John');
    userEvent.type(screen.getByLabelText(/Last Name/i), 'Doe');
    userEvent.type(screen.getByLabelText(/Email Address/i), 'john.doe@example.com');
    userEvent.type(screen.getByLabelText(/Phone Number/i), '1234567890');
    userEvent.click(screen.getByText('Continue to Plan Selection'));
    
    // Complete step 2
    await waitFor(() => {
      expect(screen.getByText(/Choose Your Membership Plan/i)).toBeInTheDocument();
    });
    userEvent.click(screen.getByLabelText(/Premium Tier/i));
    userEvent.click(screen.getByText('Continue to Payment'));
    
    // Complete step 3
    await waitFor(() => {
      expect(screen.getByText('Payment Information')).toBeInTheDocument();
    });
    userEvent.type(screen.getByLabelText(/Name on Card/i), 'John Doe');
    userEvent.type(screen.getByLabelText(/Card Number/i), '4111111111111111');
    userEvent.type(screen.getByLabelText(/Expiry Date/i), '1225');
    userEvent.type(screen.getByLabelText(/CVV/i), '123');
    userEvent.click(screen.getByText('Complete Membership'));
    
    // Check confirmation step
    await waitFor(() => {
      expect(screen.getByText('Welcome to HeliHop!')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('Premium Tier')).toBeInTheDocument();
      expect(screen.getByText('$399/month')).toBeInTheDocument();
      expect(screen.getByText(/•••• •••• •••• 1111/)).toBeInTheDocument();
    });
  });
});
  