import React from 'react';

import PropTypes from 'prop-types';

import styles from './nav.module.scss';
import NavButton from '../nav-button';

function Nav({
  isMobileNav, selectedTab, onTabClick, tabs,
}) {
  const navOptions = Object.keys(tabs).map(k => (
    <div className={`${styles.tabWrapper} ${selectedTab === k ? styles.selected : ''}`} key={k}>
      <NavButton ariaLabel={k} icon={tabs[k].icon} onClick={() => onTabClick(k)} />
      <em className={styles.helperLabel}>{k}</em>
    </div>
  ));

  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationSlider}>
          {navOptions}
        </div>
      </div>
      <div
        className={styles.mobileNavigationContainer}
        style={
          {
            visibility: isMobileNav ? 'visible' : 'hidden',
            opacity:    isMobileNav ? '100' : '0',
          }
}
      >
        {navOptions}
      </div>
    </>
  );
}

Nav.propTypes = {
  isMobileNav: PropTypes.bool.isRequired,
  selectedTab: PropTypes.string.isRequired,
  onTabClick:  PropTypes.func.isRequired,
  tabs:        PropTypes.objectOf(PropTypes.shape({
    icon: PropTypes.shape({
      icon: PropTypes.arrayOf(
        PropTypes.oneOfType([
          PropTypes.number,
          PropTypes.string,
          PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
        ]),
      ).isRequired,
      iconName: PropTypes.string.isRequired,
      prefix:   PropTypes.string,
    }).isRequired,
    tab: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  })),
};

export default Nav;
