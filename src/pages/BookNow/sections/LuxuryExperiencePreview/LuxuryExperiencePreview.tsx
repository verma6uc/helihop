
import React, { useState } from 'react';
import Modal from 'react-modal';
import ImageGallery from 'react-image-gallery';
import { GalleryImageProps, TestimonialProps, ExperienceFeatureProps, SafetyInfoProps } from './types';
import { FaStar, FaShieldAlt, FaGlassMartiniAlt, FaConciergeBell, FaHandshake } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import "react-image-gallery/styles/css/image-gallery.css";

// Sample data (in a real implementation, this would come from a data source)
const galleryImages: GalleryImageProps[] = [
  {
    original: 'https://source.unsplash.com/random/1200x600/?luxury-helicopter',
    thumbnail: 'https://source.unsplash.com/random/250x150/?luxury-helicopter',
    description: 'Luxurious helicopter interior with premium leather seating',
    alt: 'Luxurious helicopter interior with premium leather seating and panoramic windows',
    hotspots: [
      {
        x: 30,
        y: 40,
        label: 'Premium Seating',
        description: 'Handcrafted leather seats for ultimate comfort'
      },
      {
        x: 70,
        y: 60,
        label: 'Panoramic Views',
        description: 'Floor-to-ceiling windows for breathtaking scenery'
      }
    ]
  },
  {
    original: 'https://source.unsplash.com/random/1200x600/?helipad',
    thumbnail: 'https://source.unsplash.com/random/250x150/?helipad',
    description: 'Exclusive helipad facilities at premium destinations',
    alt: 'Exclusive helipad with stunning cityscape views and premium facilities'
  },
  {
    original: 'https://source.unsplash.com/random/1200x600/?luxury-service',
    thumbnail: 'https://source.unsplash.com/random/250x150/?luxury-service',
    description: 'Personalized concierge service to cater to your every need',
    alt: 'Professional concierge staff providing personalized service to helicopter passengers'
  },
  {
    original: 'https://source.unsplash.com/random/1200x600/?helicopter-cockpit',
    thumbnail: 'https://source.unsplash.com/random/250x150/?helicopter-cockpit',
    description: 'State-of-the-art cockpit with advanced safety features',
    alt: 'Modern helicopter cockpit with advanced navigation and safety systems'
  }
];

const testimonials: TestimonialProps[] = [
  {
    quote: "HeliHop transformed my executive commute. The time saved and comfort experienced have made this an essential service for my business travel.",
    author: "Jonathan Richards",
    role: "CEO, Quantum Ventures"
  },
  {
    quote: "The level of professionalism and luxury exceeded my expectations. From the booking process to the landing, every detail was perfection.",
    author: "Alexandra Davis",
    role: "Fashion Director, Milan"
  },
  {
    quote: "As someone who values both time and comfort, HeliHop delivers on both fronts. Their safety record and experienced pilots give me complete peace of mind.",
    author: "Dr. Michael Chen",
    role: "Chief Surgeon, Memorial Hospital"
  }
];

const features: ExperienceFeatureProps[] = [
  {
    icon: <FaGlassMartiniAlt className="text-primary text-2xl" />,
    title: "Premium Comfort",
    description: "Experience the finest in aerial luxury with handcrafted leather seating, climate control, and noise-cancelling technology."
  },
  {
    icon: <FaConciergeBell className="text-primary text-2xl" />,
    title: "Concierge Service",
    description: "Our dedicated team handles every detail of your journey, from ground transportation to personalized in-flight amenities."
  },
  {
    icon: <FaHandshake className="text-primary text-2xl" />,
    title: "Exclusive Access",
    description: "Land at private helipads in premium locations, bypassing traditional transportation routes and terminals."
  }
];

const safetyInfo: SafetyInfoProps = {
  title: "Uncompromising Safety Standards",
  description: "At HeliHop, your safety is our absolute priority. Our rigorous protocols and expertly maintained fleet ensure peace of mind with every journey.",
  items: [
    {
      heading: "Experienced Pilots",
      content: "Our pilots average over 5,000 flight hours and undergo continuous training with the latest safety protocols and procedures."
    },
    {
      heading: "Meticulous Maintenance",
      content: "Our helicopters undergo comprehensive inspections before every flight, exceeding FAA requirements to ensure peak performance."
    },
    {
      heading: "Advanced Technology",
      content: "Our fleet is equipped with the latest navigation, weather detection, and safety systems available in luxury aviation."
    },
    {
      heading: "Rigorous Training",
      content: "All crew members regularly participate in emergency response simulations and safety procedure drills."
    }
  ]
};

