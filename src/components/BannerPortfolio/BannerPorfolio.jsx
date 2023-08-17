
import styles from "./bannerPortfolio.module.scss"

function BannerPortfolio() {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Mes références
            </h2>
            <h3 className={styles.subtitle}>
                Mon portfolio de développeur Web Front-End
            </h3>
            <p className={styles.textTitle}>
                Rien de mieux qu'un petit tour de mes projets web
            </p>
        </div>
    );
}

export default BannerPortfolio