import React, { useEffect, useMemo, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';
import PropTypes from 'prop-types';
import jsyaml from 'js-yaml';
import styles from './resume.module.scss';
import { Button, LinkButton } from '../../buttons';
import resumeConfigFile from '../../../../configs/resume.yml';

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

function Resume({ showPrintButton = false }) {
  const [resumeConfigContent, setResumeConfigContent] = useState(null);
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('resumeOnly') === 'true') {
      document.body.setAttribute('data-resume-only', 'true');
    }
  }, []);

  useEffect(() => {
    fetch(resumeConfigFile)
      .then(content => content.text().then(c => setResumeConfigContent(c)));
  }, []);

  const resumeConfig = useMemo(() => jsyaml.load(resumeConfigContent));

  const printResumeURL = `${window.location.origin}/?resumeOnly=true`;
  return resumeConfig ? (
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
                    {resumeConfig.profile_summary}
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
                        Class of 2018
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
              {resumeConfig.experiences.map(experience => (
                <div className={styles.experience}>
                  <div className={styles.experienceContainer}>
                    <div className={styles.experienceName}><span>{experience.experience_name}</span></div>
                    <div className={styles.experienceHistoryContainer}>
                      {experience.experience_titles.map(titles => (
                        <div className={styles.experienceTitle}>
                          <span>{titles.title}</span>
                          <span>
                            {`${titles.start} - ${titles.end || 'Present'}`}
                          </span>
                        </div>
                      ))}
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
                      {experience.summary}
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
                      {experience.accomplishments.map(accomplishment => (
                        <li>
                          {accomplishment}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
                {resumeConfig.skills.map(skill => (
                  <li>
                    <span>{skill.name}</span>
                    {skill.examples && (
                    <ul>
                      {skill.examples.map(example => (
                        <li>{example}</li>
                      ))}
                    </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.resumeFooter}>
        {!showPrintButton && (
        <LinkButton anchorProps={{ 'aria-label': 'Open in new tab' }} url={printResumeURL}>
          <FontAwesomeIcon icon={faUpRightFromSquare} />
        </LinkButton>
        ) }

        {showPrintButton && <Button onClick={() => window.print()}>Print</Button>}
      </div>

    </div>
  ) : null;
}

Resume.propTypes = {
  showPrintButton: PropTypes.bool,
};

export default Resume;
