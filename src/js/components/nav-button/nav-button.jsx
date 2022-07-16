import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './nav-button.module.scss';

function NavButton({ ariaLabel, icon, onClick }) {
  return (
    <button type="button" aria-label={ariaLabel} className={styles.tab} onClick={onClick}>
      <FontAwesomeIcon icon={icon} size="lg" />
    </button>
  );
}

NavButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  icon:      PropTypes.shape({
    icon: PropTypes.arrayOf(
      PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
      ]),
    ).isRequired,
    iconName: PropTypes.string.isRequired,
    prefix:   PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
