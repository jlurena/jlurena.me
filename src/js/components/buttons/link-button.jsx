import React from 'react';
import PropTypes from 'prop-types';
import styles from './link-button.module.scss';

function LinkButton({
  anchorProps, children, target = '_blank', url,
}) {
  return (
    <div className={styles.container}>
      <a
        {...anchorProps}
        target={target}
        href={url}
        rel="noreferrer"
      >
        {children}
      </a>
    </div>
  );
}

LinkButton.propTypes = {
  anchorProps: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.func])),
  target:      PropTypes.string,
  url:         PropTypes.string.isRequired,
  children:    PropTypes.node.isRequired,
};

export default LinkButton;
