import React from 'react'
import styles from './burger.module.scss'

function Burger ({ onClick, onBlur }) {
  return (
    <div className={styles.burgerContainer}>
      <button type='button' className={styles.burger} aria-label='Menu' onClick={onClick} onBlur={onBlur}>
        <div />
        <div />
        <div />
        <div />
      </button>
    </div>
  )
}

export default Burger
