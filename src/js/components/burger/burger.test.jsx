import React from 'react';
import renderer from 'react-test-renderer';
import Burger from '.';

describe('<Burger/>', () => {
  const onClickSpy = jest.fn();
  const onBlurSpy = jest.fn();
  const component = renderer.create(
    <Burger onClick={onClickSpy} onBlur={onBlurSpy} />,
  );

  const tree = component.toJSON();

  test('Rendering', () => {
    expect(tree).toMatchSnapshot();
  });

  test('onClick handler gets called', () => {
    component.root.findByType('button').props.onClick();
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
  test('onClick handler gets called', () => {
    component.root.findByType('button').props.onBlur();
    expect(onBlurSpy).toHaveBeenCalledTimes(1);
  });
});
