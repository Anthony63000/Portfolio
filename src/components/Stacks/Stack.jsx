 import styles from "./stack.module.scss";
 
 function Stack({ stack, stackClass, id }) {
    return (
        <div className={styles.stackContainer}>
            <i
                className={stackClass}
                id={id}
            >
            </i>
            <p className={styles.stack}>
                {stack}
            </p>
        </div>
    )
 }

 export default Stack