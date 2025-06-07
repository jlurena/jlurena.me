import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './nav-button.module.scss'

interface NavButtonProps {
  ariaLabel: string
  direction?: string,
  icon: IconProp
  labelHelper: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
  permanentSelect?: boolean
}

const NavButton: React.FC<NavButtonProps> = ({
  ariaLabel,
  direction,
  icon,
  labelHelper,
  onClick,
  permanentSelect = false
}) => {
  return (
    <div className={`${styles.tabWrapper} ${direction ? styles[direction] : null} ${permanentSelect ? styles.selected : ''}`}>
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
