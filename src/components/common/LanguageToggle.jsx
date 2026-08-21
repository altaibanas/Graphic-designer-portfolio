import React from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { useTheme } from "../../context/ThemeContext";

export const LanguageToggle = ({ className = "" }) => {
  const { setLanguage, isRtl } = useLanguage();
  const { isDark } = useTheme();

  return (
    <div
      role="group"
      aria-label="Language Selector"
      className={`inline-flex items-center p-1 rounded-xl border transition-all duration-300 ${
        isDark
          ? "bg-slate-850/80 border-slate-700/60"
          : "bg-white/90 border-slate-200 shadow-sm"
      } ${className}`}
    >
      <div className="ps-2 pe-1 text-slate-400 dark:text-slate-500 flex items-center" aria-hidden="true">
        <Globe size={14} strokeWidth={2} />
      </div>

      <button
        type="button"
        onClick={() => setLanguage("ar")}
        aria-pressed={isRtl}
        aria-label="التبديل إلى اللغة العربية"
        className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all duration-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
          isRtl
            ? "bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-900 shadow-md shadow-amber-500/20 scale-[1.02]"
            : isDark
            ? "text-slate-400 hover:text-slate-200"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <span>عربي</span>
      </button>

      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={!isRtl}
        aria-label="Switch to English language"
        className={`px-3 py-1.5 rounded-lg text-xs font-black transition-all duration-300 flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
          !isRtl
            ? "bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-900 shadow-md shadow-amber-500/20 scale-[1.02]"
            : isDark
            ? "text-slate-400 hover:text-slate-200"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        <span>EN</span>
      </button>
    </div>
  );
};
