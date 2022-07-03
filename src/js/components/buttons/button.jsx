import React from 'react';
import styles from './button.module.scss';

export default function Button(props) {
  const { children, className } = props;
  return (
    // eslint-disable-next-line react/button-has-type
    <button
      {...props}
      className={`${className} ${styles.btn}`}
    >
      {children}
    </button>
  );
}
