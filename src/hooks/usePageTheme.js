import { useEffect } from "react";

/**
 * Custom hook to dynamically apply a page-scoped theme class to document.body.
 * Cleans up the class automatically upon route change or unmount.
 * @param {string} themeClass - CSS class name (e.g., "page-home", "page-about", "page-services", "page-portfolio", "page-blog", "page-contact")
 */
export const usePageTheme = (themeClass) => {
  useEffect(() => {
    if (!themeClass) return;

    document.body.classList.add(themeClass);

    return () => {
      document.body.classList.remove(themeClass);
    };
  }, [themeClass]);
};
