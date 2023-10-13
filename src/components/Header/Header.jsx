import styles from "../Header/header.module.scss"

import { useContext, useState } from "react";

import NavLinkItems from "./NavLinkItems"
import MyNetwork from "../MyNetwork/MyNetwork";
import { languageContext } from "../Context/ContextLang";
import LogoEntreprise from "../LogoEntreprise/LogoEntreprise";
import { useTheme } from "../Context/ContextTheme";

function Header() {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [isFrench, setIsFrench] = useState(() => {
        const storedLanguage = localStorage.getItem('selectedLanguage');
        return storedLanguage ? storedLanguage === 'fr' : true;
    });

    const switchLanguageContext = useContext(languageContext);

    const openModal = () => {
        setModalIsOpen(!modalIsOpen);
    }

    const changeTextLang = () => {
        const newLanguage = isFrench ? 'en' : 'fr';
        switchLanguageContext.switchLanguage(newLanguage);
        setIsFrench(!isFrench);
        localStorage.setItem('selectedLanguage', newLanguage);
    }

    const langage = "Français";
    const customLanguage = "English";

    const langageClass = "fa-solid fa-language fa-xl";
    const burgerClass = "fa-solid fa-bars fa-xl"
    const closeClass = "fa-solid fa-circle-xmark fa-xl"

    const { theme } = useTheme()

    return (
            <div className={`${styles.container} ${theme === "light" ? "" : styles.dark}`}>
                <div className={styles.containerLogo}>
                    <LogoEntreprise />
                </div>
                <NavLinkItems />
                <div 
                    className={`${styles.langageContainer} ${theme === "light" ? "" : styles.dark}`}
                    onClick={changeTextLang}
                >
                        <p 
                            className={styles.langue}
                        >
                            {isFrench ? langage : customLanguage}
                        </p>
                        <i className={langageClass}></i>
                </div>
                <div 
                    className={styles.burger}
                    onClick={openModal}
                >
                        <i className={burgerClass}></i>
                </div>  
                {modalIsOpen && (
                <div className={styles.modal}>
                    <div className={styles.top}>
                        <p className={styles.navigationTilte}>Navigation</p>
                        <i 
                            className={closeClass}
                            onClick={openModal}
                        >
                        </i>
                    </div>
                    <div className={styles.contentContainer}>
                        <NavLinkItems />
                    </div>
                    <div className={styles.network}>
                        <MyNetwork />
                    </div>
                </div>
            )}
            </div>
           
    )
}

export default Header