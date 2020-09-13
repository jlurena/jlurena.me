import React from 'react';

import styles from '../../scss/components/burger.module.scss';

type BurgerProps = {
  onClick: () => void
};

const Burger: React.FC<BurgerProps> = ({ onClick }) => (
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
