/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { LinkButton } from '.'

describe('<Button/>', () => {
  const component = renderer.create(
    <LinkButton aria-label='Open in new tab' href='https://example.com' target='_blank'>Hello</LinkButton>
  )

  const tree = component.toJSON()

  test('Rendering', () => {
    expect(tree).toMatchSnapshot()
  })
})
