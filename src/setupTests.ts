import '@testing-library/jest-dom';


// jsdom does not implement ResizeObserver (used by react-image-gallery)
globalThis.ResizeObserver ??= class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
