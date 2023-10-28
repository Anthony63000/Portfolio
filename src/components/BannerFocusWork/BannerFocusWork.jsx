import { NavLink } from "react-router-dom"
import styles from "./bannerFocusWork.module.scss"
import { useTheme } from "../Context/ContextTheme"


function BannerFocusWorks({ imageBanner, altTextBanner, linkText, link, returnButton, toogleModal }) {

    const logoReturn = "fa-solid fa-arrow-left"
    const linkLogo = "fa-solid fa-link"

    const { theme } = useTheme();
    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }
    
    return (
        <div className={styles.container}>
            <img 
                className={`${styles.image} ${themeClass}`}
                src={imageBanner} 
                alt={altTextBanner}
                onClick={toogleModal}
            />
            <div className={styles.containerButtons}>
                <NavLink 
                    className={`${styles.containerButton} ${themeClass}`}
                    to="/works"
                >
                    <i className={logoReturn}></i>
                    <p 
                        className={`${styles.button} ${themeClass}`}
                    >
                        {returnButton}
                    </p>
                </NavLink>
                <NavLink 
                    className={`${styles.containerButton} ${themeClass}`}
                    to={link}
                    target="_blank"
                >
                    <i className={linkLogo}></i>
                    <p 
                        className={`${styles.button} ${themeClass}`}
                    >
                        {linkText}
                    </p>
                </NavLink>
            </div>
        </div>
    )
}

export default BannerFocusWorks