/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/img-redundant-alt */

import styles from "./mainPortfolio.module.scss"
import React, { useState, useEffect } from 'react';

import FilterBar from "../FilterBar/FilterBar"
import Work from "../Works/Work"

import data from "../../assets/data/data.json";
import { Link } from "react-router-dom";

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
            className={styles.container}>
                <div className={`${isFixed ? styles.top : styles.fixed}`}>
                <FilterBar 
                    onFilterChange={handleFilterChange}
                />
                </div>
            <div className={`${styles.right}`}>
                {filteredProject.map((project, index) => (
                    <Link 
                    to={`${project.id}`}
                    className={styles.linkProject}
                    >
                        <Work 
                            key={index}
                            title={project.title}
                            type={project.theme}
                            date={project.date}
                            link={project.link}
                            imageProjectSrc={project.image}
                            logoProjectSrc={project.logo}
                        />
                    </Link> 
                ))}   
            </div>
        </div>
    )
}

export default MainPortfolio


