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
import { useEffect, useState } from "react";
import ModalFocusWorks from "../components/ModalFocusWorks/ModalFocusWorks";

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

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
        setTimeout(() => {
            setIsLoading(true);
        }, 1250); 
    }, [id]);

    const [ modal, setModal ] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    return (
        <div className={ isLoading ? `${styles.loader} ${styles.loaderActive}` : styles.loader} >
            <div className={`${styles.app} ${themeClass}`}>
                <header>
                    <Header />
                </header>
                <main className={styles.mainContainer}>
                {modal && (
                    <ModalFocusWorks
                        image={workSelected.image}
                        toggleModal={toggleModal}
                    />
                )}
                <BannerFocusWorks 
                    imageBanner={workSelected.image}
                    link={workSelected.link}
                    linkText={useLanguage.BannerFocusVisit}
                    returnButton={useLanguage.BannerFocusReturn}
                    toogleModal={toggleModal}
                    altTextBanner={workSelected.textAltImage}
                />
                <div className={styles.mainContainerFocus}>
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
                        stackAltImage={workSelected.stacks}
                    />
                </div>
                <PrevOrNextProject />
                </main>
                <footer>
                    <Footer />
                </footer>   
            </div>
        </div>
    )
}

export default FocusWorks