import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import arTranslation from "./locales/ar.json";
import enTranslation from "./locales/en.json";

const savedLang = localStorage.getItem("preferred_lang") || "ar";

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: arTranslation },
    en: { translation: enTranslation },
  },
  lng: savedLang,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
