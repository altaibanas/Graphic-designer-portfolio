import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";

export const CtaBanner = () => {
  const { t } = useTranslation();

  return (
    <section
      id="contact-cta"
      className="py-16 md:py-20 bg-gradient-to-r from-night-950 via-slate-900 to-night-950 text-white relative overflow-hidden transition-colors duration-300 reveal-up"
    >
      <div className="decorative-dots top-5 start-5 opacity-40" aria-hidden="true" />
      <div className="decorative-dots bottom-5 end-5 opacity-40" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-center lg:text-start">
          <div className="lg:w-3/5">
            <h2 className="text-2xl md:text-4xl font-black mb-4 text-white leading-snug">
              {t("cta.title")}
            </h2>
            <p className="text-base md:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t("cta.description")}
            </p>
          </div>
          <div className="lg:w-2/5 flex justify-center lg:justify-end">
            <Link
              to="/contact"
              className="bg-white text-slate-900 dark:bg-gold-500 dark:text-slate-950 px-8 md:px-10 py-4 rounded-2xl font-black text-base md:text-lg hover:shadow-2xl transition-all duration-300 inline-flex items-center gap-3 transform hover:-translate-y-1 hover:scale-105 pulse-glow border-2 border-amber-400 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <Send size={20} strokeWidth={2} className="text-amber-600 dark:text-slate-950 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
              <span>{t("cta.button")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
