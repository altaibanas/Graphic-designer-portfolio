import React from "react";
import { LayoutGrid, Palette, Share2, Printer, Package } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { portfolioCategories } from "../../data/portfolioData";

const getCategoryIcon = (id) => {
  switch (id) {
    case "all":
      return LayoutGrid;
    case "branding":
      return Palette;
    case "social":
      return Share2;
    case "print":
      return Printer;
    case "packaging":
      return Package;
    default:
      return LayoutGrid;
  }
};

export const PortfolioFilter = ({ activeCategory, onSelectCategory }) => {
  const { isRtl } = useLanguage();

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-10" role="tablist" aria-label="Portfolio Category Filter">
      {portfolioCategories.map((cat) => {
        const isActive = activeCategory === cat.id;
        const IconComponent = getCategoryIcon(cat.id);

        return (
          <button
            key={cat.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onSelectCategory(cat.id)}
            className={`px-4 sm:px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all duration-300 inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
              isActive
                ? "bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-950 shadow-md shadow-amber-500/25 scale-105"
                : "bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800"
            }`}
          >
            <IconComponent size={16} strokeWidth={isActive ? 2.2 : 1.75} aria-hidden="true" />
            <span>{isRtl ? cat.nameAr : cat.nameEn}</span>
          </button>
        );
      })}
    </div>
  );
};
