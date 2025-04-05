
import React from 'react';
import MemberTestimonialsSuccessStories from './sections/MemberTestimonialsSuccessStories/MemberTestimonialsSuccessStories';
// Other imports for the page

const MembershipOptions: React.FC = () => {
  return (
    <div className="membership-options-page">
      {/* Header section */}
      <header className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HeliHop Membership Options</h1>
          <p className="text-xl">Choose the perfect plan for your lifestyle and travel needs</p>
        </div>
      </header>

      {/* Other sections above testimonials */}
      
      {/* Testimonials Section */}
      <MemberTestimonialsSuccessStories />
      
      {/* Other sections below testimonials */}
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <p>© 2023 HeliHop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MembershipOptions;
