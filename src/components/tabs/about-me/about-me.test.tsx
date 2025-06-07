import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import AboutMe from './about-me'
import { vi } from 'vitest'

function installLinkedInBadgeStub() {
  const originalAppendChild = document.body.appendChild.bind(document.body);

  vi
    .spyOn(document.body, 'appendChild')
    .mockImplementation((node: Node) => {
      /* istanbul ignore else */
      if (
        node instanceof HTMLScriptElement &&
        /linkedin(-badge)?\.min\.js|platform\.linkedin\.com\/badges\/js\/profile\.js/.test(
          node.src
        )
      ) {

        const appended = originalAppendChild(node);

        // Simulate LinkedIn inserting its iframe
        const badgeDiv = document.querySelector('.badge-base');
        if (badgeDiv) {
          const iframe = document.createElement('iframe');

          // Give the iframe an independent document so our code can write to its <head>
          const iframeDoc = document.implementation.createHTMLDocument('');
          Object.defineProperty(iframe, 'contentWindow', {
            value: { document: iframeDoc },
            writable: false,
          });

          badgeDiv.appendChild(iframe);
        }

        // Signal “script loaded”
        node.dispatchEvent(new Event('load'));
        return appended;
      }

      // Anything else: fall back to the real DOM method
      // (e.g. other scripts Jest might insert for diagnostics)
      return originalAppendChild(node);
    });
}

describe('AboutMe', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<AboutMe changeTabFunc={vi.fn()} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('calls changeTabFunc with RESUME_TAB_KEY when "View Resume" button is clicked', () => {
    const changeTabFunc = vi.fn()
    render(<AboutMe changeTabFunc={changeTabFunc} />)
    const button = screen.getByRole('button', { name: /view resume/i })
    fireEvent.click(button)
    expect(changeTabFunc).toHaveBeenCalledWith('Resume')
  })

  it('injects responsive CSS into the LinkedIn badge iframe', async () => {
    installLinkedInBadgeStub();

    const changeTabMock = vi.fn();
    const { container, asFragment } = render(<AboutMe changeTabFunc={changeTabMock} />);

    // The badge container is present
    const badgeDiv = container.querySelector('.badge-base');
    expect(badgeDiv).toBeInTheDocument();

    // Wait until the MutationObserver callback runs and writes <style> into the iframe <head>
    await waitFor(() => {
      const iframe = badgeDiv!.querySelector('iframe') as HTMLIFrameElement | null
      expect(iframe).not.toBeNull()

      const injectedStyle = iframe!.contentWindow!.document.head.querySelector('style');
      expect(injectedStyle).not.toBeNull()
      const cssText = iframe!.contentWindow!.document.head.textContent;
      expect(cssText).toContain('html{overflow-x:hidden!important;}');
    });

    expect(asFragment()).toMatchSnapshot()
  });
})
