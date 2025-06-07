import { renderHook } from '@testing-library/react'
import useTag from './use-tag'

describe('useTag', () => {
  let parent: HTMLElement

  beforeEach(() => {
    parent = document.createElement('div')
    document.body.appendChild(parent)
  })

  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('should append a tag with given options to the parent node', () => {
    const options = { id: 'test-id', 'data-test': 'value' }
    renderHook(() =>
      useTag(() => parent, 'span', options)
    )

    const el = parent.querySelector('span')
    expect(el).not.toBeNull()
    expect(el?.getAttribute('id')).toBe('test-id')
    expect(el?.getAttribute('data-test')).toBe('value')
  })

  it('should remove the tag on unmount', () => {
    const { unmount } = renderHook(() =>
      useTag(() => parent, 'div', { class: 'to-remove' })
    )

    expect(parent.querySelector('div')).not.toBeNull()
    unmount()
    expect(parent.querySelector('div')).toBeNull()
  })

  it('should update attributes when options change', () => {
    let opts: Record<string, string> = { 'data-foo': 'bar' }
    const { rerender } = renderHook(() =>
      useTag(() => parent, 'section', opts)
    )

    let el = parent.querySelector('section')
    expect(el?.getAttribute('data-foo')).toBe('bar')

    opts = { 'data-foo': 'baz', 'data-bar': 'qux' }
    rerender()

    el = parent.querySelector('section')
    expect(el?.getAttribute('data-foo')).toBe('baz')
    expect(el?.getAttribute('data-bar')).toBe('qux')
  })
})
