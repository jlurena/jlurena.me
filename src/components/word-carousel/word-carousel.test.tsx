import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import WordCarousel from './word-carousel';

describe('<WordCarousel />', () => {
  it('renders correctly (snapshot)', () => {
    const words = ['Hello', 'World', 'Goodbye'];

    const { asFragment } = render(<WordCarousel words={words} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
