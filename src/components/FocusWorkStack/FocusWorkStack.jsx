
import styles from "./focusWorkStack.module.scss"
import "../../assets/styles/colorLogo.scss"
import { useTheme } from "../Context/ContextTheme";

function FocusWorkStack({ workSelected, 
    stackImage,
    stackAltImage,
    title 
}) {

    const { theme } = useTheme();
    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.container}>
            <div className={styles.stacks}>
                    <p className={`${styles.title} ${themeClass}`}>
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
                            alt={stackAltImage[index]} 
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
