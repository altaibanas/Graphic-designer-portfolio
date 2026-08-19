import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const PageHeader = ({ title, highlight, subtitle, badge, breadcrumbs }) => {
  const { isRtl } = useLanguage();
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  return (
    <section className="page-header text-white pt-32 pb-16 text-center transition-colors duration-300 reveal-up">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs text-slate-400 mb-6 flex-wrap">
            {breadcrumbs.map((crumb, idx) => (
              <React.Fragment key={idx}>
                {idx > 0 && <ChevronIcon size={12} className="text-amber-500 flex-shrink-0" />}
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-amber-400 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-amber-400 font-bold">{crumb.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {badge && (
          <span className="inline-block bg-amber-500/10 text-amber-400 border border-amber-500/25 px-4 py-1.5 rounded-full text-xs font-black mb-4 backdrop-blur-md">
            {badge}
          </span>
        )}

        <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight text-white">
          {title} {highlight && <span className="text-amber-400">{highlight}</span>}
        </h1>

        {subtitle && (
          <p className="text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

