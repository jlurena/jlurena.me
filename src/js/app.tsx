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

  const TestContent: React.FC = () => <div>Hello</div>;

  const Content = tabs[selectedTab].tab || TestContent;

  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationSlider}>
          {Object.keys(tabs).map(k => (
            <div className={`${styles.tab} ${selectedTab === k ? styles.selected : ''}`} key={k}>
              <button type="button" aria-label={k} className={styles.btn} onClick={() => setSelectedTab(k)}>
                <FontAwesomeIcon icon={tabs[k].icon} />
              </button>
              <em>{k}</em>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.mobileNavigation}>
        <button type="button" className={styles.burger} aria-label="Menu">
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
    </>
  );
};

export default App;
