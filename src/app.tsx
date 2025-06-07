import { useState, useEffect, useMemo } from 'react'
import {
  faFileAlt,
  faNewspaper,
  faHome,
  faUser
} from '@fortawesome/free-solid-svg-icons'

import Burger from './components/burger'
import Home from './components/tabs/home'
import Nav from './components/nav'
import AboutMe from './components/tabs/about-me'
import Resume from './components/tabs/resume'

import styles from './app.module.scss'
import Footer from './components/footer'

import type { NavTabs } from './components/nav/nav.d'
import { NAV_CONTENT_TYPE, NAV_FUNCTION_TYPE } from './components/tabs/tab.d'


function App() {
  const [resumeOnlyMode, setResumeOnlyMode] = useState(false)

  useEffect(() => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)

    setResumeOnlyMode(!!params.get('resumeOnly'))
  }, [])

  const tabs: NavTabs = useMemo(() => (
    {
      Home: {
        icon: faHome, tab: Home, type: NAV_CONTENT_TYPE
      },
      'About Me': {
        icon: faUser, tab: AboutMe, type: NAV_CONTENT_TYPE
      },
      Resume: {
        icon: faFileAlt, tab: Resume, type: NAV_CONTENT_TYPE
      },
      Blog: {
        icon: faNewspaper, func: () => window.open('https://medium.com/@jlurena123', '_blank'), type: NAV_FUNCTION_TYPE
      }
    }
  ), [])

  const [selectedTab, setSelectedTab] = useState<string>('Home')
  const [isShowingMobileNav, showMobileNav] = useState(false)

  const Content = tabs[selectedTab].tab
  const onNavClick = (t: string) => {
    if (tabs[t].type === NAV_CONTENT_TYPE) setSelectedTab(t)
    if (tabs[t].type === NAV_FUNCTION_TYPE && tabs[t].func) tabs[t].func()
    if (isShowingMobileNav) showMobileNav(!isShowingMobileNav)
  }

  if (resumeOnlyMode) {
    return <Resume showPrintButton />
  }
  return (
    <>
      <Burger onClick={() => showMobileNav(!isShowingMobileNav)} onBlur={() => showMobileNav(false)} />
      <Nav
        isMobileNavOpen={isShowingMobileNav}
        handleOnTabClick={onNavClick}
        selectedTab={selectedTab}
        tabs={tabs}
      />
      <div className={styles.contentWrapper}>
        <div className={styles.container}>
          <section className={styles.content}>
            {typeof Content === 'function' && <Content changeTabFunc={onNavClick} /> }
          </section>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
