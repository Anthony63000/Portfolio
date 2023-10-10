
import styles from "../AboutMe/aboutMe.module.scss"
import { NavLink } from "react-router-dom"


function AboutMe({ imageMeSrc, 
    altTextMe, 
    title,
    subTitle,
    text,
    altText,
    link
}) {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <h3 className={styles.leftTitle}>
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
                <div className={styles.leftLinkContainer}>
                    <NavLink 
                        to={"/Compétences"}
                        className={styles.leftLink}>
                            {link}
                    </NavLink>
                </div>
            </div>
            <div className={styles.right}>
                <img 
                    className={styles.image}
                    src={imageMeSrc} 
                    alt={altTextMe} 
                />
            </div>
        </section>
    )
}

export default AboutMe