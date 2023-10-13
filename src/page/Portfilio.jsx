
import styles from "../assets/styles/global.module.scss"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import BannerPortfolio from "../components/BannerPortfolio/BannerPorfolio"
import MainPortfolio from "../components/MainPortfolio/MainPortFolio"
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton"
import { useTheme } from "../components/Context/ContextTheme"

function Portfolio() {

    const { theme } = useTheme();

    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={`${styles.app} ${themeClass}`}>
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