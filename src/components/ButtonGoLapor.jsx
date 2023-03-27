import { Button } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { loginCtx } from '../context/LoginContext';

const ButtonGoLapor = () => {
  const { isLogin, setShow } = useContext(loginCtx);
  const navigate = useNavigate();
  const gotoReport = () => {
    if (isLogin) {
      return navigate('/report');
    }
    if (!isLogin) {
      return setShow(true);
    }
  };
  return (
    <Button
      variant="contained"
      onClick={() => gotoReport()}
      sx={{
        bgcolor: '#fff',
        color: '#ff0032',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '5px',
        width: '260px',
        height: '63px',
        fontSize: '18px',
        fontWeight: '600',
        border: 'solid #DE002C 5px',
        textTransform: 'none',
        marginTop: '20px',
        ' &:hover': {
          color: '#fff',
        },
        textDecoration: 'none',
      }}>
      Buat Pengaduan <ArrowForwardIcon />
    </Button>
  );
};

export default ButtonGoLapor;
