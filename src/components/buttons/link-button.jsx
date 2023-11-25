import React from 'react'
import styles from './link-button.module.scss'

function LinkButton (props) {
  return (
    <div className={styles.container}>
      <a {...props}>
        {props.children}
      </a>
    </div>
  )
}

export default LinkButton
