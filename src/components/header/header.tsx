import React, { JSX } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import styles from './header.module.scss'

interface HeaderProps {
  headerLevel: string | number
  icon?: IconProp
  headerText: string
  headerStrongText?: string
  fontSize?: string | number
}

const Header: React.FC<HeaderProps> = ({
  headerLevel,
  icon,
  headerText,
  headerStrongText,
  fontSize
}) => {
  const HeadingTag = `h${headerLevel}` as keyof JSX.IntrinsicElements

  return (
    <div className={styles.container} style={{ fontSize }}>
      {icon && <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" />}
      <HeadingTag className={`${styles.header} ${styles[`level${headerLevel}`]}`}>
        {headerText}
        {headerStrongText && (
          <span className={styles.strong}>
            {` ${headerStrongText}`}
          </span>
        )}
      </HeadingTag>
    </div>
  )
}

export default Header
