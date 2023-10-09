import styles from "./softSkills.module.scss";

function SoftSkill({ 
     title,
     cardImage,
     cardImageAlt,
     textDescription 
    }) {
    return (
        <div className={styles.softContainer}>
            <h4
                className={styles.titleCard}
            >
                {title}
            </h4>
            <img 
                src={cardImage} 
                alt={cardImageAlt} 
                className={styles.cardImage}
            />
            <p className={styles.cardDescription}>
                {textDescription}
            </p>
        </div>
    )
}

export default SoftSkill