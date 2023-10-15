
import styles from "../assets/styles/global.module.scss";
import Header from "../components/Header/Header";
import BannerSkills from "../components/BannerSkills/BannerSkills";
import Footer from "../components/Footer/Footer";
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";
import SoftSkills from "../components/SoftSkills/SoftSkills";
import Stacks from "../components/Stacks/Stacks";
import ToolsSkills from "../components/ToolsSkills/ToolsSkills";
import { useTheme } from "../components/Context/ContextTheme";

function Skills() {

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
                <BannerSkills />
                <Stacks/>
                <ToolsSkills />
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