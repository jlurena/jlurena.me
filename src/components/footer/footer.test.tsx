import { render } from '@testing-library/react';
import { vi } from 'vitest';
import Footer from './footer';

describe('<Footer />', () => {
  it('renders correctly (snapshot)', () => {
    const { asFragment } = render(<Footer />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('clicks on the footer link', () => {
    const { getByRole } = render(<Footer />);
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);  

    const link = getByRole('button', { name: 'Github Profile' });
    expect(link).toBeVisible()
    link.click();

    expect(windowOpenSpy).toHaveBeenCalledWith('https://github.com/jlurena', '_blank')
    windowOpenSpy.mockRestore();
  })

  it('clicks on the footer link for LinkedIn', () => {
    const { getByRole } = render(<Footer />);
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);  

    const link = getByRole('button', { name: 'LinkedIn Profile' });
    expect(link).toBeVisible()
    link.click();

    expect(windowOpenSpy).toHaveBeenCalledWith('https://linkedin.com/in/jlurena', '_blank')
    windowOpenSpy.mockRestore();
  });

  it('clicks on the footer link for Medium', () => {
    const { getByRole } = render(<Footer />);
    const windowOpenSpy = vi.spyOn(window, 'open').mockImplementation(() => null);  

    const link = getByRole('button', { name: 'Medium Blog Profile' });
    expect(link).toBeVisible()
    link.click();

    expect(windowOpenSpy).toHaveBeenCalledWith('https://medium.com/@jlurena123', '_blank')
    windowOpenSpy.mockRestore();
  });

});
