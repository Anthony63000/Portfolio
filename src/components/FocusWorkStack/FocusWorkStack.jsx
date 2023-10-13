
import styles from "./focusWorkStack.module.scss"
import "../../assets/styles/colorLogo.scss"

function FocusWorkStack({ workSelected, 
    stackImage,
    stackAltImage,
    title 
}) {

    return (
        <div className={styles.container}>
            <div className={styles.stacks}>
                    <p className={styles.title}>
                        {title}
                    </p>
                <div className={styles.top}>
                {workSelected.stacks.map((work, index) => (
                    <div
                        className={styles.stackContainer}
                        key={index}
                    >
                        <img 
                            src={stackImage[index]} 
                            alt={stackAltImage} 
                            className={styles.image}
                        />
                        <p className={styles.stackText}>
                            {work}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default FocusWorkStack;
