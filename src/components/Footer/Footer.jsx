
import styles from "./footer.module.scss"
import { NavLink } from "react-router-dom"

import traduction from "../../assets/data/traduction"
import { useContext } from "react"
import { languageContext } from "../Context/ContextLang"

function Footer() {

    const gitHubLogoClass = "fa-brands fa-github fa-xl"
    const linkClass = "fa-brands fa-linkedin fa-xl"

    const { language } = useContext(languageContext);

    const useLanguage = traduction[language]; 

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                    <p className={styles.topText}>
                        {useLanguage.footerTitle}
                    </p>
            </div>
            <div className={styles.middle}>
                <NavLink 
                    className={styles.link}
                    to="https://github.com/Anthony63000?tab=repositories"
                    target="_blank"
                >
                        <i className={`${gitHubLogoClass} ${styles.Icon}`}></i>
                </NavLink>
                <NavLink
                    className={styles.link}
                    to="https://www.linkedin.com/in/anthony-borel-180698268/"
                    target="_blank"
                >
                        <i className={`${linkClass} ${styles.Icon}`}></i>
                </NavLink>
            </div>
            <div className={styles.copy}>
                <p className={styles.copyText}>
                    {useLanguage.footerCopy}
                </p>
            </div>
        </div>
    )
}

export default Footer