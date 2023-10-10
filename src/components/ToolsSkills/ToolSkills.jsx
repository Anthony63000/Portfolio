import styles from "./toolsSkills.module.scss";

function ToolSkill({
    title,
    toolImage,
    altToolImage,
    description
}) {
    return (
        <div className={styles.toolContainer}>
            <h4 className={styles.toolTitle}>
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