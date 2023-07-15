/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import NavButton from '.'

describe('<Burger/>', () => {
  test('Rendering non-selected', () => {
    const component = renderer.create(
      <NavButton
        icon={faGithub}
        ariaLabel='Github Profile'
        labelHelper='Github'
        direction='horizontal'
        onClick={jest.fn()}
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('Rendering selected', () => {
    const component = renderer.create(
      <NavButton
        icon={faGithub}
        ariaLabel='Github Profile'
        labelHelper='Github'
        direction='horizontal'
        onClick={jest.fn()}
        permanentSelect
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
