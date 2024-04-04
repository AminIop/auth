import i18next from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { frTranslation } from "./fr";
import { enTranslation } from "./en";

i18next.use(initReactI18next)
    .use(I18nextBrowserLanguageDetector)
    .init({
        ressources: {
            fr: frTranslation,
            en: enTranslation
        },
        ns: ['common'],
        defaultNS: 'common'
    })

export default i18next