import { NavLink } from "react-router-dom"
import styles from "./bannerFocusWork.module.scss"

//import data from "../../assets/data/data.json"

function BannerFocusWorks({ imageBanner, altTextBanner, linkText, link, returnButton }) {

    const logoReturn = "fa-solid fa-arrow-left"
    const linkLogo = "fa-solid fa-link"
    
    return (
        <div className={styles.container}>
            <img 
                className={styles.image}
                src={imageBanner} 
                alt={altTextBanner}
            />
            <div className={styles.containerButtons}>
                <NavLink 
                    className={styles.containerButton}
                    to="/works"
                >
                    <i className={logoReturn}></i>
                    <p 
                        className={styles.button}
                    >
                        {returnButton}
                    </p>
                </NavLink>
                <NavLink 
                    className={styles.containerButton}
                    to={link}
                    target="_blank"
                >
                    <i className={linkLogo}></i>
                    <p 
                        className={styles.button}
                    >
                        {linkText}
                    </p>
                </NavLink>
            </div>
        </div>
    )
}

export default BannerFocusWorks