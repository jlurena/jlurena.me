import WordCarousel from './index'
import ActualWordCarousel from './word-carousel'

describe('WordCarousel index export', () => {
  it('should export WordCarousel component as default', () => {
    expect(WordCarousel).toBe(ActualWordCarousel)
  })
})
