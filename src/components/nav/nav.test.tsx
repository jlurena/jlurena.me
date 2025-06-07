import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { faHome, faAd } from '@fortawesome/free-solid-svg-icons';
import Nav from './nav';
import { NavTabs } from './nav.d';
import { NAV_CONTENT_TYPE } from '../tabs/tab.d';

describe('<Nav />', () => {
  function FooComponent() {
    return <div>Hello Foo!</div>;
  }

  function BarComponent() {
    return <div>Hello Bar!</div>;
  }

  const tabs: NavTabs = {
    Foo: { icon: faHome, tab: FooComponent, type: NAV_CONTENT_TYPE },
    Bar: { icon: faAd, tab: BarComponent, type: NAV_CONTENT_TYPE },
  };

  it('renders mobile view and calls onTabClick', () => {
    const onTabClickSpy = vi.fn();

    const { asFragment } = render(
      <Nav
        isMobileNavOpen
        handleOnTabClick={onTabClickSpy}
        selectedTab="Home"
        tabs={tabs}
      />,
    );

    expect(asFragment()).toMatchSnapshot();

    // Trigger first tab button click
    const buttons = screen.getAllByRole('button');
    fireEvent.click(buttons[0]);

    expect(onTabClickSpy).toHaveBeenCalledWith('Foo');
  });

  it('renders desktop view (snapshot)', () => {
    const { asFragment } = render(
      <Nav
        isMobileNavOpen={false}
        handleOnTabClick={vi.fn()}
        selectedTab="Bar"
        tabs={tabs}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
