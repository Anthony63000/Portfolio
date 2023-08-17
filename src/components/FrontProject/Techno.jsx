
import styles from "./frontProject.module.scss"

function Techno({ techno, color }) {
    return (
        <i className={`${techno} ${styles.technos}`} style={{ color }}></i>
    )
}

export default Techno;