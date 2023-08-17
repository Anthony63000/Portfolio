
import styles from "./mainPortfolio.module.scss"
import React, { useState, useEffect } from 'react';

import FilterBar from "../FilterBar/FilterBar"
import Work from "../Works/Work"

import data from "../../assets/data/data.json";

function MainPortfolio() {

    const projects = data.projects;
    const [filteredProject, setFilteredProject] = useState(projects)

    const handleFilterChange = (selectedCategory) => {
        if(!selectedCategory) {
            setFilteredProject(projects);
        } else {
            const filtered = projects.filter((project) => 
            project.category === selectedCategory);
            setFilteredProject(filtered)
        }
    }

    const [isFixed, setIsFixed] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 200) { 
        setIsFixed(false);
        } else {
        setIsFixed(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div 
            className={styles.container}
        
        >
            <div className={styles.leftContainer}>
                <div className={`${styles.left}
                ${!isFixed ? styles.isFixed
                :
                ""}`}>
                    <FilterBar 
                        onFilterChange={handleFilterChange}
                    />
                </div>
            </div>
            <div className={`${styles.right} ${!isFixed ? styles.rightBis : ""}`}>
                {filteredProject.map((project, index) => (
                    <Work 
                        key={index}
                        title={project.title}
                        text={project.description}
                        link={project.link}
                        imageProjectSrc={project.image}
                        logoProjectSrc={project.logo}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainPortfolio