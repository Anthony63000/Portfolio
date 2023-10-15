import { useTheme } from "../Context/ContextTheme";
import styles from "./toolsSkills.module.scss";

function ToolSkill({
    title,
    toolImage,
    altToolImage,
    description
}) {

    const { theme } = useTheme();
    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={`${styles.toolContainer} ${themeClass}`}>
            <h4 className={`${styles.toolTitle} ${themeClass}`}>
                {title}
            </h4>
            <img 
                src={toolImage}
                alt={altToolImage}
                className={styles.image}
            />
            <p className={styles.description}>
                {description}
            </p>
        </div>
    )
}

export default ToolSkill