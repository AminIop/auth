import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { frTranslation } from "./fr";
import { enTranslation } from "./en";

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: {
                common: frTranslation
            },
            en: {
                common: enTranslation
            }
        },
        fallbackLng: "en",
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18next;