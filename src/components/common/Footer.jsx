import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  PenTool,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Phone,
  Mail,
  Send,
  Palette,
} from "lucide-react";
import {
  BehanceIcon,
  InstagramIcon,
  LinkedinIcon,
  DribbbleIcon,
} from "./SocialIcons";
import { useLanguage } from "../../context/LanguageContext";
import { contactInfo } from "../../data/siteData";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <footer className="bg-slate-900 dark:bg-night-950 text-white py-16 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & About Column */}
          <div>
            <Link
              to="/"
              className="flex items-center gap-3 mb-6 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl"
            >
              <div className="bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 text-slate-950 p-2.5 rounded-xl shadow-lg shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <PenTool size={20} strokeWidth={2} aria-hidden="true" />
              </div>
              <span className="text-2xl font-black text-white leading-tight">
                {t("nav.brandFirst")}<br />
                <span className="text-amber-400">{t("nav.brandSecond")}</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {t("footer.about")}
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {/* Behance */}
              <a
                href={contactInfo.socials.behance}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 text-slate-300 p-2.5 rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                title="Behance"
                aria-label="Behance Profile"
              >
                <BehanceIcon size={16} />
              </a>

              {/* Instagram */}
              <a
                href={contactInfo.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 text-slate-300 p-2.5 rounded-xl hover:bg-[#E4405F] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                title="Instagram"
                aria-label="Instagram Profile"
              >
                <InstagramIcon size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href={contactInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 text-slate-300 p-2.5 rounded-xl hover:bg-[#0A66C2] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                title="LinkedIn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>

              {/* Dribbble */}
              <a
                href={contactInfo.socials.dribbble}
                target="_blank"
                rel="noreferrer"
                className="bg-slate-800 text-slate-300 p-2.5 rounded-xl hover:bg-[#EA4C89] hover:text-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                title="Dribbble"
                aria-label="Dribbble Portfolio"
              >
                <DribbbleIcon size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-black mb-6 text-white border-s-2 border-amber-500 ps-3">
              {t("footer.quickLinks")}
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5 group/link">
                  <ChevronIcon size={14} strokeWidth={2.5} className="text-amber-500 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" aria-hidden="true" />
                  <span>{t("nav.home")}</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5 group/link">
                  <ChevronIcon size={14} strokeWidth={2.5} className="text-amber-500 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" aria-hidden="true" />
                  <span>{t("nav.about")}</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5 group/link">
                  <ChevronIcon size={14} strokeWidth={2.5} className="text-amber-500 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" aria-hidden="true" />
                  <span>{t("nav.services")}</span>
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5 group/link">
                  <ChevronIcon size={14} strokeWidth={2.5} className="text-amber-500 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" aria-hidden="true" />
                  <span>{t("nav.portfolio")}</span>
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5 group/link">
                  <ChevronIcon size={14} strokeWidth={2.5} className="text-amber-500 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" aria-hidden="true" />
                  <span>{t("nav.blog")}</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-amber-400 transition flex items-center gap-1.5 group/link">
                  <ChevronIcon size={14} strokeWidth={2.5} className="text-amber-500 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5 transition-transform" aria-hidden="true" />
                  <span>{t("nav.contact")}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-black mb-6 text-white border-s-2 border-amber-500 ps-3">
              {t("footer.services")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link to="/services/visual-identity" className="hover:text-amber-400 transition block">
                  {isRtl ? "تصميم الهوية البصرية" : "Brand Identity Design"}
                </Link>
              </li>
              <li>
                <Link to="/services/social-media-design" className="hover:text-amber-400 transition block">
                  {isRtl ? "تصاميم وسائل التواصل" : "Social Media Design"}
                </Link>
              </li>
              <li>
                <Link to="/services/print-design" className="hover:text-amber-400 transition block">
                  {isRtl ? "تصميم المطبوعات" : "Print & Editorial"}
                </Link>
              </li>
              <li>
                <Link to="/services/ads-design" className="hover:text-amber-400 transition block">
                  {isRtl ? "تصميم الإعلانات" : "Advertising Design"}
                </Link>
              </li>
              <li>
                <Link to="/services/visual-consultations" className="hover:text-amber-400 transition block">
                  {isRtl ? "استشارات بصرية" : "Visual Brand Consulting"}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-black mb-6 text-white border-s-2 border-amber-500 ps-3">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 mb-6">
              <li className="flex items-center gap-2.5">
                <MapPin size={16} strokeWidth={2} className="text-amber-400 flex-shrink-0" aria-hidden="true" />
                <span>{isRtl ? contactInfo.locationAr : contactInfo.locationEn}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} strokeWidth={2} className="text-amber-400 flex-shrink-0" aria-hidden="true" />
                <span dir="ltr">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} strokeWidth={2} className="text-amber-400 flex-shrink-0" aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </li>
            </ul>

            <div className="bg-slate-800/80 p-5 rounded-2xl border border-slate-700/80">
              <h4 className="font-bold text-sm text-white mb-2">{t("footer.newsletter")}</h4>
              <p className="text-slate-400 text-xs mb-3">
                {t("footer.newsletterDesc")}
              </p>
              {subscribed ? (
                <div className="bg-amber-500/20 border border-amber-500/40 text-amber-300 p-2.5 rounded-xl text-xs text-center font-bold">
                  {t("footer.subscribed")}
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("footer.newsletterPlaceholder")}
                    className="bg-slate-900 text-white rounded-s-xl px-3.5 py-2.5 w-full focus:outline-none focus:ring-1 focus:ring-amber-500 text-xs border border-slate-700"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="bg-gradient-to-r from-amber-600 to-yellow-500 text-slate-950 px-3.5 py-2.5 rounded-e-xl font-bold flex items-center justify-center hover:from-amber-500 hover:to-yellow-400 transition hover:scale-105"
                  >
                    <Send size={16} strokeWidth={2} aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-500 text-xs">
          <p className="flex items-center justify-center gap-2">
            <Palette size={14} strokeWidth={2} className="text-amber-400" aria-hidden="true" />
            <span>{t("footer.rights", { year: new Date().getFullYear() })}</span>
            <Palette size={14} strokeWidth={2} className="text-amber-400" aria-hidden="true" />
          </p>
        </div>
      </div>
    </footer>
  );
};
