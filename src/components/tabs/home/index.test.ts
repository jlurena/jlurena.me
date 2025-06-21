import Home from './index'
import HomeComponent from './home'

describe('Home index.ts', () => {
  it('should export the Home component as default', () => {
    expect(Home).toBe(HomeComponent)
  })
})
