import { useTheme } from "../Context/ContextTheme";
import styles from "./softSkills.module.scss";

function SoftSkill({ 
     title,
     cardImage,
     cardImageAlt,
     textDescription 
    }) {

        const { theme } = useTheme();
        let themeClass;
        if(theme === "light") {
            themeClass = styles.light
        } else {
            themeClass = styles.dark
        }

    return (
        <div className={`${styles.softContainer} ${themeClass}`}>
            <h4
                className={`${styles.titleCard} ${themeClass}`}
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