import { useEffect, useRef, useState } from 'react';

export const useScrollFade = () => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const element = domRef.current;
    if (!element) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.15, rootMargin: '-5% 0px -5% 0px' },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return [domRef, isVisible];
};
