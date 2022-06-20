import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './nav.module.scss';

export const Icon = ({ ariaLabel, icon, onClick }) => (
  <button type="button" aria-label={ariaLabel} className={styles.tab} onClick={onClick}>
    <FontAwesomeIcon icon={icon} size="lg" />
  </button>
);

const Nav = ({
  isMobileNav, selectedTab, onTabClick, tabs,
}) => {
  const navOptions = Object.keys(tabs).map(k => (
    <div className={`${styles.tabWrapper} ${selectedTab === k ? styles.selected : ''}`} key={k}>
      <Icon ariaLabel={k} icon={tabs[k].icon} onClick={() => onTabClick(k)} />
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
};

export default Nav;
