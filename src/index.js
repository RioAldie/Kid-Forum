import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StatusCtxProvider from './context/StatusContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StatusCtxProvider>
      <App />
    </StatusCtxProvider>
  </React.StrictMode>
);
