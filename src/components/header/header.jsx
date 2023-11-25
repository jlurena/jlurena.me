import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './header.module.scss'

function Header ({
  headerLevel,
  icon,
  headerText,
  headerStrongText,
  fontSize
}) {
  return (
    <div className={styles.container} style={{ fontSize }}>
      {icon && <FontAwesomeIcon className={styles.icon} icon={icon} size='lg' />}
      <h1 className={`${styles.header} ${styles[`level${headerLevel}`]}`}>
        {headerText}
        {headerStrongText &&
      (
        <span className={styles.strong}>
          {` ${headerStrongText}`}
        </span>
      )}
      </h1>
    </div>
  )
}

export default Header
