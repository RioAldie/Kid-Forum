import { createContext, useState } from 'react';
const res = JSON.parse(localStorage.getItem('user-active'));
const initialState = {
  showLogin: false,
  isLogin: res === null ? false : true,
  user: res,
};

export const loginCtx = createContext(initialState);

const LoginCtxProvider = ({ children }) => {
  const [show, setShow] = useState(initialState.showLogin);
  const [isLogin, setIsLogin] = useState(initialState.isLogin);
  const [user, setUser] = useState(initialState.user);
  return (
    <loginCtx.Provider
      value={{ show, setShow, isLogin, setIsLogin, user, setUser }}>
      {children}
    </loginCtx.Provider>
  );
};

export default LoginCtxProvider;
