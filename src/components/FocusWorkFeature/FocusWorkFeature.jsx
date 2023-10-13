import { Link } from "react-router-dom"
import styles from "./focusWorkFeature.module.scss"
import { languageContext } from "../Context/ContextLang"
import { useContext } from "react"
import traduction from "../../assets/data/traduction"

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

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.descriptionContainer}>
                <p className={styles.detail}>
                    {useLanguage.FocusWorkDetail}
                </p>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        {useLanguage.FocusWorkTheme}
                    </p>
                    <p className={styles.description}>
                        {themeText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        Nature
                    </p>
                    <p className={styles.description}>
                        {natureText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        Mission
                    </p>
                    <p className={styles.description}>
                        {assignmentText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        {useLanguage.FocusWorkDelivery}
                    </p>
                    <p className={styles.description}>
                        {dateText}
                    </p>
                </div>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        Url
                    </p>
                    <Link 
                        className={styles.description}
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