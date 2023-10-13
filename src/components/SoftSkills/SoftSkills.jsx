import SoftSkill from "./SoftSkill";
import styles from "./softSkills.module.scss";

import imageCom from "../../assets/images/softSkills/communication.webp";
import imageAppren from "../../assets/images/softSkills/apprentissage.webp";
import imageInitiative from "../../assets/images/softSkills/initiative.webp";
import imagePosivité from "../../assets/images/softSkills/positivité.webp";
import { useContext } from "react";
import { languageContext } from "../Context/ContextLang";
import traduction from "../../assets/data/traduction";

function SoftSkills() {

const { language } = useContext(languageContext)

const useLanguage = traduction[language]

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    {useLanguage.softSkillTitle}
                </h3>
                <p className={styles.subTitle}>
                    {useLanguage.softSkillSubTitle}
                </p>
                <div className={styles.contentContainer}>
                    <SoftSkill 
                        title="Communication"
                        cardImage={imageCom}
                        cardImageAlt="Image qui représente la communication"
                        textDescription={useLanguage.communicationDescription}
                    />
                    <SoftSkill 
                        title={useLanguage.learningTitle}
                        cardImage={imageAppren}
                        cardImageAlt="Image qui représente l'apprentissage en continue"
                        textDescription={useLanguage.learnDescription}
                    />
                    <SoftSkill 
                        title="Initiative"
                        cardImage={imageInitiative}
                        cardImageAlt="Image qui représente l'initative"
                        textDescription={useLanguage.initiativeDescription}
                    />
                    <SoftSkill 
                        title={useLanguage.positivitiTitle}
                        cardImage={imagePosivité}
                        cardImageAlt="Image qui représente la communication"
                        textDescription={useLanguage.positivitiDescription}
                    />
                </div>
            </div>
        </div>
    )
}

export default SoftSkills