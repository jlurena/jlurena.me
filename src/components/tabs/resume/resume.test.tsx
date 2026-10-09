import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import Resume from './resume'

const mockConfig = vi.hoisted(() => ({ current: undefined as unknown }))

vi.mock('../../../configs/resume.json', async importOriginal => {
  const original = await importOriginal<{ default: object }>()
  return {
    default: new Proxy(original.default, {
      get: (target, prop, receiver) =>
        mockConfig.current && prop in (mockConfig.current as object)
          ? (mockConfig.current as Record<string | symbol, unknown>)[prop]
          : Reflect.get(target, prop, receiver)
    })
  }
})

describe('Resume', () => {
  it('renders correctly and matches snapshot', () => {
    const { container } = render(<Resume />)
    expect(container).toMatchSnapshot()
  })

  it('renders with showPrintButton=true and matches snapshot', () => {
    const { container } = render(<Resume showPrintButton={true} />)
    expect(container).toMatchSnapshot()
  })

  it('renders with resumeOnly=true when clicking print button', () => {
    render(<Resume showPrintButton={true} />)
    const printSpy = vi.spyOn(window, 'print').mockImplementation(() => {})

    const printButton = screen.getByRole('button', { name: 'Print' })
    expect(printButton).toBeInTheDocument()
    printButton.click()

    expect(printSpy).toHaveBeenCalled()
    printSpy.mockRestore()
  })


  it('renders with resumeOnly=true in URL and matches snapshot', () => {
    const originalLocation = window.location
    // @ts-expect-error override for test
    delete window.location
    // @ts-expect-error override for test
    window.location = { ...originalLocation, search: '?resumeOnly=true', origin: 'http://localhost' }
    const { container } = render(<Resume />)
    expect(document.body.getAttribute('data-resume-only')).toBe('true')
    expect(container).toMatchSnapshot()
    // Restore
    Object.defineProperty(window, 'location', {
      configurable: true,
      enumerable: true,
      value: originalLocation,
      writable: true,
    })
  })

  it('renders experience-level summary and accomplishments', () => {
    mockConfig.current = {
      experiences: [
        {
          experience_name: 'Acme',
          experience_titles: [],
          summary: 'Acme summary',
          accomplishments: ['Did a thing at Acme']
        }
      ]
    }
    render(<Resume />)
    mockConfig.current = undefined

    expect(screen.getByText('Acme summary')).toBeInTheDocument()
    expect(screen.getByText('Did a thing at Acme')).toBeInTheDocument()
  })
})
