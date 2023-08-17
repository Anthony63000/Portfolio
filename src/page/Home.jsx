
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import FrontProject from "../components/FrontProject/FrontProject";
import Footer from "../components/Footer/Footer"

import styles from "../assets/styles/global.module.scss";
import Logo from "../assets/images/logo-entreprise/logo-entreprise.png"
import AboutMe from "../components/AboutMe/AboutMe";
import Me from "../assets/images/Moi/moi 2 .jpg"

function Home() {
  return (
    <div className={styles.app}>
      <header>
         <Header />
      </header>
      <main>
        <Banner 
          bannerImage={Logo}
          altBanner="Logo du site"
        />
        <AboutMe 
        imageMeSrc={Me}
        />
        <FrontProject 
        />
      </main>
      <footer>
          <Footer />
      </footer>
    </div>
  )
}

export default Home;