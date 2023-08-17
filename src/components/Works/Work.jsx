
import styles from "./work.module.scss"

import { NavLink } from "react-router-dom";

function Work({ 
    imageProjectSrc, 
    altImage,
    title,
    text,
    link
}) {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img 
                    className={styles.image}
                    src={imageProjectSrc} 
                    alt={altImage}
                />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.titleContainer}>
                    <h3 className={styles.title}>
                        {title}
                    </h3>
                </div>
                <div className={styles.textContainer}>
                    <p className={styles.text}>
                        {text}
                    </p>
                </div>
                <div className={styles.linkContainer}>
                    <NavLink
                        className={styles.link}
                        target="_blank"
                        to={link}
                    >
                        Consulter
                    </NavLink>
                </div>
            </div>    
        </div>
    )
}

export default Work