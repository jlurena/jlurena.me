import React from 'react'

import PropTypes from 'prop-types'

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

Nav.propTypes = {
  isMobileNavOpen: PropTypes.bool.isRequired,
  selectedTab: PropTypes.string.isRequired,
  handleOnTabClick: PropTypes.func.isRequired,
  tabs: PropTypes.objectOf(PropTypes.shape({
    icon: PropTypes.shape({
      icon: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
        ])
      ).isRequired,
      iconName: PropTypes.string.isRequired,
      prefix: PropTypes.string
    }).isRequired,
    tab: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired
  }))
}

export default Nav
