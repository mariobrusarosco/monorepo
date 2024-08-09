import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app';

const runWebApp = async () => {
  // await setApiMockingWhenInDevMode();

  ReactDOM.createRoot(document.querySelector('#root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

runWebApp();
