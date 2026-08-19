import React, { useState, useEffect } from "react";
import { ListChecks, ArrowDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

/**
 * Interactive Table of Contents for Blog & Article pages.
 * Handles smooth scrolling to section headings with proper navbar offset and active section detection.
 * @param {Array} sections - Array of section objects: [{ heading: string, paragraphs?: string[], ... }]
 */
export const TableOfContents = ({ sections = [] }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  const [activeId, setActiveId] = useState("");

  const getSlug = (heading, idx) => `section-${idx + 1}`;

  useEffect(() => {
    if (!sections || sections.length === 0) return;

    const headingElements = sections
      .map((sec, idx) => document.getElementById(getSlug(sec.heading, idx)))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-80px 0px -65% 0px", // Active when heading reaches top 35% of screen
        threshold: 0.1,
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, "", `#${targetId}`);
      targetElement.focus({ preventScroll: true });
    }
  };

  if (!sections || sections.length === 0) return null;

  return (
    <nav
      aria-label={t("blog.tableOfContents") || "فهرس المقال"}
      className="bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-7 border border-slate-200 dark:border-slate-800 mb-12 shadow-sm reveal-up"
    >
      <div className="flex items-center justify-between gap-3 mb-5 border-b border-slate-200/80 dark:border-slate-800/80 pb-3.5">
        <div className="flex items-center gap-2.5 text-amber-600 dark:text-amber-400 font-black text-sm sm:text-base">
          <div className="bg-amber-500/15 dark:bg-amber-500/20 p-1.5 rounded-lg">
            <ListChecks size={18} strokeWidth={2.4} aria-hidden="true" />
          </div>
          <span>{t("blog.tableOfContents") || "فهرس المقال"}</span>
        </div>
        <span className="text-[11px] font-bold text-slate-400 dark:text-slate-500 bg-slate-200/60 dark:bg-slate-800/60 px-2.5 py-0.5 rounded-full">
          {sections.length} {isRtl ? "أقسام" : "sections"}
        </span>
      </div>

      <ul className="space-y-1.5" role="list">
        {sections.map((sec, idx) => {
          const targetId = getSlug(sec.heading, idx);
          const isActive = activeId === targetId;

          return (
            <li key={idx}>
              <a
                href={`#${targetId}`}
                onClick={(e) => handleScrollTo(e, targetId)}
                className={`group flex items-center justify-between py-2.5 px-3.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isActive
                    ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 font-black border-s-4 border-amber-500 shadow-sm ps-3"
                    : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/70 hover:text-amber-600 dark:hover:text-amber-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "bg-amber-500 scale-125 shadow-sm shadow-amber-500/50"
                        : "bg-slate-300 dark:bg-slate-600 group-hover:bg-amber-400"
                    }`}
                  />
                  <span className="line-clamp-1">{sec.heading}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span
                    className={`text-[10px] font-mono font-bold text-slate-400 dark:text-slate-500 transition-colors ${
                      isActive ? "text-amber-600 dark:text-amber-400" : ""
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <ArrowDown
                    size={13}
                    className={`transition-all duration-300 ${
                      isActive
                        ? "opacity-100 text-amber-500 translate-y-0.5"
                        : "opacity-0 group-hover:opacity-100 text-slate-400"
                    }`}
                    aria-hidden="true"
                  />
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
