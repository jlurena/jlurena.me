import React from 'react'
import styles from './button.module.scss'

function Button (props) {
  const { children, className } = props
  return (
    <button
      type='button'
      {...props}
      className={`${className} ${styles.btn}`}
    >
      {children}
    </button>
  )
}

export default Button
