import NavButton from './nav-button'
import exportedNavButton from './index'

describe('index.ts', () => {
  it('should export NavButton as default', () => {
    expect(exportedNavButton).toBe(NavButton)
  })
})
