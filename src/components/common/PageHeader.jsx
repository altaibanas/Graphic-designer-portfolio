import React from "react";

export const PageHeader = ({ title, highlight, subtitle }) => {
  return (
    <section className="page-header text-white pt-32 pb-16 text-center transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <h1 className="text-3xl md:text-5xl font-black mb-4 leading-tight tracking-tight">
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
