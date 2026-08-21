import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

export const LightboxModal = ({ image, imageSrc, onClose }) => {
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    if (!image && !imageSrc) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [image, imageSrc, onClose]);

  if (!image && !imageSrc) return null;

  const targetSrc =
    imageSrc ||
    (typeof image === "string"
      ? image
      : image?.src || image?.fullImage || image?.image || image?.thumbnail || "/images/placeholder.svg");

  const title = typeof image === "object" ? image?.title : "";
  const categoryName = typeof image === "object" ? image?.categoryName : "";

  return (
    <div
      className="lightbox-overlay active"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="عرض الصورة بحجم كامل"
    >
      <button
        type="button"
        className="lightbox-close group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="إغلاق المعاينة"
      >
        <X size={28} strokeWidth={2.2} className="group-hover:rotate-90 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
      </button>
      <div
        className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={imgError ? "/images/placeholder.svg" : targetSrc}
          alt={title || "معاينة العمل الإبداعي"}
          onError={() => setImgError(true)}
          className="lightbox-content max-w-[90vw] max-h-[80vh] rounded-2xl shadow-2xl object-contain bg-slate-900/90"
        />
        {title && (
          <div className="mt-4 bg-slate-900/95 text-white px-6 py-2 rounded-full border border-amber-500/30 text-center shadow-lg backdrop-blur-md">
            <span className="font-bold text-amber-400 text-sm md:text-base">
              {title}
            </span>
            {categoryName && (
              <span className="text-slate-400 text-xs md:text-sm mr-3 ml-3">
                • {categoryName}
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
