import React from 'react';
import './bootstrap.css';
import { createRoot } from 'react-dom/client';
import { createMemoryHistory } from 'history';
import App from './App';

// Mount function to start up the app
const mount = (el, { onNavigate }) => {
  const history = createMemoryHistory();
  history.listen(onNavigate);
  const root = createRoot(el);

  root.render(<App history={history} />);
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