import React from 'react';
import styles from './backdrop.module.scss';

const Backdrop = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <div 
        className={`${styles.bounceIn} ${styles.container}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Backdrop;
