
import React, { useState } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Testimonial } from './types';

interface VideoTestimonialProps {
  testimonial: Testimonial;
}

/**
 * VideoTestimonial component for displaying video testimonials
 * Uses react-player for video playback with custom controls and poster image
 */
export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ testimonial }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  
  // Ensure the testimonial has a video URL
  if (!testimonial.videoUrl) {
    return null;
  }

  const handlePlay = () => {
    setIsPlaying(true);
    setHasStarted(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
      <div className="bg-white">
        {/* Video player container */}
        <div className="relative aspect-w-16 aspect-h-9 bg-gray-900">
          {!hasStarted && testimonial.posterImage && (
            <div className="absolute inset-0 z-10">
              <img
                src={testimonial.posterImage}
                alt={`${testimonial.memberName}'s testimonial thumbnail`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <button
                  onClick={handlePlay}
                  className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                  aria-label={`Play video testimonial from ${testimonial.memberName}`}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="white" 
                    className="w-8 h-8"
                    style={{ marginLeft: '2px' }}
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          )}
          
          <ReactPlayer
            url={testimonial.videoUrl}
            width="100%"
            height="100%"
            playing={isPlaying}
            controls={hasStarted}
            light={!hasStarted ? testimonial.posterImage : false}
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={() => setIsPlaying(false)}
            config={{
              file: {
                attributes: {
                  controlsList: 'nodownload',
                  disablePictureInPicture: true
                }
              }
            }}
            className="absolute top-0 left-0"
          />
        </div>
        
        {/* Testimonial info */}
        <div className="p-4">
          <div className="flex items-center mb-3">
            <img 
              src={testimonial.memberAvatar} 
              alt={testimonial.memberName}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <h3 className="font-bold text-gray-900">{testimonial.memberName}</h3>
              {testimonial.memberTitle && (
                <p className="text-sm text-gray-600">
                  {testimonial.memberTitle}
                  {testimonial.memberCompany && `, ${testimonial.memberCompany}`}
                </p>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span 
              className={`inline-block px-2 py-1 text-xs rounded-full ${
                testimonial.membershipTier === 'essentials' 
                  ? 'bg-blue-100 text-blue-800' 
                  : testimonial.membershipTier === 'plus' 
                    ? 'bg-purple-100 text-purple-800' 
                    : 'bg-yellow-100 text-yellow-800'
              }`}
            >
              {testimonial.membershipTier.charAt(0).toUpperCase() + testimonial.membershipTier.slice(1)} Member
            </span>
            {testimonial.useCase && (
              <span className="text-xs text-gray-500">
                {testimonial.useCase}
              </span>
            )}
          </div>
          
          {/* Brief description */}
          <p className="mt-3 text-sm text-gray-700 line-clamp-2">
            {testimonial.content.substring(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  );
};
