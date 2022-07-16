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
    <footer className={styles.container}>
      <NavButton icon={faGithub} ariaLabel="Github Profile" labelHelper="Github" direction="horizontal" />
      <NavButton icon={faLinkedin} ariaLabel="LinkedIn Profile" labelHelper="LinkedIn" direction="horizontal" />
      <NavButton icon={faMedium} ariaLabel="Medium Blog Profile" labelHelper="Medium" direction="horizontal" />
    </footer>
  );
}

export default Footer;
