import React from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";
import { contactInfo } from "../../data/siteData";

export const ContactInfo = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <div className="space-y-8">
      <div>
        <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
          {t("nav.contact")}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
          {t("contact.title")}{" "}
          <span className="text-amber-600 dark:text-amber-400">{t("contact.titleHighlight")}</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
          {t("contact.subtitle")}
        </p>
      </div>

      <div className="space-y-4">
        {/* Phone */}
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm group hover:border-amber-500/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Phone size={22} strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold mb-1">{t("contact.phone")}</p>
            <a
              href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
              dir="ltr"
              className="text-slate-800 dark:text-slate-200 font-bold hover:text-amber-500 transition block text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              {contactInfo.phone}
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm group hover:border-amber-500/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mail size={22} strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold mb-1">{t("contact.email")}</p>
            <a
              href={`mailto:${contactInfo.email}`}
              className="text-slate-800 dark:text-slate-200 font-bold hover:text-amber-500 transition block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
            >
              {contactInfo.email}
            </a>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-4 bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm group hover:border-amber-500/40 transition-colors">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <MapPin size={22} strokeWidth={1.75} aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs text-slate-400 font-bold mb-1">{t("contact.location")}</p>
            <p className="text-slate-800 dark:text-slate-200 font-bold">
              {isRtl ? contactInfo.locationAr : contactInfo.locationEn}
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      <a
        href={contactInfo.socials.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-2xl font-black text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 group"
      >
        <MessageCircle size={20} strokeWidth={2} className="group-hover:scale-110 transition-transform" aria-hidden="true" />
        <span>{t("contact.whatsappBtn")}</span>
      </a>

      {/* Working Hours */}
      <div className="bg-slate-100 dark:bg-slate-850/60 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
        <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-2 flex items-center gap-2">
          <Clock size={16} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
          <span>{t("contact.workingHours")}</span>
        </h4>
        <p className="text-slate-600 dark:text-slate-400 text-xs mb-2">
          {isRtl ? contactInfo.hoursAr : contactInfo.hoursEn}
        </p>
        <p className="text-amber-600 dark:text-amber-400 text-xs font-bold">
          {t("contact.supportNotice")}
        </p>
      </div>
    </div>
  );
};
