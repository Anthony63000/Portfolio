/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */

import styles from "./mainPortfolio.module.scss"
import React, { useState, useEffect, useContext } from 'react';

import FilterBar from "../FilterBar/FilterBar"
import Work from "../Works/Work"

import data from "../../assets/data/data.json";
import { Link } from "react-router-dom";
import { languageContext } from "../Context/ContextLang";
import traduction from "../../assets/data/traduction";
import { useTheme } from "../Context/ContextTheme";

function MainPortfolio() {

    const { language } = useContext(languageContext);
    const useLanguage = traduction[language]

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

    const { theme } = useTheme();
    let themeClass;
    if(theme === 'light') {
        themeClass = styles.light
    } else {
        themeClass = styles.dark
    }

    return (
        <div 
            className={styles.container}>
                <div className={`${isFixed ? styles.top : styles.fixed} ${themeClass}`}>
                <FilterBar 
                    onFilterChange={handleFilterChange}
                />
                </div>
            <div className={`${styles.right}`}>
                {filteredProject.map((project, index) => (
                    <Link 
                        to={`${project.id}`}
                        className={styles.linkProject}
                        key={project.id}
                    >
                        <Work 
                            key={index}
                            title={useLanguage.projects[project.id].title}
                            type={useLanguage.projects[project.id].theme}
                            date={useLanguage.projects[project.id].date}
                            altImage={project.textAltImage}
                            link={project.link}
                            imageProjectSrc={project.image}
                            stacks={project.stackLogo}
                            logoProjectSrc={project.logo}
                        />
                    </Link> 
                ))}   
            </div>
        </div>
    )
}

export default MainPortfolio


