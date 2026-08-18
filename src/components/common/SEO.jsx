import React from "react";
import { Helmet } from "react-helmet-async";
import { useLanguage } from "../../context/LanguageContext";
import { useLocation } from "react-router-dom";

const DEFAULT_SITE_URL = "https://anas-altayeb.design";
const DEFAULT_OG_IMAGE = "/images/og-cover.png";

export const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  articleData,
  schemaData,
  noIndex = false,
}) => {
  const { currentLang, isRtl } = useLanguage();
  const location = useLocation();

  const siteName = isRtl
    ? "أنس الطيب | مصمم جرافيك وخبير هوية بصرية"
    : "Anas Al-Tayeb | Graphic Designer & Brand Consultant";

  const fullTitle = title
    ? `${title} | ${isRtl ? "أنس الطيب" : "Anas Al-Tayeb"}`
    : siteName;

  const defaultDescription = isRtl
    ? "معرض أعمال وخدمات أنس الطيب - تصميم الهوية البصرية، وسائل التواصل الاجتماعي، والمطبوعات الإبداعية للشركات والعلامات التجارية الرائدة."
    : "Portfolio and creative design services by Anas Al-Tayeb - Brand Identity, Social Media Design, and High-End Print Solutions for leading brands.";

  const metaDescription = description || defaultDescription;
  const currentUrl = canonicalUrl || `${DEFAULT_SITE_URL}${location.pathname}`;
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `${DEFAULT_SITE_URL}${ogImage}`;

  // Default Global Organization / Person Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anas Al-Tayeb",
    alternateName: "أنس الطيب",
    url: DEFAULT_SITE_URL,
    image: `${DEFAULT_SITE_URL}/images/avatar.jpg`,
    jobTitle: isRtl ? "مصمم جرافيك واستشاري هوية بصرية" : "Graphic Designer & Brand Consultant",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Creative Studio",
    },
    sameAs: [
      "https://behance.net",
      "https://linkedin.com",
      "https://instagram.com",
      "https://dribbble.com",
    ],
    knowsAbout: [
      "Brand Identity Design",
      "Typography",
      "Social Media Marketing Design",
      "Packaging Design",
      "Print Collateral",
      "Visual Strategy",
    ],
  };

  const finalSchema = schemaData || defaultSchema;

  return (
    <Helmet htmlAttributes={{ lang: currentLang || "ar", dir: isRtl ? "rtl" : "ltr" }}>
      {/* Primary Page Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={Array.isArray(keywords) ? keywords.join(", ") : keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Robots Indexing Directives */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook / WhatsApp */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content={isRtl ? "ar_AR" : "en_US"} />
      <meta property="og:locale:alternate" content={isRtl ? "en_US" : "ar_AR"} />

      {/* Article Specific Open Graph */}
      {ogType === "article" && articleData && (
        <>
          {articleData.publishedTime && (
            <meta property="article:published_time" content={articleData.publishedTime} />
          )}
          {articleData.modifiedTime && (
            <meta property="article:modified_time" content={articleData.modifiedTime} />
          )}
          {articleData.author && (
            <meta property="article:author" content={articleData.author} />
          )}
          {articleData.section && (
            <meta property="article:section" content={articleData.section} />
          )}
          {articleData.tags &&
            articleData.tags.map((tag) => (
              <meta key={tag} property="article:tag" content={tag} />
            ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={fullOgImage} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
};
