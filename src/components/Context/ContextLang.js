import { createContext, useState } from "react";

export const languageContext = createContext();

const LanguageContextProvider = ({ children }) => {
    const [language, setLanguage] = useState('fr');
    const switchLanguage = (updateLang) => {
       setLanguage(updateLang); 
    }
    return (
        <languageContext.Provider value={{language, switchLanguage}}>
            {children}
        </languageContext.Provider>
    )
}

export default LanguageContextProvider