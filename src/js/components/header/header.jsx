import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.scss';

function Header({
  headerLevel,
  icon,
  headerText,
  headerStrongText,
  fontSize,
}) {
  return (
    <div className={styles.container} style={{ fontSize }}>
      {icon && <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" /> }
      <h1 className={`${styles.header} ${styles[`level${headerLevel}`] || ''}`}>
        {headerText}
        {headerStrongText
      && (
      <span className={styles.strong}>
        {` ${headerStrongText}`}
      </span>
      )}
      </h1>
    </div>
  );
}

Header.propTypes = {
  headerLevel: PropTypes.string,
  icon:        PropTypes.shape({
    icon: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
      ]),
    ).isRequired,
    iconName: PropTypes.string.isRequired,
    prefix:   PropTypes.string,
  }),
  headerText:       PropTypes.string.isRequired,
  headerStrongText: PropTypes.string,
  fontSize:         PropTypes.string.isRequired,
};
export default Header;
