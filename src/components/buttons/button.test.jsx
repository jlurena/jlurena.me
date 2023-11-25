/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { Button } from '.'

describe('<Button/>', () => {
  const className = 'someclass'
  const component = renderer.create(
    <Button className={className}><p>Hello</p></Button>
  )

  const tree = component.toJSON()

  test('Rendering', () => {
    expect(tree).toMatchSnapshot()
  })
})
