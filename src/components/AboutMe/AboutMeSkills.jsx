
import styles from "./aboutMe.module.scss"

function AboutMeSkills({ skill }) {

    const checkClass = "fa-solid fa-check fa-lg"

    return (
        <div className={styles.skillsContainer}>
            <i className={`${checkClass} ${styles.check}`}></i>
            <p className={styles.skills}>
                {skill}
            </p>
        </div>
    )
}

export default AboutMeSkills