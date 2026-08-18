import React from "react";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/common/SEO";
import { Hero } from "../components/home/Hero";
import { ToolsGrid } from "../components/home/ToolsGrid";
import { ServicesPreview } from "../components/home/ServicesPreview";
import { WhyChooseMe } from "../components/home/WhyChooseMe";
import { FeaturesBar } from "../components/home/FeaturesBar";
import { PortfolioPreview } from "../components/home/PortfolioPreview";
import { BlogPreview } from "../components/home/BlogPreview";
import { CtaBanner } from "../components/common/CtaBanner";

export const HomePage = () => {
  const { isRtl } = useLanguage();

  const title = isRtl
    ? "الرئيسية - مصمم جرافيك واستشاري هوية بصرية"
    : "Home - Graphic Designer & Brand Identity Specialist";

  const description = isRtl
    ? "مرحباً بكم في الموقع الرسمي للمصمم أنس الطيب. أقدم حلولاً إبداعية متكاملة تشمل تصميم الهوية البصرية، السوشيال ميديا، المطبوعات، والاستشارات البصرية."
    : "Welcome to Anas Al-Tayeb's creative design portfolio. Delivering high-impact visual identity, social media graphics, print design, and brand consulting.";

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://anas-altayeb.design/#website",
        "url": "https://anas-altayeb.design",
        "name": isRtl ? "أنس الطيب للتصميم" : "Anas Al-Tayeb Portfolio",
        "description": description,
        "inLanguage": isRtl ? "ar" : "en",
      },
      {
        "@type": "Person",
        "@id": "https://anas-altayeb.design/#person",
        "name": "Anas Al-Tayeb",
        "alternateName": "أنس الطيب",
        "jobTitle": isRtl ? "مصمم جرافيك وخبير هوية بصرية" : "Senior Graphic Designer",
        "url": "https://anas-altayeb.design",
        "sameAs": [
          "https://behance.net",
          "https://linkedin.com",
          "https://instagram.com"
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={isRtl ? ["مصمم جرافيك", "هوية بصرية", "تصميم شعار", "سوشيال ميديا", "صنعاء", "اليمن"] : ["graphic designer", "brand identity", "logo design", "social media design", "portfolio"]}
        schemaData={homeSchema}
      />
      <div className="animate-in fade-in duration-300">
        <Hero />
        <ToolsGrid />
        <ServicesPreview />
        <WhyChooseMe />
        <FeaturesBar />
        <PortfolioPreview />
        <BlogPreview />
        <CtaBanner />
      </div>
    </>
  );
};
