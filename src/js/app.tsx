import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faNewspaper,
  faMapMarkerAlt,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import Home from './home';
import styles from '../scss/app.module.scss';

const App: React.FC = () => {
  type Tabs = typeof Home;

  const tabs: { [key: string]: { icon: IconDefinition, tab: Tabs } } = {
    Home:       { icon: faHome, tab: Home },
    'About Me': { icon: faUser, tab: Home },
    Resume:     { icon: faFileAlt, tab: Home },
    Blog:       { icon: faNewspaper, tab: Home },
    Contact:    { icon: faMapMarkerAlt, tab: Home }
  };

  const [selectedTab, setSelectedTab] = useState('Home');
  const [isShowingMobileNav, showMobileNav] = useState(false);

  const TestContent: React.FC = () => <div>Hello</div>;

  const Content = tabs[selectedTab].tab || TestContent;

  const navOptions = 
    Object.keys(tabs).map(k => (
      <div className={`${styles.tab} ${selectedTab === k ? styles.selected : ''}`} key={k}>
        <button type="button" aria-label={k} className={styles.btn} onClick={() => setSelectedTab(k)}>
          <FontAwesomeIcon icon={tabs[k].icon} size="lg" />
        </button>
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
      <div className={styles.burgerContainer}>
        <button type="button" className={styles.burger} aria-label="Menu" onClick={() => showMobileNav(!isShowingMobileNav)}>
          <div />
          <div />
          <div />
          <div />
        </button>
      </div>
      <section className={styles.contentWrapper}>
        <div className={styles.content}>
          <Content />
        </div>
      </section>
      <div className={styles.mobileNavigationContainer} style={{display: isShowingMobileNav ? 'block' : 'none'}}>
        {navOptions}
      </div>
    </>
  );
};

export default App;
