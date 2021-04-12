import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tab-header.module.scss';

const TabHeader = ({ icon }) => {
  const a = 1;
  return (
    <div className={styles.container}>
      <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" />
      <h2 className={styles.header}>
        About
        <span className={styles.strong}> Me</span>
      </h2>
    </div>
  );
};

export default TabHeader;
