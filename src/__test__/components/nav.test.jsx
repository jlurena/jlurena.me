import React from 'react';
import renderer from 'react-test-renderer';
import { faHome, faAd } from '@fortawesome/free-solid-svg-icons';
import Nav, { Icon } from '../../js/components/nav';

describe('<Icon/>', () => {
  const onClickSpy = jest.fn();
  const component = renderer.create(
    <Icon ariaLabel="Home" onClick={onClickSpy} icon={faHome} />
  );
  const tree = component.toJSON();

  test('Rendering', () => {
    expect(tree).toMatchSnapshot();
  });

  test('calls onClick handler', () => {
    component.root.props.onClick();
    expect(onClickSpy).toHaveBeenCalledTimes(1);
  });
});

describe('<Nav/>', () => {
  function FooComponent() {
    return <div>Hello Foo!</div>;
  }
  function BarComponent() {
    return <div>Hello Bar!</div>;
  }

  const tabs = {
    Foo: { icon: faHome, tab: FooComponent },
    Bar: { icon: faAd, tab: BarComponent }
  };

  test('Rendering mobile web', () => {
    const component = renderer.create(
      <Nav isMobileNav onTabClick={jest.fn} selectedTab="Home" tabs={tabs} />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('Rendering desktop web', () => {
    const component = renderer.create(
      <Nav isMobileNav={false} onTabClick={jest.fn} selectedTab="Bar" tabs={tabs} />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
