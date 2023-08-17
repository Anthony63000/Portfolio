
import styles from "../Banner/banner.module.scss"

function Banner({ bannerImage, altBanner }) {
    return (
        <div className={styles.containerBanner}>
            <div className={styles.bannerContent}>
                <img 
                    className={styles.image}
                    src={bannerImage} 
                    alt={altBanner} 
                />
                <h2 className={styles.title}>
                    Borel Anthony
                </h2>
                <p className={styles.job}>
                    Développeur Web Front-End
                </p>
            </div>
        </div>
    )
}

export default Banner