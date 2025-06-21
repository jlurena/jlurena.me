import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGlobe,
  faUpRightFromSquare
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faMedium
} from '@fortawesome/free-brands-svg-icons'
import resumeConfig from '../../../configs/resume.json'
import styles from './resume.module.scss'
import { Button, LinkButton } from '../../buttons'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import type { ResumeProps } from './resume.d'

type ExperienceTitle = {
  title: string
  start: string
  end?: string
}

type Experience = {
  experience_name: string
  experience_titles: ExperienceTitle[]
  summary: string
  accomplishments?: string[]
}

type Skill = {
  name: string
  examples?: string[]
}

type ResumeConfig = {
  profile_summary: string
  experiences: Experience[]
  skills: Skill[]
}

type IconLinkProps = {
  icon: IconProp
  url: string
  linkText: string
}

const IconLink: React.FC<IconLinkProps> = ({ icon, url, linkText }) => {
  return (
    <div className={styles.iconLinkContainer}>
      <FontAwesomeIcon icon={icon} />
      <a href={url} target='_blank' rel='noreferrer'>{linkText}</a>
    </div>
  )
}

const Resume: React.FC<ResumeProps> = ({ showPrintButton = false }) => {
  useEffect(() => {
    if (new URLSearchParams(window.location.search).get('resumeOnly') === 'true') {
      document.body.setAttribute('data-resume-only', 'true')
    }
  }, [])

  // Type assertion for imported JSON
  const config = resumeConfig as ResumeConfig

  const printResumeURL = `${window.location.origin}/?resumeOnly=true`
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
              <div className={styles.sectionHeader} role='heading' aria-level={2} aria-label='PROFILE'>
                <span aria-hidden="true">P</span>
                <span aria-hidden="true">R</span>
                <span aria-hidden="true">O</span>
                <span aria-hidden="true">F</span>
                <span aria-hidden="true">I</span>
                <span aria-hidden="true">L</span>
                <span aria-hidden="true">E</span>
              </div>
              <div className={styles.content}>
                <div className={styles.experience}>
                  <div className={styles.experienceDescription}>
                    <p className={styles.experienceSummary}>
                      {config.profile_summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionHeader} role='heading' aria-level={2} aria-label='EDUCATION'>
                <span aria-hidden="true">E</span>
                <span aria-hidden="true">D</span>
                <span aria-hidden="true">U</span>
                <span aria-hidden="true">C</span>
                <span aria-hidden="true">A</span>
                <span aria-hidden="true">T</span>
                <span aria-hidden="true">I</span>
                <span aria-hidden="true">O</span>
                <span aria-hidden="true">N</span>
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
              <div className={styles.sectionHeader} role='heading' aria-level={2} aria-label='EXPERIENCE'>
                <span aria-hidden="true">E</span>
                <span aria-hidden="true">X</span>
                <span aria-hidden="true">P</span>
                <span aria-hidden="true">E</span>
                <span aria-hidden="true">R</span>
                <span aria-hidden="true">I</span>
                <span aria-hidden="true">E</span>
                <span aria-hidden="true">N</span>
                <span aria-hidden="true">C</span>
                <span aria-hidden="true">E</span>
              </div>
              <div className={styles.content}>
                {config.experiences.map(experience => (
                  <div className={styles.experience} key={experience.experience_name}>
                    <div className={styles.experienceContainer}>
                      <div className={styles.experienceName}><span>{experience.experience_name}</span></div>
                      <div className={styles.experienceHistoryContainer}>
                        {experience.experience_titles.map(titles => (
                          <div className={styles.experienceTitle} key={titles.title}>
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
                      {
                        experience.accomplishments &&
                        (
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
                        )
                      }
                      {
                        experience.accomplishments &&
                        (
                          <ul className={styles.accomplishmentList}>
                            {experience.accomplishments.map(accomplishment => (
                              <li key={accomplishment.substring(0, 32)}>
                                {accomplishment}
                              </li>
                            ))}
                          </ul>
                        )
                      }
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.side}>
            <div className={styles.section}>
              <div className={styles.sectionHeader} role='heading' aria-level={2} aria-label='LINKS'>
                <span aria-hidden="true">L</span>
                <span aria-hidden="true">I</span>
                <span aria-hidden="true">N</span>
                <span aria-hidden="true">K</span>
                <span aria-hidden="true">S</span>
              </div>
              <div className={styles.linksContainer}>
                <IconLink
                  icon={faGlobe}
                  url='https://jlurena.me'
                  linkText='jlurena.me'
                />
                <IconLink
                  icon={faGithub}
                  url='https://github.com/jlurena'
                  linkText='github.com/jlurena'
                />
                <IconLink
                  icon={faMedium}
                  url='https://medium.com/@jlurena123'
                  linkText='medium.com/@jlurena123'
                />
              </div>
            </div>
            <div className={styles.section}>
              <div className={styles.sectionHeader} role='heading' aria-level={2} aria-label='SKILLS'>
                <span aria-hidden="true">S</span>
                <span aria-hidden="true">K</span>
                <span aria-hidden="true">I</span>
                <span aria-hidden="true">L</span>
                <span aria-hidden="true">L</span>
                <span aria-hidden="true">S</span>
              </div>
              <div className={styles.skillsContainer}>
                <ul className={styles.skillsList}>
                  {config.skills.map(skill => (
                    <li key={skill.name}>
                      <span>{skill.name}</span>
                      {skill.examples && (
                        <ul>
                          {skill.examples.map(example => (
                            <li key={example}>{example}</li>
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
            <LinkButton aria-label='Open in new tab' href={printResumeURL} target='_blank'>
              <FontAwesomeIcon icon={faUpRightFromSquare} />
            </LinkButton>
          )}

          {showPrintButton && <Button onClick={() => window.print()}>Print</Button>}
        </div>

      </div>)
}

export default Resume
