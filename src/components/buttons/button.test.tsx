import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import  Button from './button';

describe('<Button />', () => {
  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(
      <Button className="someclass">
        <p>Hello</p>
      </Button>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
