import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { services } from "../../data/servicesData";
import { LucideIcon } from "../common/LucideIcon";

export const ServicesPreview = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="services" className="py-20 bg-[#f8fafc] dark:bg-[#0a0e17] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
            {t("services.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            {t("services.title")}{" "}
            <span className="text-amber-600 dark:text-amber-400">{t("services.titleHighlight")}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            {t("services.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, sIdx) => (
            <div
              key={service.id}
              className={`creative-card card-hover bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm dark:shadow-glass-dark border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between reveal-scale delay-${(sIdx + 1) * 100}`}
            >
              <div>
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform`}
                >
                  <LucideIcon name={service.icon} size={26} strokeWidth={1.75} />
                </div>
                <h3 className="text-xl font-black mb-3 text-slate-900 dark:text-white">
                  {isRtl ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {isRtl ? service.descriptionAr : service.descriptionEn}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {(isRtl ? service.featuresAr : service.featuresEn).slice(0, 3).map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      <CheckCircle2 size={16} strokeWidth={2} className="text-amber-500 me-2 flex-shrink-0" aria-hidden="true" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6 flex justify-between items-center">
                <Link
                  to={`/services/${service.slug}`}
                  className="text-amber-600 dark:text-amber-400 font-bold text-sm hover:underline inline-flex items-center gap-1 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
                >
                  <span>{t("services.viewDetails")}</span>
                  <ArrowIcon size={16} strokeWidth={2} className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" aria-hidden="true" />
                </Link>
                <Link
                  to="/contact"
                  className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-amber-500 hover:text-slate-950 px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {t("services.orderService")}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="btn-silver px-8 py-3.5 rounded-xl font-black text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group/btn"
          >
            <span>{t("services.viewAll")}</span>
            <ArrowIcon size={16} strokeWidth={2.2} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
