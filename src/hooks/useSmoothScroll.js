import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';

export function useSmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.08,
      smoothWheel: true,
    });

    const tick = (time) => {
      lenis.raf(time * 1000);
      gsap.updateRoot(time);
    };

    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);
}
