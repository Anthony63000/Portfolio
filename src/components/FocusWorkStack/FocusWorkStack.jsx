
import styles from "./focusWorkStack.module.scss"
import "../../assets/styles/colorLogo.scss"

function FocusWorkStack({ workSelected, workLogo, workLogoColor }) {

    return (
        <div className={styles.container}>
            <div className={styles.stacks}>
                    <p className={styles.title}>
                        Stack technique
                    </p>
                <div className={styles.top}>
                {workSelected.stacks.map((work, index) => (
                    <div
                        className={styles.stackContainer}
                        key={index}
                    >
                        <i 
                            className={`${workLogo[index]} ${workLogoColor[index]}`}
                        >
                        </i>
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
