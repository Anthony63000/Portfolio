
import styles from "./header.module.scss"

import NavLinkItem from "./NavLinkItem"

import { useContext } from "react"
import { languageContext } from "../Context/ContextLang"
import traduction from "../../assets/data/traduction"


function NavLinkItems() {

    const logoClass = "fa-solid fa-house"

    const { language } = useContext(languageContext)

    return (
        <nav className={styles.navigation}>
            <NavLinkItem 
                link="/Portfolio/Home"
                item={<i className={`${logoClass} ${styles.logo}`}></i>}
            />
            <NavLinkItem 
                link="/Portfolio/Portfolio"
                item="Portfolio"
            />
            <NavLinkItem 
                link="/Portfolio/Compétences"
                item={traduction[language].compétences}
            />
            <NavLinkItem 
                link="/Portfolio/Contact"
                item="Contact"
            />
        </nav>
    )
}

export default NavLinkItems