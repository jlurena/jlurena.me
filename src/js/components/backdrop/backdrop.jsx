import React from 'react';
import styles from './backdrop.module.scss';

const Backdrop = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  );
}

export default Backdrop;
