/* global MutationObserver */

import React, { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  faUtensils
} from '@fortawesome/free-solid-svg-icons'
import ImageGallery from 'react-image-gallery'
import Header from '../../header'
import styles from './about-me.module.scss'
import 'react-image-gallery/styles/css/image-gallery.css'
import HikingImage from '../../../assets/images/jean/carousel/hiking.jpeg'
import useTag from '../../../lib/use-tag'
import { Button } from '../../buttons'
import { RESUME_TAB_KEY } from '../resume'
import type { AboutMeProps } from './about-me.d'

const LINKED_IN_BADGE_SRC = '/linkedin-badge.min.js'
const IMAGES = [
  {
    original: HikingImage,
    originalClass: styles.carouselImages,
    originalAlt: 'Jean Hiking next a mountain that with craters forming a smiling face'
  }
]

const HOBBIES = [
  { icon: faCar, text: 'Cars' },
  { icon: faCocktail, text: 'Lounges & Bars' },
  { icon: faCode, text: 'Code' },
  { icon: faCoffee, text: 'Cafes & Brunch' },
  { icon: faDesktop, text: 'Tech' },
  { icon: faGamepad, text: 'Video Games' },
  { icon: faHiking, text: 'Hiking' },
  { icon: faPlane, text: 'Travel' },
  { icon: faUtensils, text: 'Eating Out' }
]

const AboutMe: React.FC<AboutMeProps> = ({ changeTabFunc }) => {
  const iframeContainerDiv = useRef<HTMLDivElement>(null)

  // HACK: This is because the LinkedIn Badge has their own styles which isn't responsive
  useEffect(() => {
    const observer = new MutationObserver(mutationList => {
      mutationList.forEach(m => {
        m.addedNodes.forEach(n => {
          if (
            n instanceof HTMLIFrameElement
          ) {
            const contentHead = n.contentWindow?.document.head
            if (contentHead) {
              const style = document.createElement('style')
              style.setAttribute('type', 'text/css')
              style.innerHTML = 'html{overflow-x:hidden!important;}body>*{width:100%!important;}'
              contentHead.appendChild(style)
            }
          }
        })
      })
    })

    if (iframeContainerDiv.current) {
      observer.observe(iframeContainerDiv.current, { childList: true, subtree: true })
    }

    return () => observer.disconnect()
  }, [])

  // Need to insert tag dynamically since this JSONP updates DOM
  useTag(
    () => document.body,
    'script',
    {
      src: LINKED_IN_BADGE_SRC, type: 'text/javascript', async: true, defer: true
    }
  )

  const resumeBtnClick = () => {
    changeTabFunc(RESUME_TAB_KEY)
  }

  return (
    <div className={styles.wrapper}>
      <Header headerLevel='1' icon={faUser} headerText='About' headerStrongText='Me' fontSize='1.5rem' />
      <div className={styles.container}>
        <Header
          headerLevel='2'
          headerText="Hey! Nice to meet you, I'm Jean Luis, but you can call me"
          headerStrongText='Jean'
          fontSize='18px'
        />
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
                <FontAwesomeIcon icon={faGlasses} size='1x' />
                &nbsp; that enjoys programming, learning new technologies, experimenting with tech and
                teaching others all I know!
              </p>
            </div>
            <div className={styles.aboutMeSubSection}>
              <Header headerLevel='2' headerText='Hobbies & Interests' fontSize='18px' />
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
                {HOBBIES.map(i => (
                  <div className={styles.hobby} key={i.text}>
                    <FontAwesomeIcon icon={i.icon} size='lg' />
                    {i.text}
                  </div>
                ))}
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
        <div className={styles.aboutMeSubSection}>
          <Header headerLevel='2' headerText='Interested in my professional experience?' fontSize='18px' />
          <div className={`${styles.aboutMeProfessional} ${styles.separator}`}>
            <div>
              <div
                ref={iframeContainerDiv}
                className='badge-base LI-profile-badge'
                data-locale='en_US'
                data-size='medium'
                data-theme='dark'
                data-type='HORIZONTAL'
                data-vanity='jlurena'
                data-version='v1'
              />
            </div>
            <div>
              <Button onClick={resumeBtnClick}>
                View Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
