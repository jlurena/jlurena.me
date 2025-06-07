import { vi } from 'vitest'
import App from './app'
import { render, fireEvent, screen } from '@testing-library/react'
import {getDefaultNormalizer } from '@testing-library/dom'

function setViewport(width: number, height = 768): void {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: width });
  Object.defineProperty(window, 'innerHeight', { writable: true, configurable: true, value: height });
  window.dispatchEvent(new Event('resize'));          // notify listeners
}

describe('<App/>', () => {
  const originalURL = window.location.href;

  afterEach(() => {
    window.history.pushState({}, '', originalURL);
  });


  it('whend isplaying only resume', () => {
    // Set URL for resumeOnly mode
    window.history.pushState({}, '', '/?resumeOnly=true');

    const { asFragment } = render(<App />);

    expect(screen.getByRole('button', { name: 'Print' })).toBeInTheDocument();
    expect(asFragment()).toMatchSnapshot('ResumeOnly-mode');

    // Reset URL
    window.history.pushState({}, '', '/');
  });

  it('Re-renders screens when changing tabs', () => {
    /* ─────────────────────────── 0. initial render ─────────────────────────── */
    const { asFragment } = render(<App />)

    // Home content should be displayed initially
    expect(screen.getByText('Hello, my name is')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot('Home-tab')

    /* ─────────────────────────── 1. click “About Me” ───────────────────────── */
    fireEvent.click(screen.getByRole('button', { name: 'About Me' }))
    
    // Expect About Me content to be displayed
    expect(screen.getByText('About', { selector: "h1" })).toBeInTheDocument()
    expect(
      screen.getByText(' Me', { selector: "span", normalizer: getDefaultNormalizer({trim: false}) })
    ).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot('About-Me-tab')

    /* ─────────────────────────── 2. click “Resume” ─────────────────────────── */
    fireEvent.click(screen.getByRole('button', { name: 'Resume' }))
    
    // Expect Resume content to be displayed
    expect(screen.getByRole('heading', { level: 2, name: 'PROFILE'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'EDUCATION'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'EXPERIENCE'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'SKILLS'})).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'LINKS'})).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot('Resume-tab');

    /* ─────────────────────────── 3. click “Home” ──────────────────────────── */
    fireEvent.click(screen.getByRole('button', { name: 'Home' }))

    // Expect Home content to be displayed again
    expect(screen.getByText('Hello, my name is')).toBeInTheDocument()
    expect(asFragment()).toMatchSnapshot('Home-tab-after-Resume')
  })

  it('opens blog link in new tab when clicking Blog', () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null);
    render(<App />)


    fireEvent.click(screen.getByRole('button', { name: 'Blog' }))
    expect(openSpy).toHaveBeenCalledWith(
      'https://medium.com/@jlurena123',
      '_blank'
    )
    openSpy.mockRestore()
  })

  it('toggles mobile nav when clicking burger', () => {
    setViewport(500);
    const { asFragment } = render(<App />)
    expect(asFragment()).toMatchSnapshot('Mobile-View');

    // Burger should be visible
    const burger = screen.getByRole('button', { name: 'Menu' })

    fireEvent.click(burger)
    // Both navs should be visible because larger viewport nav is just hidden by css
    expect(screen.getAllByRole('navigation')).toHaveLength(2)
    expect(asFragment()).toMatchSnapshot('Mobile-Nav-Open')

    // After blurring, nav should be closed (nav should not be visible)
    fireEvent.blur(burger)
    // Mobile nav should not be visible
    expect(screen.getAllByRole('navigation')).toHaveLength(1)
    expect(asFragment()).toMatchSnapshot('Mobile-Nav-Closed')

    fireEvent.click(burger)
    // Mobile nav should be visible again
    expect(screen.getAllByRole('navigation')).toHaveLength(2)
    fireEvent.click(screen.getAllByRole('button', { name: 'Home' })[0])
    // After clicking a tab, mobile nav should be closed
    expect(screen.getAllByRole('navigation')).toHaveLength(1)

    // Restore viewport
    setViewport(1024, 768);
  })
})
