import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SkillBar from './skill-bar'

describe('<SkillBar />', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    act(() => vi.runOnlyPendingTimers())
    vi.useRealTimers()
  })

  it('renders skill name and initial percent', () => {
    render(<SkillBar skillName="TypeScript" percent={80} />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('animates percent number up to the target', () => {
    render(<SkillBar skillName="React" percent={10} />)
    // Wait for initial delay (300ms)
    act(() => {
      vi.advanceTimersByTime(300)
    })

    // Animate percentNumber from 0 to 10
    for (let i = 1; i <= 10; i++) {
      act(() => {
        vi.advanceTimersByTime(100) // 1000/10 = 100ms per increment
      })
      expect(screen.getByText(`${i}%`)).toBeInTheDocument()
    }
  })

  it('sets bar width style according to percent', () => {
    render(<SkillBar skillName="CSS" percent={55} />)
    const fill = document.querySelector('[class*="fill"]')
    // The fill div should have width: 55%
    expect(fill).toHaveStyle({ width: '55%' })
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<SkillBar skillName="HTML" percent={70} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
