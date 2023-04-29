import React from 'react';
import {
  faGithub,
  faLinkedin,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import NavButton from '../nav-button';
import styles from './footer.module.scss';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.container}>
        <NavButton
          icon={faGithub}
          ariaLabel="Github Profile"
          labelHelper="Github"
          direction="horizontal"
          onClick={() => window.open('https://github.com/jlurena', '_blank')}
        />
        <NavButton
          icon={faLinkedin}
          ariaLabel="LinkedIn Profile"
          labelHelper="LinkedIn"
          direction="horizontal"
          onClick={() => window.open('https://linkedin.com/in/jlurena', '_blank')}
        />
        <NavButton
          icon={faMedium}
          ariaLabel="Medium Blog Profile"
          labelHelper="Medium"
          direction="horizontal"
          onClick={() => window.open('https://medium.com/@jlurena123', '_blank')}
        />
      </footer>
    </div>
  );
}

export default Footer;
