import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalReset from './Style/GlobalReset'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalReset/>
    <App />
  </React.StrictMode>
);