const LuxuryExperiencePreview: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [expandedTestimonialIndex, setExpandedTestimonialIndex] = useState<number | null>(null);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const toggleTestimonial = (index: number) => {
    setExpandedTestimonialIndex(expandedTestimonialIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white" aria-label="Luxury Experience Preview">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Elevate Your Journey Experience
          </h2>
          <p className="font-lato text-lg text-gray-600 max-w-3xl mx-auto">
            Beyond transportation, HeliHop offers an unparalleled luxury experience combining comfort, exclusivity, and impeccable service.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-20">
          <div className="rounded-lg overflow-hidden shadow-xl">
            <ImageGallery
              items={galleryImages}
              showPlayButton={false}
              showFullscreenButton={true}
              slideInterval={5000}
              renderItem={(item) => (
                <div className="relative">
                  <img 
                    src={item.original} 
                    alt={item.originalAlt || item.alt || ''} 
                    className="w-full object-cover h-[400px] md:h-[600px]"
                  />
                  {item.description && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 text-white">
                      <p className="font-lato text-lg">{item.description}</p>
                    </div>
                  )}
                  {(item as GalleryImageProps).hotspots?.map((hotspot, idx) => (
                    <div 
                      key={idx}
                      className="absolute w-8 h-8 rounded-full bg-yellow-400 hover:bg-yellow-300 flex items-center justify-center cursor-pointer transform -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110 group"
                      style={{ top: `${hotspot.y}%`, left: `${hotspot.x}%` }}
                      aria-label={hotspot.label}
                      role="button"
                      tabIndex={0}
                    >
                      <span className="text-primary-800 font-bold">+</span>
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-gray-800 p-3 rounded-lg shadow-lg -translate-y-full -mt-2 w-48 pointer-events-none">
                        <p className="font-montserrat font-semibold text-sm">{hotspot.label}</p>
                        <p className="font-lato text-xs mt-1">{hotspot.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
        </div>

        {/* Experience Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center h-14 w-14 rounded-full bg-primary bg-opacity-10 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="font-montserrat text-xl font-semibold text-gray-800 text-center mb-3">
                {feature.title}
              </h3>
              <p className="font-lato text-gray-600 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Safety Information */}
        <div className="bg-blue-50 rounded-lg p-6 md:p-10 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 md:w-64 md:h-64 opacity-5">
            <FaShieldAlt className="w-full h-full text-primary" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center mb-6">
              <div className="mr-4 text-primary">
                <FaShieldAlt className="w-8 h-8" />
              </div>
              <h3 className="font-montserrat text-2xl font-bold text-gray-800">
                {safetyInfo.title}
              </h3>
            </div>
            <p className="font-lato text-gray-700 mb-6 max-w-3xl">
              {safetyInfo.description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {safetyInfo.items.slice(0, 2).map((item, index) => (
                <div key={index} className="bg-white rounded-md p-4 shadow-sm">
                  <h4 className="font-montserrat font-semibold text-gray-800 mb-2">
                    {item.heading}
                  </h4>
                  <p className="font-lato text-sm text-gray-600">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            <button
              onClick={openModal}
              className="font-lato text-primary font-medium hover:text-primary-dark transition-colors"
              aria-label="Learn more about our safety measures"
            >
              Learn more about our comprehensive safety measures →
            </button>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-montserrat text-2xl font-bold text-center text-gray-800 mb-10">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 ${
                  expandedTestimonialIndex === index ? 'md:col-span-3 md:row-span-2' : ''
                }`}
                onClick={() => toggleTestimonial(index)}
                onKeyDown={(e) => e.key === 'Enter' && toggleTestimonial(index)}
                tabIndex={0}
                role="button"
                aria-expanded={expandedTestimonialIndex === index}
              >
                <div className="flex items-center mb-4">
                  <FaStar className="text-yellow-400 mr-1" />
                  <FaStar className="text-yellow-400 mr-1" />
                  <FaStar className="text-yellow-400 mr-1" />
                  <FaStar className="text-yellow-400 mr-1" />
                  <FaStar className="text-yellow-400" />
                </div>
                <blockquote>
                  <p className="font-lato text-gray-700 italic mb-4">
                    "{testimonial.quote}"
                  </p>
                  <footer className="font-montserrat font-medium text-gray-900">
                    {testimonial.author}
                    {testimonial.role && (
                      <span className="font-lato font-normal text-gray-600 block">
                        {testimonial.role}
                      </span>
                    )}
                  </footer>
                </blockquote>
                {expandedTestimonialIndex === index && (
                  <div className="mt-4 text-right">
                    <button 
                      className="text-sm text-gray-500 hover:text-primary"
                      aria-label="Collapse testimonial"
                    >
                      Show less
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
            <div className="h-8 text-center">
              <img 
                src="https://placehold.co/120x40/333333/FFFFFF?text=Luxury+Brand" 
                alt="Luxury Partner Brand"
                className="h-full w-auto"
              />
            </div>
            <div className="h-8 text-center">
              <img 
                src="https://placehold.co/120x40/333333/FFFFFF?text=Premium+Hotel" 
                alt="Premium Hotel Partner"
                className="h-full w-auto"
              />
            </div>
            <div className="h-8 text-center">
              <img 
                src="https://placehold.co/120x40/333333/FFFFFF?text=Executive+Club" 
                alt="Executive Club Partner"
                className="h-full w-auto"
              />
            </div>
            <div className="h-8 text-center">
              <img 
                src="https://placehold.co/120x40/333333/FFFFFF?text=Aviation+Academy" 
                alt="Aviation Academy Partner"
                className="h-full w-auto"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="font-montserrat text-2xl font-bold text-gray-800 mb-4">
            Ready to Experience Luxury in the Skies?
          </h3>
          <p className="font-lato text-gray-600 mb-8 max-w-2xl mx-auto">
            Our concierge team is ready to design a bespoke helicopter experience that exceeds your expectations.
          </p>
          <button 
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-montserrat font-medium py-3 px-8 rounded-md shadow-md hover:shadow-lg transition-all duration-300"
            aria-label="Schedule a personal consultation"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>

      {/* Safety Information Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Safety Information"
        className="bg-white rounded-lg max-w-4xl mx-auto mt-20 p-8 relative overflow-y-auto max-h-[80vh]"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex items-start justify-center z-50"
        ariaHideApp={false}
      >
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <IoMdClose className="w-6 h-6" />
        </button>
        
        <div className="flex items-center mb-6">
          <div className="mr-4 text-primary">
            <FaShieldAlt className="w-8 h-8" />
          </div>
          <h2 className="font-montserrat text-2xl font-bold text-gray-800">
            {safetyInfo.title}
          </h2>
        </div>
        
        <p className="font-lato text-gray-700 mb-6">
          {safetyInfo.description}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {safetyInfo.items.map((item, index) => (
            <div key={index} className="bg-blue-50 rounded-md p-6">
              <h3 className="font-montserrat font-semibold text-gray-800 mb-3">
                {item.heading}
              </h3>
              <p className="font-lato text-gray-600">
                {item.content}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="font-montserrat font-semibold text-gray-800 mb-3">
            Our Safety Certifications
          </h3>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white border border-gray-200 rounded p-2 flex items-center">
              <img 
                src="https://placehold.co/60x30/333333/FFFFFF?text=FAA" 
                alt="FAA Certification"
                className="h-6"
              />
              <span className="font-lato text-sm text-gray-600 ml-2">FAA Approved</span>
            </div>
            <div className="bg-white border border-gray-200 rounded p-2 flex items-center">
              <img 
                src="https://placehold.co/60x30/333333/FFFFFF?text=EASA" 
                alt="EASA Certification"
                className="h-6"
              />
              <span className="font-lato text-sm text-gray-600 ml-2">EASA Compliant</span>
            </div>
            <div className="bg-white border border-gray-200 rounded p-2 flex items-center">
              <img 
                src="https://placehold.co/60x30/333333/FFFFFF?text=ISO" 
                alt="ISO 9001 Certification"
                className="h-6"
              />
              <span className="font-lato text-sm text-gray-600 ml-2">ISO 9001:2015</span>
            </div>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default LuxuryExperiencePreview;
  