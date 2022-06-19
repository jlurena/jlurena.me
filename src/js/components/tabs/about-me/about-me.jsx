import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPaperPlane, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import Header from '../../header';
import styles from './about-me.module.scss';
import '../../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import HikingImage from '../../../../images/jean/carousel/hiking.jpeg';

const ContactInformationRow = ({ icon, label, text }) => (
  <div className={styles.contactInformationContainer}>
    <div className={styles.contactLabel}>
      <FontAwesomeIcon icon={icon} size="lg" />
      <span>{label}</span>
    </div>

    <span>{text}</span>
  </div>
);

ContactInformationRow.propTypes = {
  label: PropTypes.string.isRequired,
  text:  PropTypes.string.isRequired
};

const AboutMe = () => (
  <div className={styles.wrapper}>
    <Header icon={faUser} headerText="ABOUT" headerStrongText="ME" fontSize="1.5rem" />
    <div className={styles.container}>
      <Header headerLevel="2" headerText="HEY! NICE TO MEET YOU, I'M" headerStrongText="JEAN" fontSize="18px" />
      <div className={styles.aboutMeWrapper}>
        <div className={styles.containerSection}>
          <ContactInformationRow
            icon={faUser}
            label="Name"
            text="Jean Luis Urena"
          />
          <ContactInformationRow
            icon={faPaperPlane}
            label="Email"
            text="eljean@live.com"
          />
          <ContactInformationRow
            icon={faMapMarkerAlt}
            label="Address"
            text="NYC"
          />
        </div>

        <div className={styles.containerSection}>
          <ImageGallery items={[{ original: HikingImage }]} />
        </div>
      </div>

    </div>

  </div>
);

export default AboutMe;
