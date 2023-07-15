/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import Footer from '.'

describe('<Burger/>', () => {
  const component = renderer.create(
    <Footer />
  )

  const tree = component.toJSON()

  test('Rendering', () => {
    expect(tree).toMatchSnapshot()
  })
})
