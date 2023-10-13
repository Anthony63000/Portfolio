
import styles from "../Banner/banner.module.scss"
import { useTheme } from "../Context/ContextTheme"
import LogoEntreprise from "../LogoEntreprise/LogoEntreprise"

function Banner({ job }) {

    const { theme } = useTheme();

    return (
        <div className={styles.containerBanner}>
            <div className={styles.bannerContent}>
                <LogoEntreprise />
                <h2 className={`${styles.title} ${theme === "light" ? styles.light : styles.dark}`}>
                    Borel Anthony
                </h2>
                <p className={`${styles.job} ${theme === "light" ? styles.light : styles.dark}`}>
                    {job}
                </p>
            </div>
        </div>
    )
}

export default Banner