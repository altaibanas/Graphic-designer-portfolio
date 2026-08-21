import React from "react";
import { useTranslation } from "react-i18next";
import { GraduationCap, Award, Lightbulb, CheckCircle2, MessageSquare, Sparkles, Heart } from "lucide-react";
import { PageHeader } from "../components/common/PageHeader";
import { SkillBar } from "../components/common/SkillBar";
import { ToolsGrid } from "../components/home/ToolsGrid";
import { FeaturesBar } from "../components/home/FeaturesBar";
import { CtaBanner } from "../components/common/CtaBanner";
import { SEO } from "../components/common/SEO";
import { useLanguage } from "../context/LanguageContext";
import { usePageTheme } from "../hooks/usePageTheme";

export const AboutPage = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  usePageTheme("page-about");

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: isRtl ? "أنس الطيب" : "Anas Al-Tayeb",
    jobTitle: isRtl ? "مصمم جرافيك ومطور هوية بصرية محترف" : "Senior Graphic & Brand Identity Designer",
    description: isRtl
      ? "مصمم جرافيك سوداني محترف متخصص في بناء الهويات البصرية، تصاميم السوشيال ميديا، المطبوعات، وتجربة المستخدم."
      : "Professional Graphic Designer specializing in brand identity, social media design, print media, and UX.",
    url: "https://anasdesign.com/about",
    sameAs: [
      "https://behance.net",
      "https://instagram.com",
      "https://linkedin.com",
      "https://dribbble.com"
    ],
    knowsAbout: [
      "Brand Identity Design",
      "Visual Strategy",
      "Social Media Marketing Graphics",
      "Print & Packaging Production",
      "Adobe Creative Cloud",
      "Figma UI/UX"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: isRtl ? "جامعة العلوم والتقانة" : "University of Science and Technology"
    }
  };

  return (
    <>
      <SEO
        title={t("about.pageTitle")}
        description={t("about.metaDesc")}
        canonicalUrl="/about"
        schemaType="ProfilePage"
        schemaData={personSchema}
      />
      <div className="animate-in fade-in duration-300">
        <PageHeader
          title={t("about.title")}
          highlight={t("about.titleHighlight")}
          subtitle={t("about.subtitle")}
          badge={t("about.storyBadge")}
        />

      {/* Story & Background Section */}
      <section className="py-20 bg-white dark:bg-[#0a0e17] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            <div className="lg:w-1/2 reveal-left">
              <div className="relative max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Anas Al-Tayeb Graphic Designer"
                  width={500}
                  height={500}
                  loading="eager"
                  decoding="async"
                  className="rounded-3xl shadow-xl border-2 border-slate-200 dark:border-slate-800 object-cover w-full"
                />

                {/* Floating Top Badge */}
                <div className="absolute -top-4 -start-4 bg-amber-500 text-slate-950 px-4 py-2 rounded-2xl shadow-xl font-black text-xs border-2 border-white dark:border-slate-900 flex items-center gap-1.5">
                  <GraduationCap size={16} strokeWidth={2} aria-hidden="true" />
                  <span>{t("about.degree")}</span>
                </div>

                {/* Floating Bottom Badge */}
                <div className="absolute -bottom-6 end-6 bg-slate-900/90 dark:bg-slate-900/95 backdrop-blur-md text-white p-5 rounded-2xl shadow-xl border border-amber-500/40">
                  <div className="flex items-center gap-3">
                    <div className="bg-amber-500/20 text-amber-400 p-2.5 rounded-xl flex items-center justify-center">
                      <Award size={20} strokeWidth={1.75} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="text-lg font-black">✨</h4>
                      <p className="text-xs text-slate-300 font-medium">
                        {t("about.experienceDesc")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 text-center lg:text-start reveal-right">
              <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
                {t("about.storyBadge")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
                {t("about.storyTitle")}{" "}
                <span className="text-amber-600 dark:text-amber-400">
                  {t("about.storyHighlight")}
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
                <p>{t("about.storyP1")}</p>
                <p>{t("about.storyP2")}</p>
                <p>{t("about.storyP3")}</p>
              </div>

              {/* Quality Indicators */}
              <div className="flex flex-wrap gap-3 mt-6 justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700">
                  <Sparkles size={14} className="text-amber-500" aria-hidden="true" />
                  <span>{t("about.badgeMastery")}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-3.5 py-1.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700">
                  <Heart size={14} className="text-rose-500 fill-rose-500" aria-hidden="true" />
                  <span>{t("about.badgePassion")}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Values Section */}
      <section className="py-16 bg-slate-50 dark:bg-night-900 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-up">
            <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-3 border border-amber-500/20">
              {t("about.valuesBadge")}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {t("about.valuesTitle")}{" "}
              <span className="text-amber-600 dark:text-amber-400">
                {t("about.valuesHighlight")}
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-amber-500/40 transition-colors reveal-scale delay-100">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Lightbulb size={24} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {t("about.values.creativityTitle")}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t("about.values.creativityDesc")}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-amber-500/40 transition-colors reveal-scale delay-200">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {t("about.values.commitmentTitle")}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t("about.values.commitmentDesc")}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm group hover:border-amber-500/40 transition-colors reveal-scale delay-300">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {t("about.values.communicationTitle")}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t("about.values.communicationDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Proficiency Section */}
      <section className="py-20 bg-white dark:bg-[#0a0e17] border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
            <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
              {t("about.skillsBadge")}
            </span>
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
              {t("about.skillsTitle")}{" "}
              <span className="text-amber-600 dark:text-amber-400">
                {t("about.skillsHighlight")}
              </span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-base">
              {t("about.skillsDesc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-50 dark:bg-slate-850 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 reveal-left">
              <SkillBar name="Adobe Photoshop" percentage={95} />
              <SkillBar name="Adobe Illustrator" percentage={90} />
              <SkillBar name="Adobe InDesign" percentage={85} />
            </div>

            <div className="bg-slate-50 dark:bg-slate-850 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm space-y-5 reveal-right">
              <SkillBar name="Figma & Adobe XD" percentage={92} />
              <SkillBar name="Adobe After Effects" percentage={75} />
              <SkillBar name="CorelDRAW" percentage={80} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Cards Section */}
      <section className="py-16 bg-slate-50 dark:bg-night-900 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 reveal-up">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {t("about.whyChooseTitle")}{" "}
              <span className="text-amber-600 dark:text-amber-400">
                {t("about.whyChooseHighlight")}
              </span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm reveal-scale delay-100">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-4">
                1
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {t("about.whyCards.understandTitle")}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t("about.whyCards.understandDesc")}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm reveal-scale delay-200">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-4">
                2
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {t("about.whyCards.passionTitle")}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t("about.whyCards.passionDesc")}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm reveal-scale delay-300">
              <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 font-black flex items-center justify-center mb-4">
                3
              </div>
              <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-2">
                {t("about.whyCards.flexibleTitle")}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {t("about.whyCards.flexibleDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <ToolsGrid />
      <FeaturesBar />
      <CtaBanner />
    </div>
    </>
  );
};
