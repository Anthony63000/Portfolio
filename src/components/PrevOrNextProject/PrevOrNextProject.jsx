import { useParams, useNavigate } from "react-router-dom"
import styles from "./prevOrNextProject.module.scss"
import { useState } from "react";
import data from "../../assets/data/data.json";

function PrevOrNextProject({ worksPrev, worksNext }) {

    const { id } = useParams();
    const [idSelected, setIdSelected] = useState(id)
    const navigate = useNavigate();

    const worksAllId = data.projects;

    console.log(worksAllId)

    const goToPrevProject = () => {
        const prevId = parseInt(idSelected) - 1;
        if(prevId >= 1) {
            setIdSelected(prevId.toString());
            navigate(`/Works/${prevId}`);
        }
    }

    const goToNextProject = () => {
        const nextId = parseInt(idSelected) + 1;
        const maxId = worksAllId.length
        if(nextId <= maxId) {
            setIdSelected(nextId.toString());
            navigate(`/Works/${nextId}`);
        }
    }

    return (
        <div className={styles.container}>
            {id > 1 && (
            <div 
                className={styles.left}
                onClick={goToPrevProject}
            >
                <p className={styles.title}>
                    Consuter le projet précédent
                </p>
                <p className={styles.subtitle}>
                    {worksAllId[id - 2].title}
                </p>
            </div>
            )}
            {id < worksAllId.length && (
            <div 
                className={styles.right}
                onClick={goToNextProject}
            >
                <p className={styles.title}>
                    Consuter le projet suivant
                </p>
                <p className={styles.subtitle}>
                    {worksAllId[id].title}
                </p>
            </div>
            )}
        </div>
    )
}

export default PrevOrNextProject