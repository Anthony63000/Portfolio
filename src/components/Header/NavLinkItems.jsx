
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
                link="/"
                item={<><i className={`${logoClass} ${styles.logo}`}></i><p className={styles.textIdden}>lien</p></>}
            />
            <NavLinkItem 
                link="/Works"
                item="Portfolio"
            />
            <NavLinkItem 
                link="/Competences"
                item={traduction[language].compétences}
            />
            <NavLinkItem 
                link="/Contact"
                item="Contact"
            />
        </nav>
    )
}

export default NavLinkItems