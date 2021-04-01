import React, { useEffect, useState } from 'react';
import {
  faFileAlt,
  faNewspaper,
  faMapMarkerAlt,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import Backdrop from './components/backdrop';

import Burger from './components/burger';
import Home from './components/tabs/home';
import Nav from './components/nav';
import AboutMe from './components/tabs/about-me';

import styles from './app.module.scss';

const App = () => {
  const tabs = {
    Home:       { icon: faHome, tab: Home, id: 0 },
    'About Me': { icon: faUser, tab: AboutMe, id: 1 },
    Resume:     { icon: faFileAlt, tab: Home, id: 2 },
    Blog:       { icon: faNewspaper, tab: Home, id: 3 },
    Contact:    { icon: faMapMarkerAlt, tab: Home, id: 4 }
  };

  const [previousTab, setPreviousTab] = useState('Home');
  const [selectedTab, setSelectedTab] = useState('Home');
  const [isShowingMobileNav, showMobileNav] = useState(false);


  const TestContent = () => <div>Hello</div>;

  const Content = tabs[selectedTab].tab || TestContent;
  const onNavClick = t => {
    setPreviousTab(selectedTab);
    setSelectedTab(t);
    if (isShowingMobileNav) showMobileNav(!isShowingMobileNav);
  }

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
        <div className={styles.content}>
          <Content />
        </div>
      </section>
    </>
  );
};

export default App;
