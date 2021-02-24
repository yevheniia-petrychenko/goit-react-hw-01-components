import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

function getRandomColor() {
  const r = function () {
    return Math.floor(Math.random() * 256);
  };
  return 'rgb(' + r() + ',' + r() + ',' + r() + ')';
}

const Statistics = ({ stats }) => (
  <ul className={styles.statList}>
    {stats.map(data => (
      <li
        className={styles.item}
        key={data.id}
        style={{ backgroundColor: getRandomColor() }}
      >
        <span className="label">{data.label}</span>
        <span className="percentage">{data.percentage}</span>
      </li>
    ))}
  </ul>
);

export default Statistics;

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
