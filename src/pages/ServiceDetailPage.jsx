import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Check, Star, FolderArchive } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { services } from "../data/servicesData";
import { PageHeader } from "../components/common/PageHeader";
import { ProcessSteps } from "../components/services/ProcessSteps";
import { ServiceCustomSection } from "../components/services/ServiceCustomSection";
import { CtaBanner } from "../components/common/CtaBanner";
import { SEO } from "../components/common/SEO";

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const title = isRtl ? service.titleAr : service.titleEn;
  const description = isRtl ? service.descriptionAr : service.descriptionEn;
  const features = isRtl ? service.featuresAr : service.featuresEn;
  const deliverables = isRtl ? service.deliverablesAr : service.deliverablesEn;
  const pillars = isRtl ? service.pillarsAr : service.pillarsEn;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: title,
    provider: {
      "@type": "Person",
      name: "Anas Al-Tayeb"
    },
    areaServed: ["Sudan", "Saudi Arabia", "United Arab Emirates", "Egypt", "Worldwide"],
    description: description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      price: "Custom Quote"
    }
  };

  return (
    <>
      <SEO
        title={`${title} | ${t("nav.brandFirst")} ${t("nav.brandSecond")}`}
        description={description}
        canonicalUrl={`/services/${service.slug}`}
        schemaType="Service"
        schemaData={serviceSchema}
      />
      <div className="pt-20">
      <PageHeader
        title={title}
        subtitle={description}
        badge={t("services.badge")}
        breadcrumbs={[
          { label: t("nav.home"), path: "/" },
          { label: t("nav.services"), path: "/services" },
          { label: title },
        ]}
      />

      {/* Service Overview & Hero Image */}
      <section className="py-20 bg-white dark:bg-[#0a0e17] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 mb-20">
            <div className="lg:w-1/2">
              <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
                {t("services.overview")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-6 text-slate-900 dark:text-white leading-tight tracking-tight">
                {t("services.whyNeed")} <span className="text-amber-600 dark:text-amber-400">{title}</span>؟
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
                {description}
              </p>

              <div className="space-y-3 mb-8">
                {features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                      <Check size={14} strokeWidth={2.5} aria-hidden="true" />
                    </div>
                    <span className="text-slate-700 dark:text-slate-200 text-sm font-bold">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="btn-gold px-8 py-3.5 rounded-xl font-black text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {t("services.orderNow")}
                </Link>
                <Link
                  to="/portfolio"
                  className="btn-silver px-6 py-3.5 rounded-xl font-bold text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {t("services.similarWorks")}
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={service.heroImage}
                  alt={title}
                  width={800}
                  height={450}
                  loading="eager"
                  decoding="async"
                  className="rounded-3xl shadow-2xl border-2 border-slate-200 dark:border-slate-800 object-cover w-full aspect-video sm:aspect-auto"
                />
                <div className="absolute -bottom-6 start-6 bg-slate-900/90 text-white p-5 rounded-2xl shadow-xl border border-amber-500/40 backdrop-blur-md">
                  <p className="text-amber-400 font-bold text-xs mb-1">✦ {t("services.qualityGuarantee")}</p>
                  <p className="text-slate-300 text-xs">{t("services.unlimitedRevisions")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pillars / Key Focus Areas */}
          {pillars && pillars.length > 0 && (
            <div className="border-t border-slate-200 dark:border-slate-800 pt-16 mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {pillars.map((pil, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Star size={20} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
                    </div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                      {pil.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {pil.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Deliverables Section */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-16">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-3 border border-amber-500/20">
                {t("services.deliverablesBadge")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {t("services.deliverablesTitle")}{" "}
                <span className="text-amber-600 dark:text-amber-400">{t("services.deliverablesHighlight")}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliverables.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-850 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/40 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <FolderArchive size={20} strokeWidth={1.75} aria-hidden="true" />
                  </div>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Custom Deep-Dive Section */}
          <ServiceCustomSection service={service} />
        </div>
      </section>

      <ProcessSteps />
      <CtaBanner />
    </div>
    </>
  );
};
