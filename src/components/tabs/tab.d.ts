export const NAV_CONTENT_TYPE = 'content'
export const NAV_FUNCTION_TYPE = 'function'

export type TabType = typeof NAV_CONTENT_TYPE | typeof NAV_FUNCTION_TYPE
export type Tab = React.FC<AboutMeProps> | React.FC<ResumeProps>
