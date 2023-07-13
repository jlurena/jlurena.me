import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './nav-button.module.scss'

function NavButton ({
  ariaLabel,
  direction,
  icon,
  labelHelper,
  onClick,
  permanentSelect = false
}) {
  return (
    <div className={`${styles.tabWrapper} ${styles[direction]} ${permanentSelect && styles.selected}`}>
      <div className={styles.buttonContainer}>
        <button type='button' aria-label={ariaLabel} className={styles.tab} onClick={onClick}>
          <FontAwesomeIcon icon={icon} size='lg' />
        </button>
        <span className={styles.helperLabel}>{labelHelper}</span>
      </div>
    </div>
  )
}

export default NavButton
