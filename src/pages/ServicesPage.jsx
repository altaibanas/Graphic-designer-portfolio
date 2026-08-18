import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/common/PageHeader";
import { ServiceCard } from "../components/services/ServiceCard";
import { ProcessSteps } from "../components/services/ProcessSteps";
import { CtaBanner } from "../components/common/CtaBanner";
import { services } from "../data/servicesData";

export const ServicesPage = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const title = isRtl
    ? "خدمات التصميم - الهوية البصرية، السوشيال ميديا، والمطبوعات"
    : "Design Services - Visual Identity, Social Media & Print Solutions";

  const description = isRtl
    ? "استكشف باقات خدمات التصميم الجرافيكي الاحترافية التي يقدمها أنس الطيب: تصميم هوية بصرية متكاملة، إدارة وتصاميم سوشيال ميديا، ومطبوعات فاخرة."
    : "Explore professional design services by Anas Al-Tayeb: Full brand identity systems, engaging social media campaign assets, and premium print collateral.";

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": title,
    "description": description,
    "itemListElement": services.map((service, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "item": {
        "@type": "Service",
        "name": isRtl ? service.titleAr : service.titleEn,
        "description": isRtl ? service.subtitleAr : service.subtitleEn,
        "provider": {
          "@type": "Person",
          "name": "Anas Al-Tayeb",
        },
      },
    })),
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={isRtl ? ["خدمات تصميم", "تصميم هوية", "تصميم إعلانات", "تصميم بروشورات", "استشارات تصميم"] : ["design services", "brand identity package", "social media design service", "print design agency"]}
        schemaData={servicesSchema}
      />
      <div className="animate-in fade-in duration-300">
        <PageHeader
          title={t("services.title")}
          highlight={t("services.titleHighlight")}
          subtitle={t("services.subtitle")}
        />

        {/* Services Grid */}
        <section className="py-20 bg-white dark:bg-[#0a0e17] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
                {t("services.packagesTitle")}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
                {t("services.packagesSubtitle")}{" "}
                <span className="text-amber-600 dark:text-amber-400">{t("services.packagesHighlight")}</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-base">
                {t("services.packagesDesc")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        <ProcessSteps />
        <CtaBanner />
      </div>
    </>
  );
};
