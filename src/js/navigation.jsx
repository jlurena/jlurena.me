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
import '../scss/navigation.scss';

const Navigation = () => {
  const tabs = {
    Home:       [faHome, Home],
    'About Me': [faUser, Home],
    Resume:     [faFileAlt, Home],
    Blog:       [faNewspaper, Home],
    Contact:    [faMapMarkerAlt, Home]
  };
  const [selectedTab, setSelectedTab] = useState('Home');

  const Content = tabs[selectedTab][1];

  return (
    <>
      <div id="navigation" className="navigation">
        <div className="slider-navigation">
          {Object.keys(tabs).map(k => (
            <div className={`tab ${selectedTab === k ? 'selected' : ''}`} key={k}>
              <button type="button" onClick={() => setSelectedTab(k)}>
                <FontAwesomeIcon icon={tabs[k][0]} />
              </button>
              <em>{k}</em>
            </div>
          ))}
        </div>
      </div>
      <div className="icon-mobile-wrapper">
        <div className="icon-mobile">
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
      <section className="content-wrapper">
        <Content />
      </section>
    </>
  );
};

export default Navigation;
