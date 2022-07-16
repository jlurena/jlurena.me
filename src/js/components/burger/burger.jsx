import React from 'react';
import PropTypes from 'prop-types';
import styles from './burger.module.scss';

function Burger({ onClick, onBlur }) {
  return (
    <div className={styles.burgerContainer}>
      <button type="button" className={styles.burger} aria-label="Menu" onClick={onClick} onBlur={onBlur}>
        <div />
        <div />
        <div />
        <div />
      </button>
    </div>
  );
}

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Burger;
