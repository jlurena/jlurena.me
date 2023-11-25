/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import WordCarousel from '.'

test('<WordCarousel/> Rendering', () => {
  const words = ['Hello', 'World', 'Goodbye']

  const component = renderer.create(
    <WordCarousel words={words} />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
