
import styles from "./work.module.scss"


function Work({ 
    imageProjectSrc, 
    altImage,
    title,
    text
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
            </div>    
        </div>
    )
}

export default Work