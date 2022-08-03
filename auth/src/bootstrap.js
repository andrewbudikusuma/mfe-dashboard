import React from 'react';
import { createRoot } from 'react-dom/client';

// Mount function to start up the app
const mount = (el) => {
  const root = createRoot(el);

  root.render(<h1>Hi There</h1>);
};


// if we are in development and in isolation,
// call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
};

// We are running through container
// and we should export the mount function
export { mount };