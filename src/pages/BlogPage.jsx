import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/common/PageHeader";
import { BlogGrid } from "../components/blog/BlogGrid";
import { CtaBanner } from "../components/common/CtaBanner";
import { blogPosts } from "../data/blogData";

export const BlogPage = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const title = isRtl
    ? "المدونة - مقالات ونصائح في التصميم الجرافيكي وبناء الهوية"
    : "Design Blog - Insights, Articles & Brand Strategy Guides";

  const description = isRtl
    ? "مقالات متخصصة ونصائح احترافية يشاركها أنس الطيب حول أساسيات الهوية البصرية، اختيار الألوان، الخطوط، وتجارب التصميم الرقمي."
    : "In-depth design articles and branding guides by Anas Al-Tayeb on visual strategy, typography, color psychology, and creative marketing.";

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": title,
    "description": description,
    "publisher": {
      "@type": "Person",
      "name": "Anas Al-Tayeb",
    },
    "blogPost": blogPosts.map((post) => ({
      "@type": "BlogPosting",
      "headline": isRtl ? post.titleAr : post.titleEn,
      "description": isRtl ? post.excerptAr : post.excerptEn,
      "datePublished": post.datePublished || "2026-01-15",
      "image": post.image,
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
        keywords={isRtl ? ["مدونة تصميم", "مقالات هوية بصرية", "أسرار التصميم", "أنس الطيب"] : ["design blog", "branding articles", "graphic design tips", "typography guide"]}
        schemaData={blogSchema}
      />
      <div className="animate-in fade-in duration-300">
        <PageHeader
          title={t("blog.title")}
          highlight={t("blog.titleHighlight")}
          subtitle={t("blog.subtitle")}
        />

        <section className="py-16 bg-slate-50 dark:bg-night-900 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <BlogGrid posts={blogPosts} />
          </div>
        </section>

        <CtaBanner />
      </div>
    </>
  );
};
