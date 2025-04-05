
import { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MembershipTier } from '../types';

interface ComparisonModalProps {
  /** Whether the modal is open */
  isOpen: boolean;
  
  /** Function to close the modal */
  onClose: () => void;
  
  /** Array of membership tiers to compare */
  tiers: MembershipTier[];
  
  /** Whether to show annual pricing */
  isAnnual: boolean;
}

/**
 * ComparisonModal shows a full comparison of all membership tiers
 * in a modal overlay, optimized for mobile viewing
 */
const ComparisonModal = ({ isOpen, onClose, tiers, isAnnual }: ComparisonModalProps): JSX.Element => {
  const modalRef = useRef<HTMLDivElement>(null);
  
  // Close modal when clicking outside of content
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // Prevent body scrolling when modal is open
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Handle escape key press to close modal
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
          aria-labelledby="modal-title"
        >
          <motion.div
            ref={modalRef}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white rounded-lg shadow-xl max-w-full w-full max-h-[90vh] overflow-hidden flex flex-col"
          >
            {/* Modal header */}
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center sticky top-0 bg-white z-10">
              <h2 id="modal-title" className="text-xl font-bold text-gray-900 font-montserrat">
                Membership Tier Comparison
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary rounded-full p-1"
                aria-label="Close modal"
              >
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Modal content */}
            <div className="overflow-y-auto p-6 flex-grow">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead className="sticky top-0 bg-white">
                    <tr className="bg-gray-100">
                      <th className="py-4 px-4 text-left font-montserrat font-semibold text-gray-800 min-w-[120px]">Feature</th>
                      {tiers.map((tier) => (
                        <th 
                          key={tier.id} 
                          className={`py-4 px-4 text-center font-montserrat font-semibold ${tier.recommended ? 'text-primary bg-blue-50' : 'text-gray-800'} min-w-[120px]`}
                        >
                          {tier.name}
                          {tier.recommended && (
                            <div className="text-xs font-normal mt-1 text-primary-dark">RECOMMENDED</div>
                          )}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {/* Pricing row */}
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-lato text-gray-800 font-medium">Pricing</td>
                      {tiers.map((tier) => (
                        <td key={tier.id} className="py-4 px-4 text-center font-lato">
                          {tier.id === 'pay-per-flight' ? (
                            <span>No fee</span>
                          ) : (
                            <div>
                              <span className="font-semibold text-gray-900">
                                ${isAnnual ? tier.annualPrice : tier.monthlyPrice}
                              </span>
                              <span className="text-gray-600 text-sm block">
                                {isAnnual ? '/year' : '/month'}
                              </span>
                              {isAnnual && <span className="text-green-600 text-xs block mt-1">Save ~15%</span>}
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                    
                    {/* Booking Window row */}
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-lato text-gray-800 font-medium">Booking Window</td>
                      <td className="py-4 px-4 text-center font-lato">Standard (7 days)</td>
                      <td className="py-4 px-4 text-center font-lato">Priority (14 days)</td>
                      <td className="py-4 px-4 text-center font-lato">Extended (30 days)</td>
                      <td className="py-4 px-4 text-center font-lato">Unlimited</td>
                    </tr>
                    
                    {/* Flight Discounts row */}
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-lato text-gray-800 font-medium">Flight Discounts</td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">10% off</td>
                      <td className="py-4 px-4 text-center font-lato">15% off</td>
                      <td className="py-4 px-4 text-center font-lato">25% off</td>
                    </tr>
                    
                    {/* Cancellations row */}
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-lato text-gray-800 font-medium">Cancellations</td>
                      <td className="py-4 px-4 text-center font-lato">Fee applies</td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                    
                    {/* Support Level row */}
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-lato text-gray-800 font-medium">Support Level</td>
                      <td className="py-4 px-4 text-center font-lato">Basic</td>
                      <td className="py-4 px-4 text-center font-lato">Priority</td>
                      <td className="py-4 px-4 text-center font-lato">Dedicated Line</td>
                      <td className="py-4 px-4 text-center font-lato">Concierge</td>
                    </tr>
                    
                    {/* Guest Privileges row */}
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-lato text-gray-800 font-medium">Guest Privileges</td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">
                        <div className="flex items-center justify-center">
                          <svg className="h-5 w-5 text-green-500 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-xs">(Family)</span>
                        </div>
                      </td>
                    </tr>
                    
                    {/* Special Events row */}
                    <tr className="border-b border-gray-200">
                      <td className="py-4 px-4 font-lato text-gray-800 font-medium">Special Events Access</td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-gray-400 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </td>
                      <td className="py-4 px-4 text-center font-lato">Limited</td>
                      <td className="py-4 px-4 text-center font-lato">
                        <svg className="h-5 w-5 text-green-500 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Modal footer */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 sticky bottom-0">
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="bg-white text-gray-700 font-medium py-2 px-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ComparisonModal;
