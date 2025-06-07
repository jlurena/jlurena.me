import * as Buttons from './index';

describe('Buttons index exports', () => {
  it('should export LinkButton', () => {
    expect(Buttons.LinkButton).toBeDefined();
    expect(typeof Buttons.LinkButton === 'function' || typeof Buttons.LinkButton === 'object').toBe(true);
  });

  it('should export Button', () => {
    expect(Buttons.Button).toBeDefined();
    expect(typeof Buttons.Button === 'function' || typeof Buttons.Button === 'object').toBe(true);
  });
});
