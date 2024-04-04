import { createContext } from "react";
import { useTranslation } from "react-i18next";


export const internalizationContext = createContext()

const InternalizationProvider = ({ children }) => {
    const { i18n } = useTranslation()
    const changeLanguage = (lang) => {
        localStorage.setItem('profil_lang', lang)
        ctx.i18n.changeLanguage(lang)
    }
    const getCurrentLanguage = () => i18n.language

    return (
        <internalizationContext.Provider value={
            { getCurrentLanguage, changeLanguage }
        }>
            {children}
        </internalizationContext.Provider>
    )
}

export default InternalizationProvider