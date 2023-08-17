
import styles from "./footer.module.scss"
import { NavLink } from "react-router-dom"

function Footer() {

    const gitHubLogoClass = "fa-brands fa-github fa-xl"
    const linkClass = "fa-brands fa-linkedin fa-xl"

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                    <p className={styles.topText}>
                        Retrouvez - moi sur
                    </p>
            </div>
            <div className={styles.middle}>
                <NavLink 
                    className={styles.link}
                    to="https://github.com/Anthony63000?tab=repositories"
                    target="_blank"
                >
                        <i className={`${gitHubLogoClass} ${styles.Icon}`}></i>
                </NavLink>
                <NavLink
                    className={styles.link}
                    to="https://www.linkedin.com/in/anthony-borel-180698268/"
                    target="_blank"
                >
                        <i className={`${linkClass} ${styles.Icon}`}></i>
                </NavLink>
            </div>
            <div className={styles.copy}>
                <p className={styles.copyText}>
                © 2023 Borel Anthony. Tous droits réservés.
                </p>
            </div>
        </div>
    )
}

export default Footer