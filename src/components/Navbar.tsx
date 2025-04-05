
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  return (
    <Link 
      to={to} 
      className="px-4 py-2 text-helihop-dark hover:text-helihop-blue transition-colors duration-300 font-medium"
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-helihop-light bg-helihop-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <svg 
                className="h-10 w-10 text-helihop-blue" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14h-9v-1.5h9V16zm-4.5-5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
              <span className="ml-2 text-xl font-montserrat font-bold text-helihop-dark">
                Heli<span className="text-helihop-blue">Hop</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/book-now">Book Now</NavLink>
            <NavLink to="/how-it-works">How It Works</NavLink>
            <NavLink to="/membership">Membership</NavLink>
            <Link 
              to="/book-now" 
              className="ml-4 rounded-md bg-helihop-blue px-4 py-2 text-white hover:bg-helihop-blue/90 transition-colors duration-300 font-medium"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-helihop-medium hover:text-helihop-blue focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-helihop-white border-b border-helihop-light">
            <Link 
              to="/" 
              className="block px-3 py-2 text-base font-medium text-helihop-dark hover:text-helihop-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/book-now" 
              className="block px-3 py-2 text-base font-medium text-helihop-dark hover:text-helihop-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Link>
            <Link 
              to="/how-it-works" 
              className="block px-3 py-2 text-base font-medium text-helihop-dark hover:text-helihop-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
            <Link 
              to="/membership" 
              className="block px-3 py-2 text-base font-medium text-helihop-dark hover:text-helihop-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              Membership
            </Link>
            <Link 
              to="/book-now" 
              className="block mt-4 mx-3 rounded-md bg-helihop-blue px-4 py-2 text-white text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
