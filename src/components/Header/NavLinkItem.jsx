
import styles from "../Header/header.module.scss"

import { NavLink } from "react-router-dom"

function NavLinkItem( {link, item} ) {

    return (
        <ul className={styles.ulList}>
            <li className={styles.liList}>
                <NavLink 
                    className={({isActive}) => 
                    (isActive ? `${styles.activeLink}`
                    :
                    `${styles.link}`)}
                    to={link}
                >
                        {item}
                </NavLink>
            </li>
        </ul>
    )
}

export default NavLinkItem