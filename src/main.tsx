import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index.tsx';
import './index.css';

const root = ReactDOM.createRoot(document.querySelector('#root')!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
