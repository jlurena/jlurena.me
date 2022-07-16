import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

function Button(props) {
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

Button.propTypes = {
  children:  PropTypes.node,
  className: PropTypes.string,
};

export default Button;
