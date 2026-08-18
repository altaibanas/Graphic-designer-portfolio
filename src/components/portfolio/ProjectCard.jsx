import React, { useState, memo } from "react";
import { ZoomIn, RefreshCw, Palette } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { LucideIcon } from "../common/LucideIcon";

export const ProjectCard = memo(({ item, onImageClick }) => {
  const { isRtl } = useLanguage();
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const title = isRtl
    ? item.titleAr || item.title
    : item.titleEn || item.title || item.titleAr;
  const categoryName = isRtl
    ? item.nameAr || item.category
    : item.nameEn || item.category;
  const description = isRtl
    ? item.descAr || item.description
    : item.descEn || item.description;

  const imageSrc = item.image || item.thumbnail || "/images/placeholder.svg";
  const webpSrc = imageSrc.replace(/\.(png|jpe?g)$/i, ".webp");

  const handleCardClick = () => {
    if (onImageClick) {
      onImageClick(item);
    }
  };

  return (
    <article className="card-hover group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm dark:shadow-glass-dark border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/40 dark:hover:border-amber-500/30">
      {/* 16:9 Aspect Ratio Container to prevent Layout Shift (CLS) */}
      <div
        className="relative overflow-hidden aspect-video cursor-pointer bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center"
        onClick={handleCardClick}
      >
        {!imageError ? (
          <>
            {/* Shimmer skeleton while loading */}
            {!isLoaded && (
              <div
                className="absolute inset-0 bg-slate-200 dark:bg-slate-800 animate-pulse flex items-center justify-center"
                aria-hidden="true"
              >
                <RefreshCw size={24} className="text-slate-400 dark:text-slate-600 animate-spin" />
              </div>
            )}
            <picture className="w-full h-full block">
              {webpSrc !== imageSrc && (
                <source srcSet={webpSrc} type="image/webp" />
              )}
              <img
                src={imageSrc}
                alt={title || "Portfolio project"}
                width={800}
                height={450}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-105 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </picture>
          </>
        ) : (
          /* Premium Fallback Placeholder Div */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 text-center select-none border-b border-slate-200/50 dark:border-slate-800">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 flex items-center justify-center mb-3 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform">
              <LucideIcon name={item.category} size={24} strokeWidth={1.75} fallback={Palette} />
            </div>
            <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">
              {categoryName}
            </span>
            <h4 className="text-sm font-black text-slate-800 dark:text-slate-200 line-clamp-1">
              {title}
            </h4>
          </div>
        )}

        {/* Hover Overlay with Zoom Action Button */}
        <div className="absolute inset-0 bg-slate-950/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
          <button
            type="button"
            className="p-3 bg-white/95 dark:bg-slate-900/90 text-slate-900 dark:text-white rounded-full hover:bg-amber-500 hover:text-slate-950 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all shadow-xl transform scale-90 group-hover:scale-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            aria-label={isRtl ? `عرض ${title} بحجم كامل` : `View ${title} full image`}
          >
            <ZoomIn size={20} strokeWidth={2} aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {categoryName && (
            <span
              className={`inline-block px-3 py-1 rounded-full text-xs font-black mb-3 ${
                item.categoryClass ||
                "bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20"
              }`}
            >
              {categoryName}
            </span>
          )}
          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-2 leading-snug">
            {title}
          </h3>
          {description && (
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed line-clamp-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </article>
  );
});

ProjectCard.displayName = "ProjectCard";
