import { useEffect } from 'react'

type TagOptions = Record<string, unknown>

const useTag = (
  parentNodeFinderCb: () => HTMLElement,
  tag: keyof HTMLElementTagNameMap,
  options: TagOptions
): void => {
  useEffect(() => {
    const el = document.createElement(tag)

    Object.keys(options).forEach(k => {
      el.setAttribute(k, String(options[k]))
    })

    const parentNode = parentNodeFinderCb()
    parentNode.appendChild(el)

    return () => {
      parentNode.removeChild(el)
    }
  }, [options, parentNodeFinderCb, tag])
}

export default useTag
