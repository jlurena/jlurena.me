import React from 'react';
import { createRoot } from 'react-dom/client';
import * as serviceWorker from './js/lib/service-worker';
import App from './js/app';

import './scss/antispam.scss';
import './scss/reset.scss';
import './scss/base.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

serviceWorker.unregister();
