
import { useState, useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { motion } from 'framer-motion';

interface VideoTestimonialProps {
  videoUrl: string;
  memberName: string;
  memberTitle: string;
  memberTier: string;
  thumbnailUrl?: string;
}

/**
 * VideoTestimonial component for displaying video testimonials from members
 * Includes custom play button, responsive sizing and member information
 */
const VideoTestimonial = ({
  videoUrl,
  memberName,
  memberTitle,
  memberTier,
  thumbnailUrl
}: VideoTestimonialProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);
  const playerRef = useRef<ReactPlayer | null>(null);

  // Get the tier color for styling elements
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'platinum':
        return 'bg-purple-500';
      case 'gold':
        return 'bg-amber-400';
      case 'silver':
        return 'bg-gray-400';
      default:
        return 'bg-blue-400';
    }
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
    setHasStartedPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative rounded-lg overflow-hidden shadow-lg"
    >
      <div className="relative aspect-w-16 aspect-h-9">
        <ReactPlayer
          ref={playerRef}
          url={videoUrl}
          width="100%"
          height="100%"
          playing={isPlaying}
          controls={hasStartedPlaying}
          light={!hasStartedPlaying ? thumbnailUrl : false}
          onPause={handlePause}
          onPlay={handlePlay}
          playIcon={<></>} // We'll use our custom play button
          config={{
            youtube: {
              playerVars: { 
                modestbranding: 1,
                rel: 0
              }
            },
            file: {
              attributes: {
                controlsList: 'nodownload'
              }
            }
          }}
          className="absolute top-0 left-0"
        />
        
        {/* Custom play button overlay */}
        {!hasStartedPlaying && (
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
            onClick={handlePlayClick}
            role="button"
            aria-label={`Play video testimonial from ${memberName}`}
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handlePlayClick();
              }
            }}
          >
            <div className={`w-16 h-16 rounded-full flex items-center justify-center ${getTierColor(memberTier)} bg-opacity-90 shadow-lg transition-transform duration-300 transform hover:scale-110`}>
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        
        {/* Member tier indicator */}
        <div className="absolute top-3 right-3 z-10">
          <span className={`
            inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize bg-black bg-opacity-60 text-white
            border-2 ${memberTier === 'platinum' ? 'border-purple-400' : ''}
            ${memberTier === 'gold' ? 'border-amber-400' : ''}
            ${memberTier === 'silver' ? 'border-gray-400' : ''}
            ${memberTier === 'standard' ? 'border-blue-400' : ''}
          `}>
            {memberTier} Member
          </span>
        </div>
      </div>
      
      {/* Member information footer */}
      <div className="p-4 bg-white border-t border-gray-100">
        <h4 className="font-bold text-gray-900 font-montserrat">{memberName}</h4>
        <p className="text-sm text-gray-600 font-lato">{memberTitle}</p>
      </div>
    </motion.div>
  );
};

export default VideoTestimonial;
  