
import styles from "./header.module.scss"

import NavLinkItem from "./NavLinkItem"

function NavLinkItems() {

    const logoClass = "fa-solid fa-house"

    return (
        <nav className={styles.navigation}>
            <NavLinkItem 
                link="/"
                item={<i className={`${logoClass} ${styles.logo}`}></i>}
            />
            <NavLinkItem 
                link="/Portfolio"
                item="Portfolio"
            />
            <NavLinkItem 
                link="/Compétences"
                item="Compétences"
            />
            <NavLinkItem 
                link="/Contact"
                item="Contact"
            />
        </nav>
    )
}

export default NavLinkItems