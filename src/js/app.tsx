import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFileAlt,
  faNewspaper,
  faMapMarkerAlt,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Home from './home';
import styles from '../scss/app.module.scss';

const App = () => {
  const tabs = {
    Home:       [faHome, Home],
    'About Me': [faUser, null],
    Resume:     [faFileAlt, null],
    Blog:       [faNewspaper, null],
    Contact:    [faMapMarkerAlt, null]
  };
  const [selectedTab, setSelectedTab] = useState('Home');

  const TestContent = () => <div>Hello</div>;

  const Content = tabs[selectedTab][1] || TestContent;

  return (
    <>
      <div className={styles.navigationContainer}>
        <div className={styles.navigationSlider}>
          {Object.keys(tabs).map(k => (
            <div className={`${styles.tab} ${selectedTab === k ? styles.selected : ''}`} key={k}>
              <button type="button" aria-label={k} className={styles.btn} onClick={() => setSelectedTab(k)}>
                <FontAwesomeIcon icon={tabs[k][0]} />
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
