import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './nav.module.scss';

export function Icon({ ariaLabel, icon, onClick }) {
  return (
    <button type="button" aria-label={ariaLabel} className={styles.tab} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </button>
  );
}

Icon.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  icon:      PropTypes.shape({
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
  onClick: PropTypes.func.isRequired,

};

function Nav({
  isMobileNav, selectedTab, onTabClick, tabs,
}) {
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
    id:  PropTypes.number.isRequired,
  })),
};

export default Nav;
