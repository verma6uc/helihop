
import React, { useState, useEffect } from 'react';

interface CountUpProps {
  end: number;
  duration: number;
}

/**
 * Component that animates a number counting up from 0 to the specified end value
 */
const CountUp: React.FC<CountUpProps> = ({ end, duration }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number;
    
    const updateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      }
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);
  
  return <>{count}</>;
};

export default CountUp;
  