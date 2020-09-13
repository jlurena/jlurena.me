import React from 'react';
import renderer from 'react-test-renderer';
import Burger from '../../js/components/burger';

describe('<Burger/>', () => {
  const onClickSpy = jest.fn();
  const component = renderer.create(
    <Burger onClick={onClickSpy} />
  );

  const tree = component.toJSON();

  test('Rendering', () => {
    expect(tree).toMatchSnapshot();
  });

  test('onClick handler gets called', () => {
    component.root.findByType('button').props.onClick();
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});
