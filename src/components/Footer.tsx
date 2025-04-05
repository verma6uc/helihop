
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-helihop-light bg-helihop-offwhite">
      <div className="container mx-auto px-4 py-12 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative h-8 w-8">
                <div className="absolute h-8 w-8 animate-pulse-subtle rounded-full bg-helihop-blue"></div>
                <div className="absolute inset-1 h-6 w-6 rounded-full bg-helihop-gold"></div>
              </div>
              <span className="font-montserrat text-xl font-bold text-helihop-dark">HeliHop</span>
            </div>
            <p className="text-sm text-helihop-medium">
              Experience luxury helicopter travel with AI-optimized routes for maximum time savings.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 font-montserrat text-sm font-semibold text-helihop-dark">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-helihop-medium hover:text-helihop-blue">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="text-helihop-medium hover:text-helihop-blue">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-helihop-medium hover:text-helihop-blue">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-helihop-medium hover:text-helihop-blue">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-montserrat text-sm font-semibold text-helihop-dark">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy-policy" className="text-helihop-medium hover:text-helihop-blue">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-helihop-medium hover:text-helihop-blue">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-helihop-medium hover:text-helihop-blue">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-montserrat text-sm font-semibold text-helihop-dark">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-helihop-medium">
                Email: <a href="mailto:info@helihop.com" className="hover:text-helihop-blue">info@helihop.com</a>
              </li>
              <li className="text-helihop-medium">
                Phone: <a href="tel:+1234567890" className="hover:text-helihop-blue">+1 (234) 567-890</a>
              </li>
              <li className="text-helihop-medium">
                123 Aviation Way, <br />
                SkyCity, SC 12345
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-helihop-light pt-8 text-center text-sm text-helihop-medium">
          <p>&copy; {currentYear} HeliHop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
