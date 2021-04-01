import React, { useEffect, useState } from 'react';
import {
  faFileAlt,
  faNewspaper,
  faMapMarkerAlt,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import Burger from './components/burger';
import Home from './components/tabs/home';
import Nav from './components/nav';
import AboutMe from './components/tabs/about-me';

import styles from './app.module.scss';

const App = () => {
  const tabs = {
    Home:       { icon: faHome, tab: Home },
    'About Me': { icon: faUser, tab: AboutMe },
    Resume:     { icon: faFileAlt, tab: Home },
    Blog:       { icon: faNewspaper, tab: Home },
    Contact:    { icon: faMapMarkerAlt, tab: Home }
  };

  const [selectedTab, setSelectedTab] = useState('Home');
  const [isShowingMobileNav, showMobileNav] = useState(false);


  const TestContent = () => <div>Hello</div>;

  const Content = tabs[selectedTab].tab || TestContent;

  return (
    <>
      <Burger onClick={() => showMobileNav(!isShowingMobileNav)} />
      <Nav
        isMobileNav={isShowingMobileNav}
        onTabClick={t => setSelectedTab(t)}
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
