
import { useState, useEffect } from 'react';
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { useInView } from 'react-intersection-observer';

interface RouteComparisonProps {
  isVisible: boolean;
}

/**
 * RouteComparison component with interactive slider to compare traditional vs AI routes
 */
export const RouteComparison: React.FC<RouteComparisonProps> = ({ isVisible }) => {
  const [position, setPosition] = useState(50);
  const [sliderLoaded, setSliderLoaded] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && isVisible) {
      // Animate the slider position after a delay
      const timer = setTimeout(() => {
        setPosition(25);
        setTimeout(() => {
          setPosition(75);
          setTimeout(() => {
            setPosition(50);
          }, 800);
        }, 800);
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [inView, isVisible]);

  return (
    <div 
      ref={ref}
      className={`transition-all duration-1000 transform ${
        isVisible && inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
    >
      <h3 className="text-2xl font-montserrat font-semibold text-center mb-6">
        AI vs. Traditional Route Comparison
      </h3>
      
      <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 font-lato">
        Slide to compare how HeliHop's AI routing optimizes your journey compared to traditional helicopter services.
      </p>
      
      <div className="max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          {/* Placeholder while loading */}
          {!sliderLoaded && (
            <div className="aspect-[16/9] bg-gray-200 animate-pulse w-full flex items-center justify-center">
              <span className="text-gray-500">Loading comparison...</span>
            </div>
          )}
          
          <div className={sliderLoaded ? 'visible' : 'invisible'}>
            <ReactCompareSlider
              position={position}
              onlyHandleDraggable={true}
              onPositionChange={setPosition}
              onReady={() => setSliderLoaded(true)}
              handle={
                <div className="w-1 h-full bg-white border-l-2 border-r-2 border-white">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 text-primary-blue" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8M8 12h8M8 17h8" />
                    </svg>
                  </div>
                </div>
              }
              itemOne={
                <div className="relative">
                  <ReactCompareSliderImage 
                    src="/images/traditional-route-map.jpg" 
                    alt="Traditional helicopter route with longer flight path" 
                    onLoad={() => setSliderLoaded(true)}
                  />
                  <div className="absolute top-0 left-0 p-3 bg-gray-900 bg-opacity-75 text-white font-semibold">
                    Traditional Route
                  </div>
                  <div className="absolute bottom-0 left-0 p-3 bg-gray-900 bg-opacity-75 text-white">
                    <span className="font-bold">+45 min</span> longer flight time
                  </div>
                </div>
              }
              itemTwo={
                <div className="relative">
                  <ReactCompareSliderImage 
                    src="/images/ai-optimized-route-map.jpg" 
                    alt="AI-optimized HeliHop route with shorter flight path" 
                  />
                  <div className="absolute top-0 right-0 p-3 bg-primary-blue bg-opacity-75 text-white font-semibold">
                    HeliHop AI Route
                  </div>
                  <div className="absolute bottom-0 right-0 p-3 bg-primary-blue bg-opacity-75 text-white">
                    <span className="font-bold">-45 min</span> flight time
                  </div>
                </div>
              }
              className="aspect-[16/9]"
            />
          </div>
        </div>
        
        <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
          <div>
            <p className="text-sm opacity-75 font-lato">Traditional Route</p>
            <p className="text-lg font-semibold font-lato">1 hr 45 min</p>
          </div>
          <div className="bg-white h-10 w-px mx-4 opacity-25"></div>
          <div>
            <p className="text-sm opacity-75 font-lato">Distance</p>
            <p className="text-lg font-semibold font-lato">85 miles</p>
          </div>
          <div className="bg-white h-10 w-px mx-4 opacity-25"></div>
          <div>
            <p className="text-sm opacity-75 font-lato">HeliHop AI Route</p>
            <p className="text-lg font-semibold text-accent-orange font-lato">1 hr</p>
          </div>
          <div className="bg-white h-10 w-px mx-4 opacity-25"></div>
          <div>
            <p className="text-sm opacity-75 font-lato">Time Saved</p>
            <p className="text-lg font-semibold text-accent-orange font-lato">45 min</p>
          </div>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-4 text-sm text-gray-500 text-center font-lato">
        <p>
          *Visualization based on actual route data between Manhattan and East Hampton. 
          Savings may vary based on specific routes and conditions.
        </p>
      </div>
    </div>
  );
};
  