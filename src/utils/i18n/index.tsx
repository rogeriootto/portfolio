import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import ptbr from "./locales/pt-br.json";

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    resources: {
      en: { translation: en },
      pt: { translation: ptbr },
    },
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localstorage", "navigator"],
      caches: ["localstorage"],
    },
  });

export default i18next;
