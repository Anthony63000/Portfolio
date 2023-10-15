import styles from "../assets/styles/global.module.scss"

import { useParams } from "react-router-dom"
import data from "../assets/data/data.json";
import Header from "../components/Header/Header";
import BannerFocusWorks from "../components/BannerFocusWork/BannerFocusWork";
import FocusWorkFeature from "../components/FocusWorkFeature/FocusWorkFeature";
import Footer from "../components/Footer/Footer"
import FocusWorkStack from "../components/FocusWorkStack/FocusWorkStack";
import PrevOrNextProject from "../components/PrevOrNextProject/PrevOrNextProject";
import { useContext } from "react";
import { languageContext } from "../components/Context/ContextLang";
import traduction from "../assets/data/traduction";
import { useTheme } from "../components/Context/ContextTheme";

function FocusWorks() {

    const { id } = useParams();
    const workSelected = data.projects.find(work => work.id === Number(id));

    const { language } = useContext(languageContext)
    const useLanguage = traduction[language]

    const { theme } = useTheme()

    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }
    
    return (
        <div className={`${styles.app} ${themeClass}`}>
            <Header />
            <BannerFocusWorks 
                imageBanner={workSelected.image}
                link={workSelected.link}
                linkText={useLanguage.BannerFocusVisit}
                returnButton={useLanguage.BannerFocusReturn}
            />
            <div className={styles.mainContainer}>
                <FocusWorkFeature 
                    title={useLanguage.projects[id].title}
                    themeText={useLanguage.projects[id].theme}
                    natureText={useLanguage.projects[id].nature}
                    assignmentText={useLanguage.projects[id].description}
                    dateText={useLanguage.projects[id].date}
                    linkText={workSelected.link}
                />

                <FocusWorkStack 
                    workSelected={workSelected}
                    stackImage={workSelected.stackLogo}
                    title={useLanguage.stackTechTitle}
                />
            </div>
            <PrevOrNextProject />
            <Footer />
        </div>
    )
}

export default FocusWorks