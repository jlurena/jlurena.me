import React from 'react'
import styles from './nav.module.scss'
import NavButton from '../nav-button'

function Nav ({
  isMobileNavOpen, selectedTab, handleOnTabClick, tabs
}) {
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
      <div className={styles.navigationContainer}>
        <div className={styles.navigationSlider}>
          {navOptions}
        </div>
      </div>
      <div
        className={`${styles.mobileNavigationContainer} ${isMobileNavOpen && styles.open}`}
      >
        {navOptions}
      </div>
    </>
  )
}

export default Nav
