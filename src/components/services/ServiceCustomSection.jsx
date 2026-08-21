import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { LucideIcon } from "../common/LucideIcon";

export const ServiceCustomSection = ({ service }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const section = isRtl ? service?.customSectionAr : service?.customSectionEn;
  if (!section) return null;

  return (
    <div className="mt-20 border-t border-slate-200 dark:border-slate-800/80 pt-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20 backdrop-blur-sm">
          {section.badge}
        </span>
        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          {section.title}{" "}
          <span className="text-amber-600 dark:text-amber-400">{section.highlight}</span>
        </h3>
        <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {section.description}
        </p>
      </div>

      {/* Step-by-Step Strategic Timeline / Process */}
      {section.steps && section.steps.length > 0 && (
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.steps.map((st, idx) => (
              <div
                key={idx}
                className="group relative bg-white dark:bg-slate-900 rounded-3xl p-7 border border-slate-200/90 dark:border-slate-800 shadow-sm hover:shadow-xl dark:hover:shadow-glow/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Background ambient corner number */}
                <span className="absolute top-4 end-5 text-4xl font-black text-slate-100 dark:text-slate-800/60 select-none group-hover:text-amber-500/20 transition-colors">
                  {st.step}
                </span>

                <div>
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5 border border-amber-500/20 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300">
                    <LucideIcon name={st.icon} size={22} strokeWidth={1.75} />
                  </div>
                  <div className="inline-block px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-black uppercase tracking-wider mb-2">
                    {t("services.stepLabel", { step: st.step })}
                  </div>
                  <h4 className="text-lg font-black text-slate-900 dark:text-white mb-2.5 leading-snug">
                    {st.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contextual Sub-Section 1: Framework & Philosophy (Visual Identity) */}
      {section.type === "framework_and_philosophy" && section.pillars && (
        <div className="bg-gradient-to-br from-slate-50 to-amber-500/5 dark:from-slate-900 dark:to-slate-850/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-800 mb-16 relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              {section.philosophyTitle}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {section.philosophyDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.pillars.map((pil, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-amber-500/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <LucideIcon name={pil.icon} size={20} strokeWidth={1.75} />
                </div>
                <h5 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                  {pil.title}
                </h5>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contextual Sub-Section 2: Platform Mastery Matrix (Social Media Design) */}
      {section.type === "platform_matrix" && section.platforms && (
        <div className="bg-gradient-to-br from-slate-50 to-blue-500/5 dark:from-slate-900 dark:to-slate-850/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-800 mb-16 relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              {section.platformsTitle}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {section.platformsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.platforms.map((plat, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <LucideIcon name={plat.icon} size={20} strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                      {plat.badge}
                    </span>
                  </div>
                  <h5 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                    {plat.platform}
                  </h5>
                  <p className="text-amber-600 dark:text-amber-400 text-xs font-mono font-bold mb-3">
                    {plat.aspects}
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    {plat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contextual Sub-Section 3: Pre-Press & Luxury Finishes (Print Design) */}
      {section.type === "prepress_and_finishes" && section.finishes && (
        <div className="bg-gradient-to-br from-slate-50 to-emerald-500/5 dark:from-slate-900 dark:to-slate-850/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-800 mb-16 relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              {section.finishesTitle}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {section.finishesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {section.finishes.map((fin, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-emerald-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <LucideIcon name={fin.icon} size={20} strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                      {fin.badge}
                    </span>
                  </div>
                  <h5 className="font-bold text-sm sm:text-base text-slate-900 dark:text-white mb-2 leading-snug">
                    {fin.name}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                    {fin.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contextual Sub-Section 4: Performance Ad Funnel (Advertising Design) */}
      {section.type === "ad_performance_funnel" && section.funnelStages && (
        <div className="bg-gradient-to-br from-slate-50 to-rose-500/5 dark:from-slate-900 dark:to-slate-850/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-800 mb-16 relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              {section.funnelTitle}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {section.funnelDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {section.funnelStages.map((stg, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-rose-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <LucideIcon name={stg.icon} size={20} strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
                      {stg.badge}
                    </span>
                  </div>
                  <h5 className="font-bold text-base text-slate-900 dark:text-white mb-2 leading-snug">
                    {stg.stage}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {stg.focus}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contextual Sub-Section 5: Diagnostic Bottleneck Resolvers (Consultations) */}
      {section.type === "diagnostic_protocol" && section.issues && (
        <div className="bg-gradient-to-br from-slate-50 to-purple-500/5 dark:from-slate-900 dark:to-slate-850/80 rounded-3xl p-8 sm:p-12 border border-slate-200/90 dark:border-slate-800 mb-16 relative overflow-hidden">
          <div className="max-w-2xl mb-10">
            <h4 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-3">
              {section.issuesTitle}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              {section.issuesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {section.issues.map((iss, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/90 rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 shadow-sm hover:border-purple-500/40 transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                  <LucideIcon name={iss.icon} size={20} strokeWidth={1.75} />
                </div>
                <div>
                  <h5 className="font-bold text-base text-slate-900 dark:text-white mb-1.5">
                    {iss.problem}
                  </h5>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {iss.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Tailored Project Call-To-Action Card */}
      <div className="bg-slate-900 text-white dark:bg-slate-850 rounded-3xl p-8 sm:p-10 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="absolute -end-16 -bottom-16 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl text-center md:text-start relative z-10">
          <span className="inline-block text-amber-400 font-bold text-xs uppercase tracking-wider mb-2">
            ✦ {t("services.customSolutionGuarantee")}
          </span>
          <h4 className="text-2xl sm:text-3xl font-black mb-3 text-white leading-tight">
            {section.ctaTitle}
          </h4>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {section.ctaDesc}
          </p>
        </div>

        <div className="relative z-10 flex-shrink-0 w-full md:w-auto flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/contact"
            className="btn-gold px-8 py-4 rounded-xl font-black text-sm text-center shadow-lg hover:scale-105 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {t("services.discussProject")}
          </Link>
          <Link
            to="/portfolio"
            className="btn-silver px-6 py-4 rounded-xl font-bold text-sm text-center text-white border-slate-700 hover:border-amber-500 hover:text-amber-400 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {t("services.similarWorks")}
          </Link>
        </div>
      </div>
    </div>
  );
};
