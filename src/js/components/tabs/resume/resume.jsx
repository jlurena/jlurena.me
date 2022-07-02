import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import styles from './resume.module.scss';

// Globe icon="fa-solid fa-globe"
function IconLink({ icon, url, linkText }) {
  return (
    <div className={styles.iconLinkContainer}>
      <FontAwesomeIcon icon={icon} />
      <a href={url} target="_blank" rel="noreferrer">{linkText}</a>
    </div>
  );
}

IconLink.propTypes = {
  icon:     PropTypes.string.isRequired,
  url:      PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
};

function Resume() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.resumeHeader}>
        <div className={styles.main}>
          <div className={styles.section}>
            <div className={styles.details}>
              <p className={styles.name}>Jean Luis Ureña</p>
              <div className={styles.contact}>
                <span>
                  <span>N</span>
                  <span>Y</span>
                  <span>C</span>
                </span>
                <span className={styles.separator}>·</span>
                <span>
                  <span>e</span>
                  <span>l</span>
                  <span>j</span>
                  <span>e</span>
                  <span>a</span>
                  <span>n</span>
                  <span>@</span>
                  <span>l</span>
                  <span>i</span>
                  <span>v</span>
                  <span>e</span>
                  <span>.</span>
                  <span>c</span>
                  <span>o</span>
                  <span>m</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.side} />
      </div>
      <div className={styles.resumeBody}>
        <div className={styles.main}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span>P</span>
              <span>R</span>
              <span>O</span>
              <span>F</span>
              <span>I</span>
              <span>L</span>
              <span>E</span>
            </div>
            <div className={styles.content}>
              <div className={styles.experience}>
                <div className={styles.experienceDescription}>
                  <p className={styles.experienceSummary}>
                    I focus on designing and implementing smart and scalable solutions with meaningful experiences for the
                    end users.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span>E</span>
              <span>D</span>
              <span>U</span>
              <span>C</span>
              <span>A</span>
              <span>T</span>
              <span>I</span>
              <span>O</span>
              <span>N</span>
            </div>
            <div className={styles.content}>
              <div className={styles.experience}>
                <div className={styles.experienceContainer}>
                  <div className={styles.experienceName}><span>Rochester Institute of Technology</span></div>
                  <div className={styles.experienceHistoryContainer}>
                    <div className={styles.experienceTitle}>
                      <span>B.S in Computer Science</span>

                      <span>
                        August 2015 - December 2018
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span>E</span>
              <span>X</span>
              <span>P</span>
              <span>E</span>
              <span>R</span>
              <span>I</span>
              <span>E</span>
              <span>N</span>
              <span>C</span>
              <span>E</span>
            </div>
            <div className={styles.content}>
              <div className={styles.experience}>
                <div className={styles.experienceContainer}>
                  <div className={styles.experienceName}><span>Teladoc Health</span></div>
                  <div className={styles.experienceHistoryContainer}>
                    <div className={styles.experienceTitle}>
                      <span>Senior Software Engineer</span>
                      <span>
                        March 2021 - Present
                      </span>

                    </div>
                    <div className={styles.experienceTitle}>
                      <span>Software Engineer</span>
                      <span>
                        March
                        2020 - March 2021
                      </span>

                    </div>
                    <div className={styles.experienceTitle}>
                      <span>Associate Software Engineer</span>

                      <span>December 2018 - March 2020</span>
                    </div>
                    <div className={styles.experienceTitle}>
                      <span>Software Engineer (Contract)</span>

                      <span>
                        January 2018 - December 2018
                      </span>

                    </div>
                  </div>
                </div>
                <div className={styles.experienceDescription}>
                  <span className={styles.experienceHeader}>
                    <span>O</span>
                    <span>v</span>
                    <span>e</span>
                    <span>r</span>
                    <span>v</span>
                    <span>i</span>
                    <span>e</span>
                    <span>w</span>
                  </span>
                  <p className={styles.experienceSummary}>
                    Work with a very diverse stack consisting of tech including Ruby on Rails, React.js, MySQL
                    and GraphQL to demonstrate and document software solutions based on user stories,
                    changes and information needed.
                  </p>
                  <span className={styles.experienceHeader}>
                    <span>M</span>
                    <span>a</span>
                    <span>j</span>
                    <span>o</span>
                    <span>r</span>
                    <span>&nbsp;</span>
                    <span>A</span>
                    <span>c</span>
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>p</span>
                    <span>l</span>
                    <span>i</span>
                    <span>s</span>
                    <span>h</span>
                    <span>m</span>
                    <span>e</span>
                    <span>n</span>
                    <span>t</span>
                    <span>s</span>
                  </span>
                  <ul className={styles.accomplishmentList}>
                    <li>
                      Facilitated major improvements to one of our major codebase that reduced the boilerplate code
                      necessary
                      to service newly acquired clients.
                      This resulted in reduced development time from 2-3 months to 1-2 months, thus servicing
                      new clients up to two months faster.
                    </li>
                    <li>
                      Lead a team of both in-house and off-shore engineers in a succesful effort to modernize our Member
                      web application and making it mobile responsive. This lead to an overall usage
                      increase by over 10% and reduced drop-offs by 15%
                      (*in users accessing our services through a mobile web browser).
                    </li>
                    <li>
                      Designed and lead an effort in implementing a scalable and configurable solution that allows
                      software engineering teams to easily create &quot;branded&quot; Telemedicine services.
                      This helped deliver client deliverables weeks, if not months, faster.
                    </li>
                    <li>
                      Enhanced video conference experience and video conference logging. Ultimately, this helped
                      decrease canceled visits due to technical issues by over 10% and increased our confidence on
                      detecting and ease to debug/fix future production issues involving video conferences.
                    </li>
                    <li>
                      Spearheaded WCAG initiative to help make the member website accessible to all users irrespective
                      of disability. With this work we were awarded a
                      WCAG compliance certification with an overall score of 9/10.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.side}>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span>L</span>
              <span>I</span>
              <span>N</span>
              <span>K</span>
              <span>S</span>
            </div>
            <div className={styles.linksContainer}>
              <IconLink
                icon={faGlobe}
                url="https://jlurena.me"
                linkText="jlurena.me"
              />
              <IconLink
                icon={faGithub}
                url="https://github.com/jlurena"
                linkText="github.com/jlurena"
              />
              <IconLink
                icon={faMedium}
                url="https://medium.com/@jlurena123"
                linkText="medium.com/@jlurena123"
              />
            </div>
          </div>
          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <span>S</span>
              <span>K</span>
              <span>I</span>
              <span>L</span>
              <span>L</span>
              <span>S</span>
            </div>
            <div className={styles.skillsContainer}>
              <ul className={styles.skillsList}>
                <li>
                  <span>Object Oriented Programming</span>
                  <ul>
                    <li>Java</li>
                    <li>Javascript</li>
                    <li>Ruby</li>
                    <li>Scala</li>
                  </ul>
                </li>
                <li>
                  <span>Libraries & Frameworks</span>
                  <ul>
                    <li>Android Studios</li>
                    <li>Node.js</li>
                    <li>Play Framework</li>
                    <li>React.js</li>
                    <li>Ruby on Rails</li>
                  </ul>
                </li>
                <li>
                  <span>DevOps & Infrastructure</span>
                  <ul>
                    <li>AWS</li>
                    <li>Azure</li>
                    <li>Jenkins</li>
                    <li>Linux/Unix</li>
                    <li>Shell Scripting</li>
                  </ul>
                </li>
                <li>Project Management & Delivery</li>
                <li>Fluent in Spanish</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
