/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import cv from "../../assets/data/cv/cv.pdf"
import styles from "./bannerSkills.module.scss";
import skills from "../../assets/images/skills/skills.webp"
import { useContext } from "react";
import { languageContext } from "../Context/ContextLang";
import traduction from "../../assets/data/traduction";
import { useTheme } from "../Context/ContextTheme";

function BannerSkills() {

    const { language } = useContext(languageContext);
    const useLanguage = traduction[language];

    const { theme } = useTheme();
    let themeClass;
    if(theme === 'light') {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.container}>
            <h3 className={`${styles.title} ${themeClass}`}>
                {useLanguage.bannerSkillsTitle}
            </h3>
            <p className={styles.subTitle}>
                {useLanguage.bannerSkillsSubtitle}
            </p>
            <a 
                href={cv}
                target="_blank"
                className={`${styles.link} ${themeClass}`} rel="noreferrer"
            >
                    {useLanguage.bannerSkillsLink}
            </a>
            <img 
                className={`${styles.image} ${themeClass}`}
                src={skills} 
                alt="Image qui réprésente les compétences" 
            />
        </div>
    )
}

export default BannerSkills