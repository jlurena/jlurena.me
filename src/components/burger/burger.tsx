import { FC } from 'react'
import styles from './burger.module.scss'

interface BurgerProps {
  onClick: React.MouseEventHandler<HTMLButtonElement>
  onBlur: React.FocusEventHandler<HTMLButtonElement>
}

const Burger: FC<BurgerProps> = ({ onClick, onBlur }) => (
  <div className={styles.burgerContainer}>
    <button
      type='button'
      className={styles.burger}
      aria-label='Menu'
      onClick={onClick}
      onBlur={onBlur}
    >
      <div />
      <div />
      <div />
      <div />
    </button>
  </div>
)

export default Burger
