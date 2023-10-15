import { useParams, useNavigate } from "react-router-dom";
import styles from "./prevOrNextProject.module.scss";
import { useContext, useState } from "react";
import data from "../../assets/data/data.json";
import { languageContext } from "../Context/ContextLang";
import traduction from "../../assets/data/traduction";
import { useTheme } from "../Context/ContextTheme";

function PrevOrNextProject() {
    const { id } = useParams();
    const [idSelected, setIdSelected] = useState(parseInt(id, 10));
    const navigate = useNavigate();

    const worksAllId = data.projects;

    const { language } = useContext(languageContext);
    const useLanguage = traduction[language];

    const goToPrevProject = () => {
        const prevId = idSelected - 1;
        if (prevId >= 1) {
            setIdSelected(prevId);
            navigate(`/Works/${prevId}`);
        }
    };

    const goToNextProject = () => {
        const nextId = idSelected + 1;
        const maxId = worksAllId.length;
        if (nextId <= maxId) {
            setIdSelected(nextId);
            navigate(`/Works/${nextId}`);
        }
    };

    const prevProject = useLanguage.projects[idSelected - 1];
    const nextProject = useLanguage.projects[idSelected + 1];

    const { theme } = useTheme();
    let themeClass;
    if(theme === "light") {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div className={styles.container}>
            {prevProject && (
                <div className={styles.left} onClick={goToPrevProject}>
                    <p className={`${styles.title} ${themeClass}`}>
                        {useLanguage.previousProject}
                        </p>
                    <p className={styles.subtitle}>
                        {prevProject.title}
                    </p>
                </div>
            )}
            {nextProject && (
                <div className={styles.right} onClick={goToNextProject}>
                    <p className={`${styles.title} ${themeClass}`}>
                        {useLanguage.nextProject}
                        </p>
                    <p className={styles.subtitle}>
                        {nextProject.title}
                    </p>
                </div>
            )}
        </div>
    );
}

export default PrevOrNextProject;
