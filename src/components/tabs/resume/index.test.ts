import Resume from '../resume'
import exportedResume from './index'

describe('Resume index.ts', () => {
  it('should export Resume component as default', () => {
    expect(exportedResume).toBe(Resume)
  })
})
