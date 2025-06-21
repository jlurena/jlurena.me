
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Burger from './burger';

describe('<Burger />', () => {
  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Burger onClick={() => {}} onBlur={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('calls onClick handler', () => {
    const onClick = vi.fn();
    render(<Burger onClick={onClick} onBlur={() => {}} />);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('calls onBlur handler', () => {
    const onBlur = vi.fn();
    render(<Burger onBlur={onBlur} onClick={() => {}} />);
    fireEvent.blur(screen.getByRole('button'));
    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
