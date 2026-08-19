import { useEffect } from "react";

/**
 * Initializes IntersectionObserver fallback for browsers lacking native CSS view-timeline support.
 * Observes all elements with .reveal-up, .reveal-right, .reveal-left, .reveal-scale classes.
 */
export const useScrollRevealInit = () => {
  useEffect(() => {
    // Feature detect CSS Scroll-Driven Animations (animation-timeline: view())
    const supportsScrollTimeline =
      window.CSS &&
      CSS.supports &&
      CSS.supports("animation-timeline", "view()");

    if (supportsScrollTimeline) {
      document.documentElement.classList.add("supports-scroll-timeline");
      return;
    }

    document.documentElement.classList.add("no-scroll-timeline");

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -10% 0px", // Trigger when element is 10% into viewport from bottom
      threshold: 0.08,
    });

    const observeMatchingElements = () => {
      const elements = document.querySelectorAll(
        ".reveal-up, .reveal-right, .reveal-left, .reveal-scale"
      );
      elements.forEach((el) => {
        if (!el.classList.contains("is-revealed")) {
          observer.observe(el);
        }
      });
    };

    observeMatchingElements();

    // Listen for DOM changes to observe dynamically rendered components or lazy routes
    const mutationObserver = new MutationObserver(() => {
      observeMatchingElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};
