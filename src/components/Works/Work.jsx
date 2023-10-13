
import { useTheme } from "../Context/ContextTheme"
import styles from "./work.module.scss"


function Work({ 
    imageProjectSrc, 
    altImage,
    title,
    type,
    date
}) {

    const { theme } = useTheme()

    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.container}>
            <div className={`${styles.imageContainer} ${themeClass}`}>
                <img 
                    className={styles.image}
                    src={imageProjectSrc} 
                    alt={altImage}
                />
                <div className={styles.absolute}>
                    <h3 className={styles.title}>
                            {title}
                    </h3>
                    <p className={styles.type}>
                        {type}
                    </p>
                    <p className={styles.date}>
                        {date}
                    </p>
                </div>
            </div>   
        </div>
    )
}

export default Work