import React, { useState, useEffect, useMemo } from 'react';
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
  const [resumeOnlyMode, setResumeOnlyMode] = useState(false);

  useEffect(() => {
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    setResumeOnlyMode(!!params.get('resumeOnly'));
  }, [resumeOnlyMode]);

  const tabs = useMemo(() => (
    {
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
        icon: faNewspaper, tab: () => window.open('https://medium.com/@jlurena123', '_blank'), type: FUNCTION_TYPE,
      },
      Contact: {
        icon: faMapMarkerAlt, tab: Home, type: CONTENT_TYPE,
      },
    }
  ));

  const [selectedTab, setSelectedTab] = useState('Home');
  const [isShowingMobileNav, showMobileNav] = useState(false);

  const Content = tabs[selectedTab].tab;
  const onNavClick = t => {
    if (tabs[t].type === CONTENT_TYPE) setSelectedTab(t);
    if (tabs[t].type === FUNCTION_TYPE) tabs[t].tab();
    if (isShowingMobileNav) showMobileNav(!isShowingMobileNav);
  };

  if (resumeOnlyMode) {
    return <Resume showPrintButton />;
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
        <div className={styles.container}>
          <div className={styles.content}>
            <Content changeTabFunc={onNavClick} />
          </div>
        </div>
      </section>
    </>
  );
}

export default hot(module)(App);
