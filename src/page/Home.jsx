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
            <main>
              <Banner job={traduction[language].job} />
              <AboutMe
                imageMeSrc={Me}
                title={traduction[language].aboutMeTitle}
                subTitle={traduction[language].aboutMeSubtitle}
                text={traduction[language].aboutMeText}
                altText={traduction[language].aboutMeSubtext}
                link={traduction[language].aboutMeLink}
              />
              <FrontProject
                title={traduction[language].frontProjectTitle}
                subTitle={traduction[language].frontProjectSubTitle}
                titleProject={traduction[language].frontProjectProjectTitle}
                projectText={traduction[language].frontProjectProjectText}
                link={traduction[language].frontProjectLink}
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
