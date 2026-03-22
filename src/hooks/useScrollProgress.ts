import { useState, useEffect, useRef, useCallback, RefObject } from 'react';

interface UseScrollProgressOptions {
  elementRef?: RefObject<HTMLElement>;
  startTrigger?: number; // Percentage of viewport height (0-1)
  endTrigger?: number; // Percentage of viewport height (0-1)
  throttleMs?: number; // Throttle delay in milliseconds
}

export function useScrollProgress(options: UseScrollProgressOptions = {}) {
  const {
    elementRef: externalRef,
    startTrigger = 0.8,
    endTrigger = 0.4,
    throttleMs = 16, // ~60fps
  } = options;

  const [scrollProgress, setScrollProgress] = useState(0);
  const internalRef = useRef<HTMLElement>(null);
  const elementRef = externalRef || internalRef;
  const rafIdRef = useRef<number | null>(null);
  const lastUpdateRef = useRef<number>(0);

  const updateProgress = useCallback(() => {
    const now = Date.now();
    if (now - lastUpdateRef.current < throttleMs) {
      return;
    }
    lastUpdateRef.current = now;

    if (!elementRef.current) {
      setScrollProgress(0);
      return;
    }

    const rect = elementRef.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const elementTop = rect.top;
    const elementHeight = rect.height;

    const startPoint = windowHeight * startTrigger;
    const endPoint = windowHeight * endTrigger;
    const range = startPoint - endPoint;

    if (elementTop < startPoint && elementTop + elementHeight > 0) {
      const progress = Math.min(
        Math.max((startPoint - elementTop) / range, 0),
        1
      );
      setScrollProgress(progress);
    } else if (elementTop >= startPoint) {
      setScrollProgress(0);
    } else {
      setScrollProgress(1);
    }
  }, [startTrigger, endTrigger, throttleMs, elementRef]);

  useEffect(() => {
    const handleScroll = () => {
      if (rafIdRef.current !== null) {
        return;
      }

      rafIdRef.current = requestAnimationFrame(() => {
        updateProgress();
        rafIdRef.current = null;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateProgress(); // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [updateProgress]);

  return { scrollProgress, elementRef: elementRef as RefObject<HTMLElement> };
}
