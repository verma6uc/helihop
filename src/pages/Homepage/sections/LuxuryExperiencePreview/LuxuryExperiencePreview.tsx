
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import Modal from 'react-modal';
import { LuxuryExperiencePreviewProps } from './types';
import TestimonialCard from './components/TestimonialCard';
import ExperiencePoint from './components/ExperiencePoint';
import SafetyBadge from './components/SafetyBadge';

// Ensure Modal is accessible
Modal.setAppElement('#root');

/**
 * LuxuryExperiencePreview - A section highlighting the premium nature of the HeliHop service
 * focusing on luxury, comfort, and safety to build trust and desire.
 */
const LuxuryExperiencePreview: React.FC<LuxuryExperiencePreviewProps> = ({
  images = [],
  experiencePoints = [],
  safetyCredentials = [],
  testimonials = [],
  partnerLogos = [],
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeCredential, setActiveCredential] = useState<number | null>(null);
  const sliderRef = useRef<Slider>(null);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        }
      }
    ]
  };

  const openModal = (index: number) => {
    setActiveCredential(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setActiveCredential(null);
  };

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-gray-800 mb-4">
            Elevate Your Journey Experience
          </h2>
          <p className="font-lato text-gray-600 max-w-2xl mx-auto text-lg">
            Beyond transportation, we offer an unparalleled experience that combines luxury, safety, and exclusivity.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="mb-16 overflow-hidden rounded-lg shadow-xl">
          <Slider ref={sliderRef} {...sliderSettings} className="luxury-slider">
            {images.map((image, index) => (
              <div key={index} className="outline-none">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="object-cover w-full h-full"
                    loading={index > 0 ? "lazy" : "eager"} 
                  />
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                      <p className="font-lato text-sm md:text-base">{image.caption}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Experience Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {experiencePoints.map((point, index) => (
            <ExperiencePoint 
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>

        {/* Safety Credentials */}
        <div className="mb-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-6 text-center">
            Your Safety is Our Priority
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {safetyCredentials.map((credential, index) => (
              <SafetyBadge
                key={index}
                title={credential.title}
                icon={credential.icon}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-montserrat font-bold text-gray-800 mb-8 text-center">
            What Our Clients Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                quote={testimonial.quote}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>

        {/* Partner Logos */}
        {partnerLogos.length > 0 && (
          <div className="mb-16">
            <p className="text-center text-sm text-gray-500 mb-4 font-lato uppercase tracking-wider">
              Our Luxury Partners
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {partnerLogos.map((logo, index) => (
                <div key={index} className="w-24 md:w-32 h-16 flex items-center justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="text-center">
          <button
            className="bg-[#0077B6] hover:bg-[#006298] text-white font-bold py-4 px-8 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0077B6] focus:ring-opacity-50"
            aria-label="Schedule a Consultation"
          >
            Schedule a Consultation
          </button>
        </div>

        {/* Safety Modal */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Safety Credential Details"
          className="max-w-2xl mx-auto mt-20 bg-white p-6 rounded-lg shadow-xl outline-none"
          overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center z-50"
        >
          {activeCredential !== null && safetyCredentials[activeCredential] && (
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-montserrat font-bold text-gray-800">
                  {safetyCredentials[activeCredential].title}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
              
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-[#0077B6] mb-4">
                  {safetyCredentials[activeCredential].icon}
                </div>
                <div className="font-lato text-gray-700">
                  {safetyCredentials[activeCredential].details && (
                    <div dangerouslySetInnerHTML={{ __html: safetyCredentials[activeCredential].details || '' }} />
                  )}
                </div>
              </div>
              
              <div className="text-right">
                <button
                  onClick={closeModal}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default LuxuryExperiencePreview;
  