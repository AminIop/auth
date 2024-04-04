import { useContext } from "react"
import { internalizationContext } from "../context/internalization"

export const useInternalization = () => {
    const { changeLanguage } = useContext(internalizationContext)
    return {
        changeLanguage
    }
}