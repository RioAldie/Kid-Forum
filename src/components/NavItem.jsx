import { Button } from '@mui/material';
import React from 'react';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../context/LoginContext';

const NavItem = (props) => {
  const { target, name } = props;
  const { isLogin, setShow } = useContext(loginCtx);
  const navigate = useNavigate();
  const gotoReport = () => {
    if (isLogin) {
      return navigate(target);
    }
    if (!isLogin) {
      return setShow(true);
    }
  };
  return (
    <Button
      sx={{
        my: 2,
        color: 'white',
        display: 'block',
        textTransform: 'none',
        fontSize: '16px',
        '&hover': {
          borderBottom: 'solid 1px #fff',
        },
      }}
      onClick={() => gotoReport()}>
      {name}
    </Button>
  );
};

export default NavItem;
