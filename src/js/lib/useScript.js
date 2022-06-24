import { useEffect } from 'react';

const useScript = (url, options) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.type = 'text/javascript';

    Object.keys(options).forEach(k => {
      script[k] = options[k];
    });

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;
