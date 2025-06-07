import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  className?: string
}

function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      type="button"
      {...props}
      className={`${className} ${styles.btn}`}
    >
      {children}
    </button>
  )
}

export default Button
