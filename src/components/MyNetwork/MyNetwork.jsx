
import styles from "./mynetwork.module.scss"
import stylesHeader from "../Header/header.module.scss"

import { NavLink } from "react-router-dom";

function MyNetwork() {
    return (
        <div className={`${styles.container} ${stylesHeader.container}`}>
            <p className={styles.title}>Mes réseaux</p>
            <NavLink
                className={`${styles.link} ${stylesHeader.link}`}
                target="_blank"
                to="https://www.linkedin.com/in/anthony-borel-180698268/"
            >
                LinkedIn
            </NavLink>
            <NavLink
                className={`${styles.link} ${stylesHeader.link}`}
                target="_blank"
                to="https://github.com/Anthony63000"
            >
                GitHub
            </NavLink>
        </div>
    )
}

export default MyNetwork