import React from 'react';
import PropTypes from 'prop-types';
import styles from './backdrop.module.scss';

const Backdrop = ({ children, animation, ...rest }) => (
  <div className={styles.wrapper}>
    <div
      className={`${styles.animated} ${styles[animation]}`}
      {...rest}
    >
      {children}
    </div>
  </div>
);

Backdrop.propTypes = {
  animation: PropTypes.oneOf(['bounceIn']).isRequired,
  children:  PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};
export default Backdrop;
