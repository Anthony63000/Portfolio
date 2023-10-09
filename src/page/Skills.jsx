
import styles from "../assets/styles/global.module.scss";
import Header from "../components/Header/Header";
import BannerSkills from "../components/BannerSkills/BannerSkills";
import Footer from "../components/Footer/Footer";
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";
import SoftSkills from "../components/SoftSkills/SoftSkills";
import Stacks from "../components/Stacks/Stacks";

function Skills() {
    return (
        <div className={styles.app}>
            <header>
                <Header />
            </header>
            <main>
                <BannerSkills />
                <Stacks/>
                <SoftSkills />
            </main>
                <ScrollTopButton />
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Skills