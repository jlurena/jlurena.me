import React from 'react';

import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './nav-button.module.scss';

function NavButton({
  ariaLabel,
  direction,
  icon,
  labelHelper,
  onClick,
  permanentSelect = false,
}) {
  return (
    <div className={`${styles.tabWrapper} ${styles[direction]} ${permanentSelect && styles.selected}`}>
      <div className={styles.buttonContainer}>
        <button type="button" aria-label={ariaLabel} className={styles.tab} onClick={onClick}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </button>
        <span className={styles.helperLabel}>{labelHelper}</span>
      </div>
    </div>
  );
}

NavButton.propTypes = {
  ariaLabel: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['horizontal']),
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
  labelHelper:     PropTypes.string.isRequired,
  onClick:         PropTypes.func.isRequired,
  permanentSelect: PropTypes.bool,

};

export default NavButton;
