import React from 'react'
import styles from './nav.module.scss'
import NavButton from '../nav-button'
import type { NavProps } from './nav.d'

const Nav: React.FC<NavProps> = ({
  isMobileNavOpen,
  selectedTab,
  handleOnTabClick,
  tabs
}) => {
  const navOptions = Object.keys(tabs).map(k => (
    <NavButton
      ariaLabel={k}
      icon={tabs[k].icon}
      onClick={() => handleOnTabClick(k)}
      key={k}
      labelHelper={k}
      permanentSelect={k === selectedTab}
    />
  ))

  return (
    <>
      <div 
        className={styles.navigationContainer}
        role="navigation"
      >
        <div className={styles.navigationSlider}>
          {navOptions}
        </div>
      </div>
      <div
        className={`${styles.mobileNavigationContainer} ${isMobileNavOpen && styles.open}`}
        role="navigation"
        aria-hidden={!isMobileNavOpen}
      >
        {isMobileNavOpen && navOptions}
      </div>
    </>
  )
}

export default Nav
