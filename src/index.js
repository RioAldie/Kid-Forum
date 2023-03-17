import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StatusCtxProvider from './context/StatusContext';
import LoginCtxProvider from './context/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StatusCtxProvider>
      <LoginCtxProvider>
        <App />
      </LoginCtxProvider>
    </StatusCtxProvider>
  </React.StrictMode>
);
