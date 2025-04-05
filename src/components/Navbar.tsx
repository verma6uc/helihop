
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navigationLinks = [
    { name: 'Home', path: '/' },
    { name: 'Book Now', path: '/book-now' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Membership Options', path: '/membership-options' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-helihop-light bg-helihop-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="relative h-8 w-8">
            <div className="absolute h-8 w-8 animate-pulse-subtle rounded-full bg-helihop-blue"></div>
            <div className="absolute inset-1 h-6 w-6 rounded-full bg-helihop-gold"></div>
          </div>
          <span className="font-montserrat text-xl font-bold text-helihop-dark">HeliHop</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-montserrat text-sm font-medium text-helihop-medium transition-colors hover:text-helihop-blue"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-now"
            className="rounded-md bg-helihop-blue px-4 py-2 font-montserrat text-sm font-semibold text-white transition-colors hover:bg-helihop-blue/90"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'absolute left-0 right-0 z-50 bg-white shadow-lg md:hidden',
          isMenuOpen ? 'block' : 'hidden'
        )}
      >
        <div className="container mx-auto space-y-1 px-4 py-4">
          {navigationLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2 font-montserrat text-base font-medium text-helihop-medium hover:text-helihop-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/book-now"
            className="mt-4 block rounded-md bg-helihop-blue px-4 py-2 text-center font-montserrat text-base font-semibold text-white"
            onClick={() => setIsMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
  