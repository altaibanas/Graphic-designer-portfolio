import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { LucideIcon } from "../common/LucideIcon";

export const ServiceCard = ({ service }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="creative-card card-hover bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-sm dark:shadow-glass-dark border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group reveal-scale">
      <div>
        <div
          className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.iconBg} flex items-center justify-center mb-6 border group-hover:scale-110 transition-transform`}
        >
          <LucideIcon name={service.icon} size={26} strokeWidth={1.75} />
        </div>
        <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">
          {isRtl ? service.titleAr : service.titleEn}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
          {isRtl ? service.descriptionAr : service.descriptionEn}
        </p>

        <div className="mb-8">
          <h4 className="font-black text-xs uppercase tracking-wider text-slate-400 mb-3">
            {t("services.whatIncluded")}
          </h4>
          <ul className="space-y-2.5">
            {(isRtl ? service.featuresAr : service.featuresEn).map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300"
              >
                <CheckCircle2 size={16} strokeWidth={2} className="text-amber-500 me-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-100 dark:border-slate-800/80 pt-6 flex flex-col sm:flex-row gap-3 justify-between items-center">
        <Link
          to={`/services/${service.slug}`}
          className="text-amber-600 dark:text-amber-400 font-bold text-sm hover:underline inline-flex items-center gap-1 group/link w-full sm:w-auto justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
        >
          <span>{t("services.viewDetails")}</span>
          <ArrowIcon size={16} strokeWidth={2} className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" aria-hidden="true" />
        </Link>
        <Link
          to="/contact"
          className="btn-gold w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-black text-center shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        >
          {t("services.orderService")}
        </Link>
      </div>
    </div>
  );
};
