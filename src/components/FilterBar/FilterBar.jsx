import styles from "./filterBar.module.scss"

import { useState, useContext } from 'react';

import { languageContext } from "../Context/ContextLang";
import traduction from "../../assets/data/traduction";


import Filter from "./Filter"

function FilterBar( {onFilterChange} ) {

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleFilterClick = (category) => {
        setSelectedCategory(category);
        onFilterChange(category)
    };

    const classFolder = "fa-regular fa-folder";
    const classFolderSelected = "fa-solid fa-folder";
    const classHtmlCssLogo = "fa-solid fa-code";
    const classJavascript = "fa-brands fa-square-js";
    const classReact ="fa-brands fa-react";

    const { language } = useContext(languageContext)
    const useLanguage = traduction[language]

    return (
        <div 
            className={styles.container}
        >
            <div 
                className={styles.filterLogoContainer}
            >
                <p className={styles.textFilter}>{useLanguage.filterBarName}</p>
            </div> 
            <div 
                className={styles.barContainer}
            >
                <Filter 
                    name={useLanguage.filterBarAll}
                    classLogo={selectedCategory ? 
                    classFolder 
                    : classFolderSelected}
                    defaultFilter={!selectedCategory ? 
                    styles.activeFilter 
                    : ""}
                    selectedCategory={selectedCategory}
                    handleFilterClick={handleFilterClick}
                />
                <Filter 
                    name="Html / Css"
                    classLogo={classHtmlCssLogo}
                    id="HTML&CSS"
                    selectedCategory={selectedCategory}
                    handleFilterClick={handleFilterClick}
                />
                <Filter 
                    name="JavaScript"
                    classLogo={classJavascript}
                    id="Javascript"
                    selectedCategory={selectedCategory}
                    handleFilterClick={handleFilterClick}
                />
                <Filter 
                    name="React"
                    classLogo={classReact}
                    id="React"
                    selectedCategory={selectedCategory}
                    handleFilterClick={handleFilterClick}
                />
                </div>
        </div>
    )
}

export default FilterBar