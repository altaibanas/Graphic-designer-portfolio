import React, { useState } from "react";
import { CheckCircle2, Send, RefreshCw } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { services } from "../../data/servicesData";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "visual-identity",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        service: "visual-identity",
        message: "",
      });
    }, 1000);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-sm dark:shadow-glass-dark border border-slate-200/80 dark:border-slate-800 transition-colors duration-300">
      <h3 className="text-2xl font-black mb-2 text-slate-900 dark:text-white">
        {t("contact.formTitle")}{" "}
        <span className="text-amber-600 dark:text-amber-400">{t("contact.formHighlight")}</span>
      </h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8">
        {t("contact.subtitle")}
      </p>

      {isSubmitted ? (
        <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-700 dark:text-emerald-400 p-6 rounded-2xl text-center my-6 animate-in fade-in">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
            <CheckCircle2 size={28} strokeWidth={2.2} className="text-emerald-500" aria-hidden="true" />
          </div>
          <h4 className="font-bold text-lg mb-1">{t("contact.successTitle")}</h4>
          <p className="text-sm opacity-90 mb-4">
            {t("contact.successDesc")}
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="btn-gold px-6 py-2 rounded-xl text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {t("contact.sendAnother")}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              {t("contact.nameLabel")}
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder={t("contact.namePlaceholder")}
              className="w-full bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 rounded-xl px-4 py-3.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              {t("contact.emailLabel")}
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder={t("contact.emailPlaceholder")}
              className="w-full bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 rounded-xl px-4 py-3.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              {t("contact.serviceLabel")}
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 rounded-xl px-4 py-3.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
              {services.map((srv) => (
                <option key={srv.slug} value={srv.slug}>
                  {isRtl ? srv.titleAr : srv.titleEn}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
              {t("contact.messageLabel")}
            </label>
            <textarea
              name="message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.messagePlaceholder")}
              className="w-full bg-slate-50 dark:bg-slate-850 text-slate-800 dark:text-slate-100 rounded-xl px-4 py-3.5 text-sm border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-gold w-full py-4 rounded-xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
          >
            {isSubmitting ? (
              <RefreshCw size={18} strokeWidth={2} className="animate-spin" aria-hidden="true" />
            ) : (
              <Send size={18} strokeWidth={2} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 group-hover:-translate-y-1 transition-transform" aria-hidden="true" />
            )}
            <span>{isSubmitting ? t("contact.submitting") : t("contact.submit")}</span>
          </button>
        </form>
      )}
    </div>
  );
};
