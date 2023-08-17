
import Stack from "./Stack";
import styles from "./stack.module.scss";

function Stacks() {

    const htmlClass = "fa-brands fa-html5 fa-2xl"
    const cssClass = "fa-brands fa-css3-alt fa-2xl"
    const sassClass = "fa-brands fa-sass fa-2xl"
    const javascriptClass = "fa-brands fa-js fa-2xl"
    const reactClass = "fa-brands fa-react fa-2xl"

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    Ma Stack de développeur Front-End
                </h3>
                <p className={styles.subTitle}>
                    Zoom sur mes compétences
                </p>
            </div>
            <div className={styles.bottom}>
                <Stack 
                    stack="Html"
                    stackClass={htmlClass}
                    id={styles.html}
                />
                <Stack 
                    stack="Css"
                    stackClass={cssClass}
                    id={styles.css}
                />
                <Stack 
                    stack="Sass"
                    stackClass={sassClass}
                    id={styles.sass}
                />
                <Stack 
                    stack="JavaScript"
                    stackClass={javascriptClass}
                    id={styles.javascript}
                />
                <Stack 
                    stack="React"
                    stackClass={reactClass}
                    id={styles.react}
                />
            </div>
        </div>
    )
}

export default Stacks 