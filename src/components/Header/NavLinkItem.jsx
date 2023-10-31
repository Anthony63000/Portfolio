
import { useTheme } from "../Context/ContextTheme"
import styles from "../Header/header.module.scss"

import { NavLink } from "react-router-dom"

function NavLinkItem( { link, item, modalUlList, linkModal, linkModalActive, liListModal } ) {

    const { theme } = useTheme();

    return (
        <ul className={`${styles.ulList} ${modalUlList}`}>
            <li className={`${styles.liList} ${liListModal}`}>
            <NavLink 
                className={({isActive}) => 
                    isActive
                        ? `${styles.activeLink} ${linkModalActive} ${theme === "light" ? '' : styles.dark}`
                        : `${styles.link} ${linkModal} ${theme === "light" ? '' : styles.dark}`
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