import React, { useState } from 'react';
import {
  faFileAlt,
  faNewspaper,
  faMapMarkerAlt,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import Burger from './components/burger';
import Nav, { NavProps } from './components/nav';
import Home from './home';

import styles from '../scss/app.module.scss';

const App: React.FC = () => {
  const tabs: NavProps['tabs'] = {
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
