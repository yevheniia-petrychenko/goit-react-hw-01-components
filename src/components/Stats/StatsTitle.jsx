import React from 'react';
import styles from './Stats.module.css';

const StatisticsTitle = ({ title, children }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    {children}
  </section>
);

export default StatisticsTitle;
