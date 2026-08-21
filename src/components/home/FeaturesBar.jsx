import React from "react";
import { useTranslation } from "react-i18next";
import { homeFeatures } from "../../data/siteData";
import { LucideIcon } from "../common/LucideIcon";

export const FeaturesBar = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 bg-slate-900 dark:bg-night-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {homeFeatures.map((feat, fIdx) => (
            <div
              key={feat.key}
              className={`flex items-center gap-4 bg-slate-800/60 dark:bg-slate-900/60 p-6 rounded-2xl border border-slate-700/60 hover:border-amber-500/50 transition-all duration-300 transform hover:-translate-y-1 group reveal-up delay-${(fIdx + 1) * 100}`}
            >
              <div className="bg-gradient-to-br from-amber-600 to-yellow-500 text-slate-950 p-3.5 rounded-2xl flex-shrink-0 shadow-md group-hover:scale-110 transition-transform">
                <LucideIcon name={feat.icon} size={24} strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-black text-base text-white mb-1">
                  {t(`features.${feat.key}`)}
                </h3>
                <p className="text-xs text-slate-400">
                  {t(`features.${feat.key}Desc`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
