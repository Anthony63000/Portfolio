import React from 'react';
import styles from './filterBar.module.scss';

function Filter({ name,
   classLogo, 
   id, 
   handleFilterClick, 
   selectedCategory, 
   defaultFilter }) {
  return (
    <div
      id={id}
      className={`${defaultFilter} ${styles.filterContainer} ${selectedCategory === id ? styles.activeFilter : ''}`}
      onClick={() => handleFilterClick(id)}
    >
      <p className={styles.filter}>{name}</p>
      <i className={`${styles.filterLogo} ${classLogo}`}></i>
    </div>
  );
}

export default Filter;