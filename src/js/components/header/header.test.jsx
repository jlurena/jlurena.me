/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import Header from '.'
import { faCar } from '@fortawesome/free-solid-svg-icons'

describe('<Burger/>', () => {
  test('Rendering', () => {
    const component = renderer.create(
      <Header headerLevel='1' icon={faCar} headerText='Header' fontSize='1.5rem' />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Rendering with strong text', () => {
    const component = renderer.create(
      <Header headerLevel='1' icon={faCar} headerText='Strong' headerStrongText='Text' fontSize='1.0rem' />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
