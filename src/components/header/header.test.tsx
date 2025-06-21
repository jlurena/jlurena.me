import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from './header';
import { faCar } from '@fortawesome/free-solid-svg-icons';

describe('<Header />', () => {
  it('renders with basic props (snapshot)', () => {
    const { asFragment } = render(
      <Header
        headerLevel={1}
        icon={faCar}
        headerText="Header"
        fontSize="1.5rem"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders with strong text (snapshot)', () => {
    const { asFragment } = render(
      <Header
        headerLevel={2}
        icon={faCar}
        headerText="Strong"
        headerStrongText="Text"
        fontSize="1.0rem"
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
