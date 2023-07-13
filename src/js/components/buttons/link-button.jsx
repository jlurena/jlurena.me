import React from 'react'
import styles from './link-button.module.scss'

function LinkButton ({
  anchorProps, children, target = '_blank', url
}) {
  return (
    <div className={styles.container}>
      <a
        {...anchorProps}
        target={target}
        href={url}
        rel='noreferrer'
      >
        {children}
      </a>
    </div>
  )
}

export default LinkButton
