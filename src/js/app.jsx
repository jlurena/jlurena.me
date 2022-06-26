import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import {
  faFileAlt,
  faNewspaper,
  faMapMarkerAlt,
  faHome,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

import Burger from './components/burger';
import Home from './components/tabs/home';
import Nav from './components/nav';
import AboutMe from './components/tabs/about-me';

import styles from './app.module.scss';

function App() {
  const tabs = {
    Home:       { icon: faHome, tab: Home, id: 0 },
    'About Me': { icon: faUser, tab: AboutMe, id: 1 },
    Resume:     { icon: faFileAlt, tab: Home, id: 2 },
    Blog:       { icon: faNewspaper, tab: Home, id: 3 },
    Contact:    { icon: faMapMarkerAlt, tab: Home, id: 4 },
  };

  const [selectedTab, setSelectedTab] = useState('Home');
  const [isShowingMobileNav, showMobileNav] = useState(false);
  // const [direction, setClickDirection] = useState(1);z

  const Content = tabs[selectedTab].tab;
  const onNavClick = t => {
    // const inferencedDirection = tabs[selectedTab].id > tabs[t].id ? -1 : 1;
    // setClickDirection(inferencedDirection);
    setSelectedTab(t);
    if (isShowingMobileNav) showMobileNav(!isShowingMobileNav);
  };

  return (
    <>
      <Burger onClick={() => showMobileNav(!isShowingMobileNav)} />
      <Nav
        isMobileNav={isShowingMobileNav}
        onTabClick={onNavClick}
        selectedTab={selectedTab}
        tabs={tabs}
      />
      <section className={styles.contentWrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <Content />
          </div>
        </div>
      </section>
    </>
  );
}

export default hot(module)(App);
