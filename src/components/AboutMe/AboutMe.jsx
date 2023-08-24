
import styles from "../AboutMe/aboutMe.module.scss"
import { NavLink } from "react-router-dom"

import AboutMeSkills from "./AboutMeSkills"

function AboutMe({ imageMeSrc, altTextMe }) {
    return (
        <section className={styles.container}>
            <div className={styles.left}>
                <h3 className={styles.leftTitle}>
                    Développeur Web Front-End
                </h3>
                <p className={styles.leftAfterTitle}>
                    Que suis-je capable de faire ?
                </p>
                <p className={styles.leftText}>
                    Je suis capable de développer des projets
                    Web, de la landing page à l'application Web, 
                    de plus, j'ai une aspiration pour les projets 
                    innovants.
                </p>
                <p className={styles.leftAltText}>
                    De la préparation en passant par la création, l'optimisation
                    ou bien le débugage d'un projet Web
                </p>
                <div className={styles.aboutSkillsContainer}>
                    <AboutMeSkills
                        skill="Html"
                    />
                    <AboutMeSkills 
                        skill="Css"
                    />
                    <AboutMeSkills 
                        skill="Sass"
                    />
                    <AboutMeSkills 
                        skill="JavaScript"
                    />
                    <AboutMeSkills 
                        skill="React"
                    />
                </div>
                <div className={styles.leftLinkContainer}>
                    <NavLink 
                        to={"/Portfolio/Compétences"}
                        className={styles.leftLink}>
                            En savoir plus
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