import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Award, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { SkillBar } from "../common/SkillBar";

export const WhyChooseMe = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 bg-slate-50 dark:bg-night-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Image & Floating Badge */}
          <div className="lg:w-1/2 relative reveal-left">
            <div className="relative max-w-md mx-auto">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Anas Al-Tayeb graphic designer profile"
                width={500}
                height={500}
                loading="eager"
                decoding="async"
                className="rounded-3xl shadow-xl border-2 border-slate-200 dark:border-slate-800 object-cover w-full"
              />
              <div className="absolute -bottom-6 start-6 bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-xl border border-amber-500/30">
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500/10 text-amber-600 dark:text-amber-400 p-3 rounded-xl flex items-center justify-center">
                    <Award size={24} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-slate-900 dark:text-white">
                      ✨
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-bold">
                      {t("about.experienceDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 text-center lg:text-start reveal-right">
            <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
              {t("whyMe.badge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
              {t("whyMe.title")}{" "}
              <span className="text-amber-600 dark:text-amber-400">
                {t("whyMe.titleHighlight")}
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed mb-8">
              {t("whyMe.description")}
            </p>

            <div className="space-y-4 mb-8 text-start">
              <SkillBar name="Photoshop" percentage={95} />
              <SkillBar name="Illustrator" percentage={90} />
              <SkillBar name="InDesign" percentage={85} />
              <SkillBar name="Figma & UI" percentage={80} />
            </div>

            <div className="pt-2">
              <Link
                to="/about"
                className="btn-gold px-8 py-3.5 rounded-xl font-black text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group/btn"
              >
                <span>{t("whyMe.learnMore")}</span>
                <ArrowIcon size={16} strokeWidth={2.2} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
