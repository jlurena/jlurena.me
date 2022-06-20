import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCar,
  faCocktail,
  faCode,
  faCoffee,
  faDesktop,
  faGamepad,
  faGlasses,
  faHiking,
  faPlane,
  faUser,
  faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import ImageGallery from 'react-image-gallery';
import Header from '../../header';
import styles from './about-me.module.scss';
import '../../../../../node_modules/react-image-gallery/styles/scss/image-gallery.scss';
import HikingImage from '../../../../images/jean/carousel/hiking.jpeg';

const IMAGES = [
  {
    original:      HikingImage,
    originalClass: styles.carouselImages,
    originalAlt:   'Jean Hiking next a mountain that with craters forming a smiling face',
    description:   'I also enjoy hiking!'
  }
];

const HOBBIES = [
  { icon: faCar, text: 'Cars' },
  { icon: faCocktail, text: 'Lounges & Bars' },
  { icon: faCode, text: 'Code' },
  { icon: faCoffee, text: 'Cafes & Brunch' },
  { icon: faDesktop, text: 'Tech' },
  { icon: faGamepad, text: 'Video Games' },
  { icon: faHiking, text: 'Hiking' },
  { icon: faPlane, text: 'Travel' },
  { icon: faUtensils, text: 'Eating Out' },
];

const AboutMe = () => (
  <div className={styles.wrapper}>
    <Header icon={faUser} headerText="ABOUT" headerStrongText="ME" fontSize="1.5rem" />
    <div className={styles.container}>
      <Header headerLevel="2" headerText="HEY! NICE TO MEET YOU, I'M" headerStrongText="JEAN" fontSize="18px" />
      <div className={styles.aboutMeWrapper}>
        <div>
          <div className={styles.aboutMeSubSection}>
            <p>
              <b>Software Engineer</b>
              ,
              {' '}
              <b>Leader</b>
              ,
              {' '}
              <b>Student</b>
              ,
              {' '}
              <b>Teacher</b>
              {' '}
              are some adjectives that can be used to describe me.
              At the end of the day however, I am a simple tech nerd &nbsp;
              <FontAwesomeIcon icon={faGlasses} size="md" />
              &nbsp; that enjoys programming, learning new technologies, experimenting with tech and
              teaching others all I know!
            </p>
          </div>
          <div className={styles.aboutMeSubSection}>
            <Header headerLevel="2" headerText="HOBBIES & INTERESTS" fontSize="18px" />
            <p>
              Of course, I have many other
              {' '}
              <b>hobbies</b>
              {' '}
              and
              {' '}
              <b>interests</b>
              . Most notably though I&apos;m really into
            </p>
            <div className={styles.aboutMeHobbiesSection}>
              { HOBBIES.map(i => (
                <div className={styles.hobby}>
                  <FontAwesomeIcon icon={i.icon} size="lg" />
                  {i.text}
                </div>
              )) }
            </div>
          </div>
        </div>
        <div>
          <div>
            <ImageGallery
              items={IMAGES}
              autoPlay
              showPlayButton={false}
              showFullscreenButton={false}
              showBullets
            />
          </div>
        </div>

      </div>

    </div>

  </div>
);

export default AboutMe;
