import React, { useContext } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import FrontProject from "../components/FrontProject/FrontProject";
import Footer from "../components/Footer/Footer";
import styles from "../assets/styles/global.module.scss";
import AboutMe from "../components/AboutMe/AboutMe";
import Me from "../assets/images/Moi/moi 2 .jpg";
import { languageContext } from "../components/Context/ContextLang";
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";
import { useTheme } from "../components/Context/ContextTheme";
import traduction from "../assets/data/traduction";

function Home() {
  
  const { language } = useContext(languageContext);
  const useLanguage = traduction[language]
  const { theme } = useTheme();
  let themeClass;
  if (theme === "light") {
    themeClass = styles.light;
  } else {
    themeClass = styles.dark;
  }

  return (
    <div className={styles.loader}>
      <div className={`${styles.app} ${themeClass}`}>
            <header>
              <Header />
            </header>
            <main className={styles.mainContainer}>
              <Banner job={useLanguage.job} />
              <AboutMe
                imageMeSrc={Me}
                title={useLanguage.aboutMeTitle}
                subTitle={useLanguage.aboutMeSubtitle}
                text={useLanguage.aboutMeText}
                altTextMe={useLanguage.aboutMeSubtext}
                link={useLanguage.aboutMeLink}
              />
              <FrontProject
                title={useLanguage.frontProjectTitle}
                subTitle={useLanguage.frontProjectSubTitle}
                titleProject={useLanguage.frontProjectProjectTitle}
                projectText={useLanguage.frontProjectProjectText}
                link={useLanguage.frontProjectLink}
                seeMore={useLanguage.buttonMore}
              />
            </main>
            <ScrollTopButton />
            <footer>
              <Footer />
            </footer>
      </div>
    </div>
  );
}

export default Home;
