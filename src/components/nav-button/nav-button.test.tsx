import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import NavButton from './nav-button';

describe('<NavButton />', () => {
  it('renders non-selected button (snapshot)', () => {
    const { asFragment } = render(
      <NavButton
        icon={faGithub}
        ariaLabel="Github Profile"
        labelHelper="Github"
        direction="horizontal"
        onClick={vi.fn()}
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it('renders selected button (snapshot)', () => {
    const { asFragment } = render(
      <NavButton
        icon={faGithub}
        ariaLabel="Github Profile"
        labelHelper="Github"
        direction="horizontal"
        onClick={vi.fn()}
        permanentSelect
      />,
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
