import React, { useState, useCallback } from "react";
import { ProjectCard } from "./ProjectCard";
import { LightboxModal } from "../common/LightboxModal";
import { useLanguage } from "../../context/LanguageContext";

export const PortfolioGrid = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ProjectCard
            key={item.id}
            item={item}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {selectedItem && (
        <LightboxModal
          image={selectedItem}
          imageSrc={selectedItem.src}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};
