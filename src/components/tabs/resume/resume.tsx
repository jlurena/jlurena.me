import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import resumeConfig from '../../../configs/resume.json'
import styles from './resume.module.scss'
import { Button, LinkButton } from '../../buttons'
import type { ResumeProps } from './resume.d'

type ExperienceTitle = {
  title: string
  start: string
  end?: string
  summary?: string
  accomplishments?: string[]
}

type Experience = {
  experience_name: string
  experience_titles: ExperienceTitle[]
  experience_note?: string
  compact?: boolean
  summary?: string
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
      <header>
        <h1 className={styles.name}>Jean Luis Urena</h1>
        <p className={styles.contact}>
          New York, NY · eljean@live.com · <a href='https://jlurena.me'>jlurena.me</a> · <a href='https://github.com/jlurena'>github.com/jlurena</a>
        </p>
      </header>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Summary</h2>
        <p>{config.profile_summary}</p>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Experience</h2>
        {config.experiences.map(experience => (
          <div className={styles.experience} key={experience.experience_name}>
            <div className={styles.experienceRow}><span>{experience.experience_name}</span></div>
            {experience.experience_note && (
              <p className={styles.experienceNote}>{experience.experience_note}</p>
            )}
            {experience.experience_titles.map(titles => (
              <div className={styles.titleBlock} key={titles.title}>
                <div className={styles.experienceRow}>
                  <span>{titles.title}</span>
                  <span className={styles.experienceDates}>
                    {`${titles.start} – ${titles.end || 'Present'}`}
                  </span>
                </div>
                {titles.summary && <p>{titles.summary}</p>}
                {titles.accomplishments && (
                  <ul className={styles.accomplishmentList}>
                    {titles.accomplishments.map(accomplishment => (
                      <li key={accomplishment.substring(0, 32)}>{accomplishment}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {experience.summary && <p>{experience.summary}</p>}
            {experience.accomplishments && (
              <ul className={styles.accomplishmentList}>
                {experience.accomplishments.map(accomplishment => (
                  <li key={accomplishment.substring(0, 32)}>{accomplishment}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Education</h2>
        <div className={styles.experienceRow}>
          <span>Rochester Institute of Technology, M.S. in Business Analytics and AI</span>
          <span className={styles.experienceDates}>Expected 2028</span>
        </div>
        <div className={styles.experienceRow}>
          <span>Rochester Institute of Technology, B.S. in Computer Science</span>
          <span className={styles.experienceDates}>2018</span>
        </div>
      </section>
      <section className={styles.section}>
        <h2 className={styles.sectionHeader}>Skills</h2>
        <ul className={styles.skillsList}>
          {config.skills.map(skill => (
            <li key={skill.name}>
              <strong>{skill.name}</strong>{skill.examples ? `: ${skill.examples.join(', ')}` : ''}
            </li>
          ))}
        </ul>
      </section>
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
