import SoftSkill from "./SoftSkill";
import styles from "./softSkills.module.scss";

import imageCom from "../../assets/images/softSkills/communication.webp";
import imageAppren from "../../assets/images/softSkills/apprentissage.webp";
import imageInitiative from "../../assets/images/softSkills/initiative.webp";
import imagePosivité from "../../assets/images/softSkills/positivité.webp";

function SoftSkills() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    Mes Soft Skills
                </h3>
                <p className={styles.subTitle}>
                    Zoom sur mes Soft Skills
                </p>
                <div className={styles.contentContainer}>
                    <SoftSkill 
                        title="Communication"
                        cardImage={imageCom}
                        cardImageAlt="Image qui représente la communication"
                        textDescription="Un bon développeur web ne se contente pas de coder selon les spécifications, mais il doit également comprendre les besoins du client. Cela nécessite une communication efficace pour clarifier les exigences, discuter des fonctionnalités et s'assurer que le produit final répond aux attentes"
                    />
                    <SoftSkill 
                        title="Apprentissage continu"
                        cardImage={imageAppren}
                        cardImageAlt="Image qui représente l'apprentissage en continue"
                        textDescription=" Le domaine du développement web évolue rapidement, avec de nouvelles technologies, frameworks et outils émergents régulièrement. Un développeur web engagé dans l'apprentissage continu est mieux positionné pour rester à jour avec ces évolutions et intégrer les dernières pratiques dans son travail."
                    />
                    <SoftSkill 
                        title="Initiative"
                        cardImage={imageInitiative}
                        cardImageAlt="Image qui représente l'initative"
                        textDescription="L'initiative encourage l'innovation et la créativité. Les développeurs proactifs cherchent constamment des moyens d'améliorer les processus, d'optimiser le code et d'apporter des idées nouvelles pour résoudre les défis."
                    />
                    <SoftSkill 
                        title="Positivité"
                        cardImage={imagePosivité}
                        cardImageAlt="Image qui représente la communication"
                        textDescription=" Les développeurs positifs abordent les défis avec une attitude constructive. Plutôt que de voir les problèmes comme des obstacles insurmontables, ils les considèrent comme des opportunités d'apprentissage et de croissance."
                    />
                </div>
            </div>
        </div>
    )
}

export default SoftSkills