import Techno from "./Techno"
import styles from "./frontProject.module.scss"

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";

import data from "../../assets/data/data.json"

function FrontProject() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const frontProject = data.frontProject

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === frontProject.length -1 ? 0 : prevIndex + 1
            );
        }, 5000);

        return () => clearInterval(interval)
    }, [frontProject.length])

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={styles.title}>
                    Projet en avant
                </h3>
                <p className={styles.textTitle}>
                    Consulte mon portfolio et découvre
                    l'ensemble de mes réalisations
                </p>
            </div>
            <div className={styles.middle}>
            <div className={`${styles.left} ${styles.imageContainer}`}>
                {frontProject.map((project, index) => (
            <img
              key={index}
              className={`${styles.image} ${
                index === currentIndex ? styles.activeImage : ""
              }`}
              src={project.image}
              alt={project.altText}
            />
          ))}
                </div>
                <div className={styles.right}>
                    <div className={styles.techContainer}>
                        <Techno 
                            techno="fa-brands fa-react fa-2xl"
                        />
                        <Techno 
                            techno="fa-brands fa-sass fa-2xl"
                            color="#CD6799;"
                        />
                    </div>
                    <h4 className={styles.titleProject}>
                        Application Web - Kasa
                    </h4>
                    <p className={styles.textProject}>
                        Kasa est une application web qui est 
                        destinée à des particuliers qui souhaitent
                        louer un appartement pour leur vacances.
                        Ce projet est composé d'une page d'accueil 
                        avec des cartes qui correspondent à des 
                        locations immobilières. Une fois que 
                        l'utilisateur accède à un logement, 
                        il va pouvoir avoir accès aux différentes 
                        caractéristiques de la location.
                    </p>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={styles.linkContainer}>
                    <NavLink 
                        to={"/Portfolio/Portfolio"}
                        className={styles.link}
                    >
                            Consulte mon porfolio
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default FrontProject