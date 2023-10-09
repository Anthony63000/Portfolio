import styles from "./stacks.module.scss";

function Stack({ title,
    image1,
    image2,
    image3,
    altImage1,
    altImage2,
    altImage3,
    description}) {
    return (
        <div className={styles.stackContainer}>
            <h4 className={styles.stackTitle}>
                {title}
            </h4>
            <div className={styles.imageContainer}>
                <img 
                    src={image1} 
                    alt={altImage1}
                    className={styles.image}
                />
                <img 
                    src={image2} 
                    alt={altImage2}
                    className={styles.image}
                />
                <img 
                    src={image3} 
                    alt={altImage3} 
                    className={styles.image}
                />
            </div>
            <p className={styles.descriptionStack}>
                {description}
            </p>
        </div>
    )
}

export default Stack