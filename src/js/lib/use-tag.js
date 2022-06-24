import { useEffect } from 'react';

const useTag = (parentNodeFinderCb, tag, options) => {
  useEffect(() => {
    const el = document.createElement(tag);

    Object.keys(options).forEach(k => {
      el[k] = options[k];
    });

    const parentNode = parentNodeFinderCb();
    parentNode.appendChild(el);

    return () => {
      parentNode.removeChild(el);
    };
  }, []);
};

export default useTag;
