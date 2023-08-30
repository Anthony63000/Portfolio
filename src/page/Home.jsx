
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import FrontProject from "../components/FrontProject/FrontProject";
import Footer from "../components/Footer/Footer"

import styles from "../assets/styles/global.module.scss";
import Logo from "../assets/images/logo-entreprise/logo-entreprise.png"
import AboutMe from "../components/AboutMe/AboutMe";
import Me from "../assets/images/Moi/moi 2 .jpg"

import { useContext } from "react";
import traduction from "../assets/data/traduction";
import { languageContext } from "../components/Context/ContextLang";
import ScrollTopButton from "../components/ScrollTopButton/ScrollTopButton";

function Home() {

  const { language } = useContext(languageContext)

  return (
    <div className={styles.app}>
      <header>
         <Header />
      </header>
      <main>
        <Banner 
          bannerImage={Logo}
          altBanner="Logo du site"
          job={traduction[language].job}
        />
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
  )
}

export default Home;