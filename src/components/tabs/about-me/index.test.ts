import AboutMe from './index'
import AboutMeComponent from './about-me'
import { describe, it, expect } from 'vitest'

describe('AboutMe index.ts', () => {
  it('should export AboutMe component as default', () => {
    expect(AboutMe).toBe(AboutMeComponent)
  })
})
