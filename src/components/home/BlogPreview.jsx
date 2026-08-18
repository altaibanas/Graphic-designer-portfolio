import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";
import { blogPosts } from "../../data/blogData";

export const BlogPreview = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="blog" className="py-20 bg-slate-50 dark:bg-night-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-4 border border-amber-500/20">
            {t("blog.badge")}
          </span>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">
            {t("blog.latestArticles")}{" "}
            <span className="text-amber-600 dark:text-amber-400">{t("blog.latestHighlight")}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            {t("blog.latestSubtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => {
            const title = isRtl ? post.titleAr : post.titleEn;
            const excerpt = isRtl ? post.excerptAr : post.excerptEn;
            const category = isRtl ? post.categoryAr : post.categoryEn;
            const webpSrc = post.image ? post.image.replace(/\.(png|jpe?g)$/i, ".webp") : null;

            return (
              <article
                key={post.id}
                className="card-hover group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm dark:shadow-glass-dark border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="relative overflow-hidden aspect-video bg-slate-100 dark:bg-slate-800">
                    <picture className="w-full h-full block">
                      {webpSrc && webpSrc !== post.image && (
                        <source srcSet={webpSrc} type="image/webp" />
                      )}
                      <img
                        src={post.image}
                        alt={title}
                        width={800}
                        height={450}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </picture>
                    <div className="absolute top-4 start-4">
                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-black backdrop-blur-md ${post.categoryClass}`}
                      >
                        {category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
                        <span>{isRtl ? post.dateAr : post.dateEn}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
                        <span>{isRtl ? post.readTimeAr : post.readTimeEn}</span>
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-amber-500 transition-colors">
                      <Link
                        to={`/blog/${post.id}`}
                        className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
                      >
                        {title}
                      </Link>
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed">
                      {excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/blog/${post.id}`}
                    className="text-amber-600 dark:text-amber-400 font-bold text-sm hover:underline inline-flex items-center gap-1 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
                    aria-label={`${t("blog.readMore")} - ${title}`}
                  >
                    <span>{t("blog.readMore")}</span>
                    <ArrowIcon size={14} strokeWidth={2.2} className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="btn-silver px-8 py-3.5 rounded-xl font-black text-sm inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 group/btn"
          >
            <span>{t("blog.readAll")}</span>
            <ArrowIcon size={16} strokeWidth={2.2} className="group-hover/btn:translate-x-1 rtl:group-hover/btn:-translate-x-1 transition-transform" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};
