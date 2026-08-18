import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Calendar, Clock, ArrowRight, ArrowLeft } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

export const BlogCard = memo(({ post }) => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const title = isRtl ? post.titleAr : post.titleEn;
  const excerpt = isRtl ? post.excerptAr : post.excerptEn;
  const category = isRtl ? post.categoryAr : post.categoryEn;
  const tags = isRtl ? post.tagsAr || [] : post.tagsEn || [];
  const webpSrc = post.image ? post.image.replace(/\.(png|jpe?g)$/i, ".webp") : null;

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <article className="card-hover group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm dark:shadow-glass-dark border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between transition-all duration-300 hover:border-amber-500/40 dark:hover:border-amber-500/30">
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
              className={`inline-block px-3.5 py-1 rounded-full text-xs font-black backdrop-blur-md ${post.categoryClass}`}
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

          <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 line-clamp-2 leading-snug group-hover:text-amber-500 transition-colors">
            <Link
              to={`/blog/${post.id}`}
              className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg"
            >
              {title}
            </Link>
          </h3>
          <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 leading-relaxed mb-4">
            {excerpt}
          </p>

          {/* Tags list */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-1" aria-label="Tags">
              {tags.slice(0, 3).map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-0 border-t border-slate-100 dark:border-slate-800/60 mt-4 flex items-center justify-between">
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
});

BlogCard.displayName = "BlogCard";
