import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StatusCtxProvider from './context/StatusContext';
import LoginCtxProvider from './context/LoginContext';
import AdminCtxProvider from './context/AdminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StatusCtxProvider>
      <LoginCtxProvider>
        <AdminCtxProvider>
          <App />
        </AdminCtxProvider>
      </LoginCtxProvider>
    </StatusCtxProvider>
  </React.StrictMode>
);
