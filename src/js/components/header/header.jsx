import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.scss';

const Header = ({
  headerLevel = '1',
  icon,
  headerText,
  headerStrongText,
  fontSize
}) => (
  <div className={styles.container} style={{ fontSize }}>
    {icon && <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" /> }
    <h1 className={`${styles.header} ${styles[`level${headerLevel}`] || ''}`}>
      {headerText}
      <span className={styles.strong}>
        {` ${headerStrongText}`}
      </span>
    </h1>
  </div>
);

Header.propTypes = {
  headerLevel: PropTypes.string,
  icon:        PropTypes.shape({
    prefix: PropTypes.string,
    icon:   PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.string),
        PropTypes.string,
        PropTypes.number
      ])
    ),
    iconName: PropTypes.string
  }),
  headerText:       PropTypes.string.isRequired,
  headerStrongText: PropTypes.string.isRequired,
  fontSize:         PropTypes.string.isRequired
};
export default Header;
