import React from "react";
import { useTranslation } from "react-i18next";
import { designTools } from "../../data/siteData";
import { LucideIcon } from "../common/LucideIcon";

export const ToolsGrid = () => {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-slate-50 dark:bg-night-900 border-b border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-xs sm:text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-8">
          {t("tools.title")}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
          {designTools.map((tool) => (
            <div
              key={tool.name}
              className={`group flex items-center justify-center gap-3 p-4 rounded-2xl bg-white dark:bg-slate-850/60 border border-slate-200 dark:border-slate-800 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1 ${tool.bgHover} ${tool.borderHover}`}
            >
              <LucideIcon
                name={tool.icon}
                size={22}
                strokeWidth={1.75}
                className={`text-slate-400 dark:text-slate-500 group-hover:scale-110 transition-all duration-300 ${tool.iconColor}`}
              />
              <span className="font-bold text-slate-700 dark:text-slate-200 text-sm">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
