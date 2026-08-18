import React from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/common/SEO";
import { PageHeader } from "../components/common/PageHeader";
import { ContactForm } from "../components/contact/ContactForm";
import { ContactInfo } from "../components/contact/ContactInfo";

export const ContactPage = () => {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  const title = isRtl
    ? "تواصل معي - ابدأ مشروعك التصميمي القادم"
    : "Contact Me - Start Your Next Design Project | Anas Al-Tayeb";

  const description = isRtl
    ? "هل لديك فكرة مشروع أو ترغب في استشارة بصرية مجانية؟ تواصل مباشرة مع المصمم أنس الطيب عبر الواتساب أو البريد الإلكتروني أو نموذج التواصل."
    : "Have a design project or looking for visual consulting? Get in touch with Anas Al-Tayeb via WhatsApp, email, or direct contact form.";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": title,
    "description": description,
    "mainEntity": {
      "@type": "Person",
      "name": "Anas Al-Tayeb",
      "email": "altaibanas2@gmail.com",
      "telephone": "+967711907099",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sana'a",
        "addressCountry": "Yemen",
      },
    },
  };

  return (
    <>
      <SEO
        title={title}
        description={description}
        keywords={isRtl ? ["تواصل مع مصمم", "طلب تصميم شعار", "استشارة هوية بصرية", "أنس الطيب"] : ["contact designer", "hire graphic designer", "branding inquiry", "order logo design"]}
        schemaData={contactSchema}
      />
      <div className="animate-in fade-in duration-300">
        <PageHeader
          title={t("contact.title")}
          highlight={t("contact.titleHighlight")}
          subtitle={t("contact.subtitle")}
        />

        <section className="py-20 bg-slate-50 dark:bg-[#0a0e17] transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
