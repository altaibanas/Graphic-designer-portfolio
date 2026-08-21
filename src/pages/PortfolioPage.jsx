import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/common/PageHeader";
import { PortfolioFilter } from "../components/portfolio/PortfolioFilter";
import { PortfolioGrid } from "../components/portfolio/PortfolioGrid";
import { CtaBanner } from "../components/common/CtaBanner";
import { portfolioItems } from "../data/portfolioData";
import { usePageTheme } from "../hooks/usePageTheme";

export const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  usePageTheme("page-portfolio");

  const title = isRtl
    ? "معرض الأعمال - مشاريع الهوية البصرية والتصميم الجرافيكي"
    : "Portfolio - Creative Branding & Graphic Design Showcase";

  const description = isRtl
    ? "تصفح أحدث مشاريع التصميم الإبداعي من أنس الطيب: هويات بصرية متكاملة، حملات سوشيال ميديا، تصميم مطبوعات، وتغليف منتجات."
    : "Browse latest creative graphic design projects by Anas Al-Tayeb: Brand identities, social media campaigns, luxury brochures, and packaging.";

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  const portfolioSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": title,
    "description": description,
    "hasPart": portfolioItems.map((item) => ({
      "@type": "CreativeWork",
      "name": isRtl ? item.titleAr : item.titleEn,
      "description": isRtl ? item.descAr : item.descEn,
      "image": `https://anas-altayeb.design${item.image}`,
      "author": {
        "@type": "Person",
        "name": "Anas Al-Tayeb",
      },
    })),
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={isRtl ? ["معرض أعمال", "أعمال تصميم", "تصاميم شعارات", "نماذج هوية بصرية"] : ["portfolio", "design showcase", "brand identity projects", "creative works"]}
        schemaData={portfolioSchema}
      />
      <div className="animate-in fade-in duration-300">
        <PageHeader
          title={t("portfolio.title")}
          highlight={t("portfolio.titleHighlight")}
          subtitle={t("portfolio.subtitle")}
        />

        <section className="py-16 bg-white dark:bg-[#0a0e17] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <PortfolioFilter
              activeCategory={activeCategory}
              onSelectCategory={setActiveCategory}
            />
            <PortfolioGrid items={filteredItems} />
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
};
