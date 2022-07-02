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
import Resume from './components/tabs/resume';

import styles from './app.module.scss';

const CONTENT_TYPE = 'content';
const FUNCTION_TYPE = 'function';

function App() {
  const tabs = {
    Home: {
      icon: faHome, tab: Home, type: CONTENT_TYPE,
    },
    'About Me': {
      icon: faUser, tab: AboutMe, type: CONTENT_TYPE,
    },
    Resume: {
      icon: faFileAlt, tab: Resume, type: CONTENT_TYPE,
    },
    Blog: {
      icon: faNewspaper, tab: Home, type: FUNCTION_TYPE,
    },
    Contact: {
      icon: faMapMarkerAlt, tab: Home, type: CONTENT_TYPE,
    },
  };

  const [selectedTab, setSelectedTab] = useState('Home');
  const [isShowingMobileNav, showMobileNav] = useState(false);

  const Content = tabs[selectedTab].tab;
  const onNavClick = t => {
    if (tabs[t].type === CONTENT_TYPE) setSelectedTab(t);
    if (tabs[t].type === FUNCTION_TYPE) tabs[t].tab();
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
