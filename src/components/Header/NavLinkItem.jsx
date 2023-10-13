
import { useTheme } from "../Context/ContextTheme"
import styles from "../Header/header.module.scss"

import { NavLink } from "react-router-dom"

function NavLinkItem( {link, item} ) {

    const { theme } = useTheme();

    return (
        <ul className={styles.ulList}>
            <li className={styles.liList}>
            <NavLink 
                className={({isActive}) => 
                    isActive
                        ? `${styles.activeLink} ${theme === "light" ? '' : styles.dark}`
                        : `${styles.link} ${theme === "light" ? '' : styles.dark}`
                }
                to={link}
            >
                {item}
            </NavLink>
            </li>
        </ul>
    )
}

export default NavLinkItem