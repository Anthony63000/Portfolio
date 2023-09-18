import { Link } from "react-router-dom"
import styles from "./focusWorkFeature.module.scss"

function FocusWorkFeature({
    title,
    themeText,
    natureText,
    assignmentText,
    dateText,
    linkText
}) {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                {title}
            </h2>
            <div className={styles.descriptionContainer}>
                <p className={styles.detail}>
                    Détails du projet
                </p>
                <div className={styles.row}>
                    <p className={styles.featureTitle}>
                        Thème
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
                        Date de livraison
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