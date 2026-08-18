import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { portfolioItems } from "../../data/portfolioData";
import { ProjectCard } from "../portfolio/ProjectCard";
import { LightboxModal } from "../common/LightboxModal";

export const PortfolioPreview = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const handleImageClick = useCallback(
    (clickedItem) => {
      setSelectedItem({
        src: clickedItem.fullImage || clickedItem.image || clickedItem.thumbnail,
        title: isRtl ? clickedItem.titleAr : clickedItem.titleEn,
        categoryName: isRtl ? clickedItem.nameAr : clickedItem.nameEn,
      });
    },
    [isRtl]
  );

  const handleCloseModal = useCallback(() => {
    setSelectedItem(null);
  }, []);

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="portfolio" className="py-20 bg-[#f8fafc] dark:bg-[#0a0e17] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
            {t("portfolio.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            {t("portfolio.latestProjects")}{" "}
            <span className="text-amber-600 dark:text-amber-400">{t("portfolio.latestHighlight")}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            {t("portfolio.latestSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.slice(0, 3).map((item) => (
            <ProjectCard
              key={item.id}
              item={item}
              onImageClick={handleImageClick}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/portfolio"
            className="btn-silver px-8 py-3.5 rounded-xl font-black text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group/btn"
          >
            <span>{t("portfolio.viewAll")}</span>
            <ArrowIcon size={16} strokeWidth={2.2} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>

      {selectedItem && (
        <LightboxModal
          image={selectedItem}
          imageSrc={selectedItem.src}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};
