
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-helihop-dark text-helihop-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center">
              <svg 
                className="h-10 w-10 text-helihop-blue" 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14h-9v-1.5h9V16zm-4.5-5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
              </svg>
              <span className="ml-2 text-xl font-montserrat font-bold text-white">
                Heli<span className="text-helihop-blue">Hop</span>
              </span>
            </div>
            <p className="mt-4 text-helihop-light font-lato">
              Experience luxury helicopter travel with AI-optimized routes for maximum time savings.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                </svg>
              </a>
              <a href="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-montserrat font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <Link to="/" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/book-now" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Book Now
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  How It Works
                </Link>
              </li>
              <li>
                <Link to="/membership" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Membership
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="text-lg font-montserrat font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 font-lato">
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-helihop-light hover:text-helihop-blue transition-colors duration-300">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-montserrat font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 font-lato">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-helihop-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-helihop-light">
                  123 Aviation Way<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-helihop-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="text-helihop-light">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <svg className="h-5 w-5 mr-2 text-helihop-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span className="text-helihop-light">info@helihop.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-center text-helihop-light text-sm">
            &copy; {currentYear} HeliHop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
