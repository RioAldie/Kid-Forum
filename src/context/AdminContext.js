import { createContext, useState } from 'react';
const res = JSON.parse(localStorage.getItem('admin-active'));
const initialState = {
  isAdmin: res === null ? false : true,
  admin: res,
};

export const adminCtx = createContext(initialState);

const AdminCtxProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(initialState.isAdmin);
  const [admin, setAdmin] = useState(initialState.admin);
  return (
    <adminCtx.Provider
      value={{ isAdmin, setIsAdmin, admin, setAdmin }}>
      {children}
    </adminCtx.Provider>
  );
};

export default AdminCtxProvider;
