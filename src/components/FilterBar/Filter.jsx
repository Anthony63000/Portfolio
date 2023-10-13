import React from 'react';
import styles from './filterBar.module.scss';
import { useTheme } from '../Context/ContextTheme';

function Filter({ name,
   classLogo, 
   id, 
   handleFilterClick, 
   selectedCategory, 
   defaultFilter }) {

    const { theme } = useTheme();

    let themeClass;
    if(theme === "light") {
      themeClass = styles.light
    } else {
      themeClass = styles.dark
    }

  return (
    <div
      id={id}
      className={`${themeClass} ${defaultFilter} ${styles.filterContainer} 
      ${selectedCategory === id ? styles.activeFilter : ''}`}
      onClick={() => handleFilterClick(id)}
    >
      <p className={`${styles.filter} ${themeClass}`}>{name}</p>
      <i className={`${styles.filterLogo} ${classLogo} ${themeClass}`}></i>
    </div>
  );
}

export default Filter;