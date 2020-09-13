import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import styles from '../../scss/components/nav.module.scss';

type IconProps = {
  ariaLabel: string,
  icon: IconDefinition,
  onClick: () => void
};

export const Icon: React.FC<IconProps> = ({ ariaLabel, icon, onClick }) => (
  <button type="button" aria-label={ariaLabel} className={styles.tab} onClick={onClick}>
    <FontAwesomeIcon icon={icon} size="lg" />
  </button>
);

export declare type NavProps = {
  isMobileNav: boolean,
  onTabClick: (tab: string) => void,
  selectedTab: string,
  tabs: { [key: string]: { icon: IconDefinition, tab: React.FC } }
};

const Nav: React.FC<NavProps> = ({
  isMobileNav, selectedTab, onTabClick, tabs
}) => {
  const navOptions = Object.keys(tabs).map(k => (
    <div className={`${styles.tabWrapper} ${selectedTab === k ? styles.selected : ''}`} key={k}>
      <Icon ariaLabel={k} icon={tabs[k].icon} onClick={() => onTabClick(k)} />
      <em>{k}</em>
    </div>
  ));

  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationSlider}>
          {navOptions}
        </div>
      </div>
      <div className={styles.mobileNavigationContainer} style={{ display: isMobileNav ? 'block' : 'none' }}>
        {navOptions}
      </div>
    </>
  );
};

export default Nav;
