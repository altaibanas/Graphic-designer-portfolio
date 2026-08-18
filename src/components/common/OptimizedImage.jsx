import React, { useState } from "react";
import { ImageOff } from "lucide-react";

/**
 * Enterprise Optimized Image Component
 * - Uses <picture> for modern formats (WebP/AVIF) when available
 * - Handles lazy loading, async decoding, CLS prevention, and graceful fallbacks
 */
export const OptimizedImage = ({
  src,
  webpSrc,
  avifSrc,
  alt = "",
  className = "",
  containerClassName = "",
  aspectRatio = "aspect-video",
  priority = false,
  fallback = null,
  width,
  height,
  onClick,
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const resolvedWebp = webpSrc || (src && src.replace(/\.(png|jpe?g)$/i, ".webp"));

  if (hasError && fallback) {
    return fallback;
  }

  return (
    <div
      className={`relative overflow-hidden ${aspectRatio} ${containerClassName}`}
      onClick={onClick}
    >
      {/* Loading Skeleton Pulse */}
      {!isLoaded && !hasError && (
        <div
          className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse"
          aria-hidden="true"
        />
      )}

      {!hasError ? (
        <picture>
          {avifSrc && <source srcSet={avifSrc} type="image/avif" />}
          {resolvedWebp && resolvedWebp !== src && (
            <source srcSet={resolvedWebp} type="image/webp" />
          )}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            fetchpriority={priority ? "high" : "auto"}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } ${className}`}
          />
        </picture>
      ) : (
        /* Fallback placeholder when image is missing */
        <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 text-center select-none">
          <ImageOff size={32} strokeWidth={1.5} className="mb-1 text-slate-400 dark:text-slate-500" aria-hidden="true" />
          <span className="text-xs font-semibold">{alt || "Image unavailable"}</span>
        </div>
      )}
    </div>
  );
};
