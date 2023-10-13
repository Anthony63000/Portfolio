
import styles from "./bannerPortfolio.module.scss"

import { useContext } from "react";

import traduction from "../../assets/data/traduction"; 
import { languageContext } from "../Context/ContextLang";
import { useTheme } from "../Context/ContextTheme";

function BannerPortfolio() {

    const { language } = useContext(languageContext);
    const useLanguage = traduction[language]

    const {theme } = useTheme();
    
    let themeClass;
    if(theme === 'light') {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.container}>
            <h2 className={`${styles.title} ${themeClass}`}>
                {useLanguage.bannerPortfolioTitle}
            </h2>
            <h3 className={styles.subtitle}>
                {useLanguage.bannerPortfolioSubtitle}
            </h3>
            <p className={styles.textTitle}>
                {useLanguage.bannerPortfolioText}
            </p>
        </div>
    );
}

export default BannerPortfolio