import React from 'react';

import styles from './burger.module.scss';

const Burger = ({ onClick }) => (
  <div className={styles.burgerContainer}>
    <button type="button" className={styles.burger} aria-label="Menu" onClick={onClick}>
      <div />
      <div />
      <div />
      <div />
    </button>
  </div>
);

export default Burger;
