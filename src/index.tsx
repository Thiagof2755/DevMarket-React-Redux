import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Router  from 'routes';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
);