
import styles from "../assets/styles/global.module.scss";
import Header from "../components/Header/Header";
import BannerSkills from "../components/BannerSkills/BannerSkills";
import Stacks from "../components/Stacks/Stacks";
import Footer from "../components/Footer/Footer";
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";

function Skills() {
    return (
        <div className={styles.app}>
            <header>
                <Header />
            </header>
            <main>
                <BannerSkills />
                <Stacks />
            </main>
                <ScrollTopButton />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Skills