import { useContext } from "react"
import { internalizationContext } from "../context/internalization"

export const useLanguage = () => {
    const { getCurrentLanguage } = useContext(internalizationContext)
    const language = getCurrentLanguage()
    return [language]
}