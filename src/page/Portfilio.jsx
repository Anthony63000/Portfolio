
import styles from "../assets/styles/global.module.scss"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import BannerPortfolio from "../components/BannerPortfolio/BannerPorfolio"
import MainPortfolio from "../components/MainPortfolio/MainPortFolio"
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton"

function Portfolio() {
    return (
        <div className={styles.app}>
            <header>
                <Header />
            </header>
            <main>
                <BannerPortfolio />
                <MainPortfolio />
            </main>
                <ScrollTopButton />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Portfolio