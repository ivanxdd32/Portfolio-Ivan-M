// 1. Librerías externas
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 2. Archivos locales (traducciones)
import es from "./locales/es.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import pt from "./locales/pt.json";
import de from "./locales/de.json";
import zh from "./locales/zh.json";
import ar from "./locales/ar.json";
import hi from "./locales/hi.json";
import ru from "./locales/ru.json";

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en },
    fr: { translation: fr },
    pt: { translation: pt },
    de: { translation: de },
    zh: { translation: zh },
    ar: { translation: ar },
    hi: { translation: hi },
    ru: { translation: ru },
  },
  lng: "es", // idioma por defecto
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
