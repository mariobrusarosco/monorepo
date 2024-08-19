import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { setApiMockingWhenInDevMode } from './app/domains/testing/utils';
import App from './app/app';

const runWebApp = async () => {
  // await setApiMockingWhenInDevMode();

  ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
};

runWebApp();
