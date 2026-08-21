import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to manage a smart sticky header that hides on scroll down and shows on scroll up.
 * @param {number} threshold - Minimum scroll distance from top before hiding triggers (default: 100px)
 * @param {number} scrollDelta - Minimum scroll delta to trigger change to avoid micro-jitter (default: 8px)
 */
export const useSmartHeader = (threshold = 100, scrollDelta = 8) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const updateHeader = () => {
      const currentScrollY = window.scrollY;

      // Track if page has scrolled away from top for background styling
      setIsScrolled(currentScrollY > 30);

      // Always visible when near top of the page
      if (currentScrollY <= threshold) {
        setIsVisible(true);
        lastScrollY.current = currentScrollY;
        ticking.current = false;
        return;
      }

      const diff = currentScrollY - lastScrollY.current;

      // Check if scroll delta exceeds sensitivity threshold
      if (Math.abs(diff) >= scrollDelta) {
        if (diff > 0) {
          // Scrolling down -> hide header
          setIsVisible(false);
        } else {
          // Scrolling up -> reveal header immediately
          setIsVisible(true);
        }
        lastScrollY.current = currentScrollY;
      }

      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(updateHeader);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, scrollDelta]);

  return { isVisible, isScrolled };
};
