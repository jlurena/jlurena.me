import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LinkButton from './link-button';

describe('<LinkButton />', () => {
  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(
      <LinkButton
        aria-label="Open in new tab"
        href="https://example.com"
        target="_blank"
      >
        Hello
      </LinkButton>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
