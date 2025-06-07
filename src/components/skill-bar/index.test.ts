import SkillBar from './skill-bar'
import exported from './index'

describe('SkillBar index.ts', () => {
  it('should export SkillBar as default', () => {
    expect(exported).toBe(SkillBar)
  })
})
