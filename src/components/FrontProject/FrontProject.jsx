import Techno from "./Techno"
import styles from "./frontProject.module.scss"

import { NavLink } from "react-router-dom"
import { useState, useEffect } from "react";

import { useTheme } from "../Context/ContextTheme";

import data from "../../assets/data/data.json"

function FrontProject(
    {
        title,
        subTitle,
        titleProject,
        projectText,
        link
    }
) {

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

    const { theme } = useTheme();
    let themeClass;

    if(theme === "light") {
        themeClass = styles.light;
    } else {
        themeClass = styles.dark
    }

    const [modalImage, setModalImage] = useState(false)

    const toggleModal = () => {
        setModalImage(!modalImage)
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <h3 className={`${styles.title} ${themeClass}`}>
                    {title}
                </h3>
                <p className={styles.textTitle}>
                    {subTitle}
                </p>
            </div>
            <div className={styles.middle}>
                <div className={`${styles.left} ${styles.imageContainer}`}>
                    {frontProject.map((project, index) => (
                        <img
                        key={index}
                        className={`${styles.image} ${
                            index === currentIndex ? styles.activeImage : ""
                        } ${themeClass}`}
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
                            color="#CD6799"
                        />
                    </div>
                    <h4 className={`${styles.titleProject} ${themeClass}`}>
                        {titleProject}
                    </h4>
                    <p className={styles.textProject}>
                        {projectText}
                    </p>
                    <button 
                        className={`${styles.zoomProject} ${themeClass}`}
                        onClick={toggleModal}
                    >
                        Voir plus
                    </button>
                </div>
            </div>
            <div className={styles.bottom}>
                <div className={`${styles.linkContainer} ${themeClass}`}>
                    <NavLink 
                        to={"/Works"}
                        className={`${styles.link} ${themeClass}`}
                    >
                            {link}
                    </NavLink>
                </div>
            </div>
            {modalImage && (
                <div className={styles.modalContainer} onClick={toggleModal}>
                    <div className={styles.imageModalContainer}>
                    {frontProject.map((project, index) => (
                        <img
                        key={index}
                        className={`${styles.imageModal} ${
                            index === currentIndex ? styles.activeImageModal : ""
                        } ${themeClass}`}
                        src={project.image}
                        alt={project.altText}
                        />
                    ))}
                </div>
                </div>
            )}
        </div>
    )
}

export default FrontProject