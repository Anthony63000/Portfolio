/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */

import styles from "./bannerSkills.module.scss";

import skills from "../../assets/images/skills/skills.webp"

function BannerSkills() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>
                Compétences techniques
            </h3>
            <p className={styles.subTitle}>
                Consulte mon CV pour en savoir plus sur mon parcours
            </p>
            <a 
                href="#"
                className={styles.link}
            >
                    Consulte mon CV
            </a>
            <img 
                className={styles.image}
                src={skills} 
                alt="Image qui réprésente les compétences" 
            />
        </div>
    )
}

export default BannerSkills