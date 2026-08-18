import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { CheckCircle2, Star, Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const Hero = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <section className="gradient-bg text-white pt-32 pb-20 overflow-hidden relative transition-colors duration-300">
      <div
        className="decorative-dots top-10 end-10 opacity-60"
        aria-hidden="true"
      />
      <div
        className="decorative-dots bottom-10 start-10 opacity-60"
        aria-hidden="true"
      />

      {/* Ambient Glow Orbs */}
      <div
        className="absolute top-1/4 start-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 end-1/4 w-96 h-96 bg-slate-500/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-start">
            <span className="inline-flex items-center gap-1.5 bg-white/10 dark:bg-slate-800/60 backdrop-blur-md text-amber-300 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 border border-amber-500/30 shadow-sm">
              <Sparkles
                size={14}
                strokeWidth={2}
                className="text-amber-400"
                aria-hidden="true"
              />
              <span>{t("hero.badge")}</span>
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white tracking-tight">
              {t("hero.titlePrefix")}
              <br />
              <span className="text-amber-400">{t("hero.titleHighlight")}</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="btn-gold px-8 py-4 rounded-2xl text-base md:text-lg text-center pulse-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 inline-flex items-center justify-center gap-2 group/btn"
              >
                <span>{t("hero.ctaConsult")}</span>
                {isRtl ? (
                  <ArrowLeft
                    size={18}
                    strokeWidth={2.2}
                    className="group-hover/btn:-translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                ) : (
                  <ArrowRight
                    size={18}
                    strokeWidth={2.2}
                    className="group-hover/btn:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                )}
              </Link>
              <Link
                to="/portfolio"
                className="btn-silver px-8 py-4 rounded-2xl text-base md:text-lg text-center !text-white font-bold drop-shadow-md border-slate-400 hover:border-amber-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {t("hero.ctaPortfolio")}
              </Link>
            </div>

            <div className="flex flex-wrap gap-4 mt-10 justify-center lg:justify-start">
              <div className="flex items-center bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700">
                <div className="bg-amber-500/20 p-1.5 rounded-full me-2.5 flex items-center justify-center">
                  <CheckCircle2
                    size={16}
                    strokeWidth={2.2}
                    className="text-amber-400"
                    aria-hidden="true"
                  />
                </div>
                <span className="font-semibold text-xs sm:text-sm text-slate-200">
                  {t("hero.certified")}
                </span>
              </div>
            </div>
          </div>

          {/* Hero Mockup Image (LCP Prioritized) & Floating Card */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="relative max-w-md lg:max-w-lg">
              <img
                src="/public/images/hero.webp"
                alt="Anas Al-Tayeb creative branding and design showcase"
                width={400}
                height={250}
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="hero-image w-full object-cover floating"
              />
              <div className="absolute -bottom-6 end-2 bg-slate-900/90 dark:bg-night-900/90 backdrop-blur-md rounded-2xl p-4 shadow-2xl border border-amber-500/40 z-20">
                <div className="flex items-center gap-3">
                  <div className="bg-gradient-to-br from-amber-600 to-yellow-500 text-slate-950 p-2.5 rounded-xl shadow-md">
                    <Star
                      size={20}
                      strokeWidth={2.2}
                      className="fill-amber-400 text-slate-950"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-slate-200 text-xs sm:text-sm font-bold">
                      {t("hero.floatingCard")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Divider */}
      <div
        className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          className="relative block w-full h-12 md:h-16 text-[#f8fafc] dark:text-[#0a0e17] fill-current transition-colors duration-300"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path d="M0,30 C360,80 1080,0 1440,30 L1440,100 L0,100 Z" />
        </svg>
      </div>
    </section>
  );
};
