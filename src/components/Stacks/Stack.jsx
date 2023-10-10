import styles from "./stacks.module.scss";

function Stack({ title,
    image1,
    image2,
    image3,
    description}) {

        const images = [image1, image2, image3].filter(Boolean);

    return (
        <div className={styles.stackContainer}>
            <h4 className={styles.stackTitle}>
                {title}
            </h4>
            <div className={styles.imageContainer}>
                {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`altImage${index + 1}`}
            className={styles.image}
          />
        ))}
            </div>
            <p className={styles.descriptionStack}>
                {description}
            </p>
        </div>
    )
}

export default Stack