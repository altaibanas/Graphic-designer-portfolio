import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Compass, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/common/PageHeader";

export const NotFoundPage = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const ArrowBackIcon = isRtl ? ArrowRight : ArrowLeft;

  return (
    <>
      <SEO
        title={isRtl ? "404 - الصفحة غير موجودة" : "404 - Page Not Found"}
        description={isRtl ? "الصفحة التي تبحث عنها غير موجودة أو تم نقلها." : "The page you are looking for does not exist or has been moved."}
        noIndex={true}
      />
      <div className="animate-in fade-in duration-300">
        <PageHeader
          title={t("notFound.title")}
          highlight={t("notFound.highlight")}
          subtitle={t("notFound.subtitle")}
        />

        <section className="py-24 bg-white dark:bg-[#0a0e17] text-center transition-colors duration-300">
          <div className="max-w-xl mx-auto px-4">
            <div className="w-24 h-24 bg-amber-500/10 text-amber-600 dark:text-amber-400 rounded-3xl flex items-center justify-center mx-auto mb-6 group">
              <Compass size={48} strokeWidth={1.5} className="group-hover:rotate-45 transition-transform duration-500" aria-hidden="true" />
            </div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
              {t("notFound.heading")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base mb-8">
              {t("notFound.description")}
            </p>
            <Link
              to="/"
              className="btn-gold px-8 py-3.5 rounded-xl font-black text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group/btn"
            >
              <ArrowBackIcon size={16} strokeWidth={2.2} className="group-hover/btn:-translate-x-1 rtl:group-hover/btn:translate-x-1 transition-transform" aria-hidden="true" />
              <span>{t("notFound.backHome")}</span>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};
