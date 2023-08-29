
import styles from "./bannerPortfolio.module.scss"

import { useContext } from "react";

import traduction from "../../assets/data/traduction"; 
import { languageContext } from "../Context/ContextLang";

function BannerPortfolio() {

    const { language } = useContext(languageContext);
    const useLanguage = traduction[language]

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
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