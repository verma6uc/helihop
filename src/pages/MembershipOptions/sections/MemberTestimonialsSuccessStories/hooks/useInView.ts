
import { useState, useEffect, RefObject } from 'react';

/**
 * Hook to determine if an element is visible in the viewport
 * @param elementRef Reference to the DOM element to observe
 * @param options Options for the Intersection Observer
 * @returns Boolean indicating if the element is in view
 */
export function useInView(
  elementRef: RefObject<Element>,
  options: IntersectionObserverInit = { threshold: 0 }
): boolean {
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [elementRef, options]);

  return isInView;
}
