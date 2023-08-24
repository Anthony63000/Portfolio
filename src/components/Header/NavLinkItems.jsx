
import styles from "./header.module.scss"

import NavLinkItem from "./NavLinkItem"

function NavLinkItems() {

    const logoClass = "fa-solid fa-house"

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
                item="Compétences"
            />
            <NavLinkItem 
                link="/Portfolio/Contact"
                item="Contact"
            />
        </nav>
    )
}

export default NavLinkItems