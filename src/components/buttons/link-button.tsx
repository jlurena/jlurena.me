import { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './link-button.module.scss'

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

function LinkButton(props: LinkButtonProps) {
  return (
    <div className={styles.container}>
      <a {...props}>
        {props.children}
      </a>
    </div>
  )
}

export default LinkButton
