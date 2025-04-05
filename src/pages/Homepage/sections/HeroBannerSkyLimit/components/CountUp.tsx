
import React, { useState, useEffect } from 'react';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * CountUp component that animates a number counting up from start to end
 */
const CountUp: React.FC<CountUpProps> = ({
  end,
  start = 0,
  duration = 2,
  decimals = 0,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    // Reset count if end changes
    setCount(start);
    
    if (end === start) return;
    
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const currentCount = progress * (end - start) + start;
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
    
    return () => {
      startTimestamp = null;
    };
  }, [end, start, duration]);
  
  return (
    <>
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </>
  );
};

export default CountUp;
