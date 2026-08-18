import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";

export const ThemeToggle = ({ className = "" }) => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl transition-all duration-300 flex items-center justify-center border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group ${
        isDark
          ? "bg-slate-850/80 border-slate-700/60 text-amber-400 hover:border-amber-400/50 hover:bg-slate-800 shadow-sm"
          : "bg-white/90 border-slate-200 text-amber-600 hover:border-amber-400 hover:bg-amber-50/50 shadow-sm"
      } ${className}`}
      aria-label={isDark ? t("theme.light") : t("theme.dark")}
      title={isDark ? t("theme.light") : t("theme.dark")}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun
            size={20}
            strokeWidth={1.75}
            className="w-5 h-5 text-amber-400 transition-transform duration-300 group-hover:rotate-45 group-hover:scale-110"
            aria-hidden="true"
          />
        ) : (
          <Moon
            size={20}
            strokeWidth={1.75}
            className="w-5 h-5 text-amber-600 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110"
            aria-hidden="true"
          />
        )}
      </div>
    </button>
  );
};
