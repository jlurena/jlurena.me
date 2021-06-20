import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tab-header.module.scss';

const TabHeader = ({ icon, header, headerStrong }) => (
  <div className={styles.container}>
    <FontAwesomeIcon className={styles.icon} icon={icon} size="lg" />
    <h2 className={styles.header}>
      {header}
      <span className={styles.strong}>
        {' '}
        {headerStrong}
      </span>
    </h2>
  </div>
);

TabHeader.propTypes = {
  icon: PropTypes.shape({
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
  header:       PropTypes.string.isRequired,
  headerStrong: PropTypes.string.isRequired
};
export default TabHeader;
