import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { TabType, NavProps, Tab } from '../tabs/tab'

export type NavTab = {
  icon: IconProp
  tab?: Tab
  type: TabType
  func?: (() => void)
}

export type NavTabs = Record<string, NavTab>

export type NavProps = {
  isMobileNavOpen: boolean
  selectedTab: string
  handleOnTabClick: (tabKey: string) => void
  tabs: NavTabs
}
