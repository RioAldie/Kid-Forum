import { Children, createContext, useState } from 'react';

const RecapDefaultValue = {
  isOpen: false,
};

export const RecapCtx = createContext(RecapDefaultValue);

const RecapCtxProvider = ({ children }) => {
  const [open, setOpen] = useState(RecapDefaultValue.isOpen);
  return (
    <RecapCtx.Provider value={{ open, setOpen }}>
      {children}
    </RecapCtx.Provider>
  );
};

export default RecapCtxProvider;
