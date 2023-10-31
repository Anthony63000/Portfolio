import styles from "./modalHeader.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import NavLinkItems from "../Header/NavLinkItems";
import { Link } from "react-router-dom";
import { useTheme } from "../Context/ContextTheme";

function ModalHeader({ closeModal }) {

    const { theme } = useTheme();
    let themeClass;
    if(theme === 'light') {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div 
            className={`${styles.container} ${themeClass}`}
        >
            <div 
                className={styles.top}
            >
                <p 
                    className={styles.navText}
                >
                    Navigation
                </p>
                <FontAwesomeIcon 
                    icon={faTimes} 
                    onClick={closeModal}
                    className={`${styles.closeModalStyles} ${themeClass}`}
                />
            </div>
            <div 
                className={styles.middle}
            >
                <NavLinkItems
                    navModal={styles.navigation}
                    modalUlList={`${styles.modalUlList} ${themeClass}`}
                    linkModal={styles.linkModal}
                    linkModalActive={styles.linkModalActive}
                    liListModal={styles.liListModal}
                />
            </div>
            <div className={styles.bottom}>
                <Link
                    to={"https://github.com/Anthony63000"}
                    target="_blank"
                    className={styles.link}
                >
                    <FontAwesomeIcon 
                        icon={faGithub} 
                        className={styles.icon}
                    />
                </Link>
                <Link
                    to={"https://www.linkedin.com/in/anthony-borel-180698268/"}
                    target="_blank"
                    className={styles.link}
                >
                    <FontAwesomeIcon 
                        icon={faLinkedin}
                        className={styles.icon}
                    />
                </Link>
            </div>
        </div>
    )
}

export default ModalHeader