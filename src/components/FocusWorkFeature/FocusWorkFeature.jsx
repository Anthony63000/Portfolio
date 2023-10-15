import { Link } from "react-router-dom"
import styles from "./focusWorkFeature.module.scss"
import { languageContext } from "../Context/ContextLang"
import { useContext } from "react"
import traduction from "../../assets/data/traduction"
import { useTheme } from "../Context/ContextTheme"

function FocusWorkFeature({
    title,
    themeText,
    natureText,
    assignmentText,
    dateText,
    linkText
}) {

    const { language } = useContext(languageContext)
    const useLanguage = traduction[language]

    const { theme } = useTheme();
    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.container}>
            <h2 className={`${styles.title} ${themeClass}`}>
                {title}
            </h2>
            <div className={styles.descriptionContainer}>
                <p className={`${styles.detail} ${themeClass}`}>
                    {useLanguage.FocusWorkDetail}
                </p>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        {useLanguage.FocusWorkTheme}
                    </p>
                    <p className={`${styles.description} ${themeClass}`}>
                        {themeText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        Nature
                    </p>
                    <p className={`${styles.description} ${themeClass}`}>
                        {natureText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        Mission
                    </p>
                    <p className={`${styles.description} ${themeClass}`}>
                        {assignmentText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        {useLanguage.FocusWorkDelivery}
                    </p>
                    <p className={`${styles.description} ${themeClass}`}>
                        {dateText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        Url
                    </p>
                    <Link 
                        className={`${styles.description} ${themeClass}`}
                        to={linkText}
                    >
                        {linkText}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FocusWorkFeature