import styles from "./darkLightButton.module.scss";

import { useTheme } from "../Context/ContextTheme";

function DarkLightModeButton() {

    const themeIcon = "fa-regular fa-lightbulb fa-lg"

    const { theme, toggleTheme } = useTheme();

    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.darkMode} onClick={toggleTheme}>
            <i
            className={`${themeIcon} ${themeClass}`}
            >
            </i>
        </div>
    )
}

export default DarkLightModeButton