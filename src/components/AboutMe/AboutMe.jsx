
import styles from "../AboutMe/aboutMe.module.scss"
import { NavLink } from "react-router-dom"

import { useTheme } from "../Context/ContextTheme";

function AboutMe({ imageMeSrc, 
    altTextMe, 
    title,
    subTitle,
    text,
    altText,
    link
}) {

    let themeClass;

    const { theme } = useTheme();

    if(theme === 'light') {
        themeClass = styles.light;
    } else {
        themeClass = styles.dark;
    }


    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <h3 className={`${styles.leftTitle} ${theme === "light" ? "" : styles.dark}`}>
                    {title}
                </h3>
                <p className={styles.leftAfterTitle}>
                    {subTitle}
                </p>
                <p className={styles.leftText}>
                    {text}
                </p>
                <p className={styles.leftAltText}>
                    {altText}
                </p>
                <div className={`${styles.leftLinkContainer} ${themeClass}`}>
                    <NavLink 
                        to={"/Competences"}
                        className={`${styles.leftLink} ${theme === "light" ? "" : styles.dark}`}>
                            {link}
                    </NavLink>
                </div>
            </div>
            <div className={styles.right}>
                <img 
                    className={`${styles.image} ${theme === "light" ? "" : styles.dark}`}
                    src={imageMeSrc} 
                    alt={altTextMe} 
                />
            </div>
        </section>
    )
}

export default AboutMe