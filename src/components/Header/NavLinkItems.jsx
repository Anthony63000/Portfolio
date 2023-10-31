
import styles from "./header.module.scss"

import NavLinkItem from "./NavLinkItem"

import { useContext } from "react"
import { languageContext } from "../Context/ContextLang"
import traduction from "../../assets/data/traduction"


function NavLinkItems({ navModal, modalUlList, linkModal, linkModalActive, liListModal }) {

    const logoClass = "fa-solid fa-house"

    const { language } = useContext(languageContext)

    return (
        <nav className={`${styles.navigation} ${navModal}`}>
            <NavLinkItem 
                link="/"
                item={<><i className={`${logoClass} ${styles.logo}`}></i><p className={styles.textIdden}>lien</p></>}
                modalUlList={modalUlList}
                linkModal={linkModal}
                linkModalActive={linkModalActive}
                liListModal={liListModal}
            />
            <NavLinkItem 
                link="/Works"
                item="Portfolio"
                modalUlList={modalUlList}
                linkModal={linkModal}
                linkModalActive={linkModalActive}
                liListModal={liListModal}
            />
            <NavLinkItem 
                link="/Competences"
                item={traduction[language].compétences}
                modalUlList={modalUlList}
                linkModal={linkModal}
                linkModalActive={linkModalActive}
                liListModal={liListModal}
            />
            <NavLinkItem 
                link="/Contact"
                item="Contact"
                modalUlList={modalUlList}
                linkModal={linkModal}
                linkModalActive={linkModalActive}
                liListModal={liListModal}
            />
        </nav>
    )
}

export default NavLinkItems