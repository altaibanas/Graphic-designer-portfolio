import React from "react";
import { useTranslation } from "react-i18next";
import { LucideIcon } from "../common/LucideIcon";

export const ProcessSteps = () => {
  const { t } = useTranslation();

  const steps = [
    {
      num: "01",
      icon: "search",
      titleKey: "step1",
      descKey: "step1Desc",
    },
    {
      num: "02",
      icon: "lightbulb",
      titleKey: "step2",
      descKey: "step2Desc",
    },
    {
      num: "03",
      icon: "brush",
      titleKey: "step3",
      descKey: "step3Desc",
    },
    {
      num: "04",
      icon: "verified",
      titleKey: "step4",
      descKey: "step4Desc",
    },
  ];

  return (
    <section className="py-20 bg-slate-50 dark:bg-night-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
            {t("process.badge")}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            {t("process.title")}{" "}
            <span className="text-amber-600 dark:text-amber-400">{t("process.titleHighlight")}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            {t("process.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`bg-white dark:bg-slate-850/70 rounded-3xl p-8 shadow-sm dark:shadow-glass-dark border border-slate-200/80 dark:border-slate-800 relative group hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between reveal-right delay-${(idx + 1) * 100}`}
            >
              <span className="text-5xl font-black text-slate-200 dark:text-slate-800 absolute top-4 end-4 select-none group-hover:text-amber-500/20 transition-colors">
                {step.num}
              </span>
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-6 border border-amber-500/20 group-hover:scale-110 transition-transform">
                  <LucideIcon name={step.icon} size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3">
                  {t(`process.${step.titleKey}`)}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {t(`process.${step.descKey}`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
