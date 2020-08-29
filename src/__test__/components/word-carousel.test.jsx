import React from 'react';
import renderer from 'react-test-renderer';
import WordCarousel from '../../js/components/word-carousel';

test('<WordCarousel/>', () => {
  const words = ['Hello', 'World', 'Goodbye'];

  const component = renderer.create(
    <WordCarousel words={words} />
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
