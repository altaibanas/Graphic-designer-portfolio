import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  ListChecks,
  CheckCircle2,
  Bookmark,
  PenTool,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { blogPosts } from "../data/blogData";
import { ShareButtons } from "../components/blog/ShareButtons";
import { CtaBanner } from "../components/common/CtaBanner";
import { SEO } from "../components/common/SEO";
import { usePageTheme } from "../hooks/usePageTheme";
import { TableOfContents } from "../components/blog/TableOfContents";

export const BlogPostPage = () => {
  const { id } = useParams();
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  usePageTheme("page-blog");

  const post = blogPosts.find((p) => p.id.toString() === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const title = isRtl ? post.titleAr : post.titleEn;
  const excerpt = isRtl ? post.excerptAr : post.excerptEn;
  const category = isRtl ? post.categoryAr : post.categoryEn;
  const date = isRtl ? post.dateAr : post.dateEn;
  const readTime = isRtl ? post.readTimeAr : post.readTimeEn;
  const author = isRtl ? post.authorAr || "أنس الطيب" : post.authorEn || "Anas Al-Tayeb";
  const authorRole = isRtl ? post.authorRoleAr || "مصمم جرافيك وهوية بصرية" : post.authorRoleEn || "Senior Graphic & Identity Designer";
  const tags = isRtl ? post.tagsAr || [] : post.tagsEn || [];
  
  // Rich Structured Content Fields
  const intro = isRtl ? post.introAr : post.introEn;
  const sections = isRtl ? post.sectionsAr : post.sectionsEn;
  const rawContent = isRtl ? post.contentAr : post.contentEn;
  const keyTakeaways = isRtl ? post.keyTakeawaysAr : post.keyTakeawaysEn;
  const conclusionTitle = isRtl ? post.conclusionTitleAr : post.conclusionTitleEn;
  const conclusionText = isRtl ? post.conclusionTextAr : post.conclusionTextEn;
  const ctaTitle = isRtl ? post.ctaTitleAr : post.ctaTitleEn;
  const ctaText = isRtl ? post.ctaTextAr : post.ctaTextEn;
  const ctaButton = isRtl ? post.ctaButtonAr : post.ctaButtonEn;

  // 3 Related Posts
  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 3);

  const ArrowBackIcon = isRtl ? ArrowRight : ArrowLeft;
  const ArrowForwardIcon = isRtl ? ArrowLeft : ArrowRight;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: excerpt,
    image: post.image,
    datePublished: "2024-01-15T08:00:00+03:00",
    dateModified: "2024-01-20T10:00:00+03:00",
    author: {
      "@type": "Person",
      name: author,
      url: "https://anasdesign.com/about"
    },
    publisher: {
      "@type": "Organization",
      name: "Anas Design Portfolio",
      logo: {
        "@type": "ImageObject",
        url: "https://anasdesign.com/images/placeholder.svg"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://anasdesign.com/blog/${post.id}`
    },
    keywords: tags.join(", ")
  };

  return (
    <>
      <SEO
        title={`${title} | مدونة أنس للتصميم`}
        description={excerpt}
        canonicalUrl={`/blog/${post.id}`}
        ogImage={post.image}
        ogType="article"
        schemaType="BlogPosting"
        schemaData={blogPostingSchema}
      />
      <div className="animate-in fade-in duration-300">
      {/* Header Banner */}
      <section className="page-header text-white pt-32 pb-16 transition-colors duration-300 reveal-up">
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 mb-6 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-md"
          >
            <ArrowBackIcon size={14} strokeWidth={2.2} aria-hidden="true" />
            <span>{t("blog.backToBlog")}</span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span
              className={`px-3.5 py-1 rounded-full text-xs font-black backdrop-blur-md ${post.categoryClass}`}
            >
              {category}
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5">
              <Calendar size={14} strokeWidth={2} className="text-amber-400" aria-hidden="true" />
              <span>{date}</span>
            </span>
            <span className="text-xs text-slate-300 flex items-center gap-1.5">
              <Clock size={14} strokeWidth={2} className="text-amber-400" aria-hidden="true" />
              <span>{readTime}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black leading-tight max-w-3xl mx-auto mb-6">
            {title}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {excerpt}
          </p>
        </div>
      </section>

      {/* Main Post Body */}
      <article className="py-16 bg-white dark:bg-[#0a0e17] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Featured Image */}
          <div className="rounded-3xl overflow-hidden shadow-2xl mb-12 border-2 border-slate-200 dark:border-slate-800 reveal-scale">
            <img
              src={post.image}
              alt={title}
              width={1200}
              height={675}
              loading="eager"
              decoding="async"
              className="w-full aspect-video object-cover"
            />
          </div>

          {/* Interactive Table of Contents */}
          {sections && sections.length > 0 && (
            <TableOfContents sections={sections} />
          )}

          {/* Structured Article Content */}
          {intro && (
            <div className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-200 leading-relaxed mb-10 p-6 rounded-2xl bg-amber-500/5 border-s-4 border-amber-500 dark:bg-slate-900/60 reveal-up">
              {intro}
            </div>
          )}

          {sections && sections.length > 0 ? (
            <div className="space-y-12 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
              {sections.map((sec, idx) => (
                <div key={idx} className="space-y-5 reveal-up">
                  <h2
                    id={`section-${idx + 1}`}
                    tabIndex="-1"
                    className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight pt-4 toc-target focus:outline-none"
                  >
                    {sec.heading}
                  </h2>

                  {sec.paragraphs && sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {p}
                    </p>
                  ))}

                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="space-y-3 my-6 ps-2">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base">
                          <CheckCircle2 size={18} strokeWidth={2} className="text-amber-500 flex-shrink-0 mt-1" aria-hidden="true" />
                          <span className="text-slate-700 dark:text-slate-200">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.callout && (
                    <blockquote className="my-6 p-6 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200 italic font-semibold border-s-4 border-s-amber-500 shadow-sm">
                      "{sec.callout}"
                    </blockquote>
                  )}
                </div>
              ))}
            </div>
          ) : rawContent ? (
            <div
              className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed reveal-up"
              dangerouslySetInnerHTML={{ __html: rawContent }}
            />
          ) : null}

          {/* Key Strategic Takeaways Box */}
          {keyTakeaways && keyTakeaways.length > 0 && (
            <div className="mt-14 bg-gradient-to-br from-amber-500/10 via-yellow-500/5 to-transparent dark:from-slate-850 dark:to-slate-900 rounded-3xl p-8 border-2 border-amber-500/30 shadow-lg reveal-up">
              <div className="flex items-center gap-2 mb-6">
                <CheckCircle2 size={24} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  {t("blog.keyTakeaways")}
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {keyTakeaways.map((takeaway, tIdx) => (
                  <div
                    key={tIdx}
                    className="bg-white/80 dark:bg-slate-800/80 rounded-2xl p-4 border border-slate-200/80 dark:border-slate-700/80 flex items-start gap-3 shadow-sm"
                  >
                    <span className="text-amber-600 dark:text-amber-400 font-black text-sm">✦</span>
                    <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed font-medium">
                      {takeaway}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Conclusion & Strategic Consultation CTA */}
          {conclusionText && (
            <div className="mt-14 bg-slate-900 text-white dark:bg-slate-850 rounded-3xl p-8 sm:p-10 border-2 border-amber-500/40 shadow-2xl relative overflow-hidden reveal-up">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black mb-4 text-white">
                  {conclusionTitle || t("blog.conclusion")}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
                  {conclusionText}
                </p>

                <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="font-bold text-base text-amber-400 mb-1">
                      {ctaTitle || t("blog.discussArticleCta")}
                    </h4>
                    <p className="text-slate-400 text-xs sm:text-sm">
                      {ctaText || t("services.packagesDesc")}
                    </p>
                  </div>
                  <Link
                    to="/contact"
                    className="btn-gold px-8 py-3.5 rounded-xl font-black text-xs sm:text-sm whitespace-nowrap shadow-lg flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                  >
                    {ctaButton || t("blog.bookConsultation")}
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Tags List */}
          {tags && tags.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center gap-2 reveal-up">
              <span className="text-xs font-bold text-slate-400 me-2 flex items-center gap-1.5">
                <Bookmark size={14} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
                <span>{t("blog.articleTags")}</span>
              </span>
              {tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="px-3 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Share Buttons */}
          <div className="mt-10 reveal-up">
            <ShareButtons title={title} />
          </div>

          {/* Author Card */}
          <div className="bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 my-12 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-start group reveal-scale">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-600 via-yellow-500 to-amber-600 text-slate-950 flex items-center justify-center font-black text-2xl flex-shrink-0 shadow-lg shadow-amber-500/20 group-hover:scale-110 group-hover:rotate-6 transition-transform">
              <PenTool size={32} strokeWidth={2} aria-hidden="true" />
            </div>
            <div>
              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-2">
                <h4 className="text-xl font-black text-slate-900 dark:text-white">
                  {author}
                </h4>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  {authorRole}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                {t("blog.aboutAuthorDesc")}
              </p>
              <Link
                to="/about"
                className="text-amber-600 dark:text-amber-400 font-bold text-xs hover:underline inline-flex items-center gap-1 group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm"
              >
                <span>{t("blog.moreAboutAuthor")}</span>
                <ArrowForwardIcon size={12} strokeWidth={2.2} className="group-hover/link:translate-x-1 rtl:group-hover/link:-translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-16 border-t border-slate-200 dark:border-slate-800 pt-12 reveal-up">
            <div className="text-center mb-10">
              <span className="inline-block bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-1.5 rounded-full text-xs sm:text-sm font-black mb-3 border border-amber-500/20">
                {t("blog.relatedBadge")}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white">
                {t("blog.relatedTitle")}{" "}
                <span className="text-amber-600 dark:text-amber-400">{t("blog.relatedHighlight")}</span>
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rel, rIdx) => (
                <Link
                  key={rel.id}
                  to={`/blog/${rel.id}`}
                  className={`group bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 reveal-scale delay-${(rIdx + 1) * 100}`}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={rel.image}
                      alt={isRtl ? rel.titleAr : rel.titleEn}
                      width={600}
                      height={338}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase text-amber-600 dark:text-amber-400 mb-1 block">
                        {isRtl ? rel.categoryAr : rel.categoryEn}
                      </span>
                      <h4 className="font-bold text-sm text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors line-clamp-2 mb-2">
                        {isRtl ? rel.titleAr : rel.titleEn}
                      </h4>
                    </div>
                    <span className="text-xs text-slate-400 flex items-center gap-1.5 mt-3">
                      <Calendar size={12} strokeWidth={2} className="text-amber-500" aria-hidden="true" />
                      <span>{isRtl ? rel.dateAr : rel.dateEn}</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CtaBanner />
    </div>
    </>
  );
};
