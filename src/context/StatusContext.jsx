import { Children, createContext, useState } from 'react';

const StatusDefaultValue = {
  status: false,
};

export const StatusCtx = createContext(StatusDefaultValue);

const StatusCtxProvider = ({ children }) => {
  const [status, setStatus] = useState(StatusDefaultValue.status);
  return (
    <StatusCtx.Provider value={{ status, setStatus }}>
      {children}
    </StatusCtx.Provider>
  );
};

export default StatusCtxProvider;
