import { Button } from '@mui/material';
import React, { useContext } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from 'react-router-dom';
import { loginCtx } from '../context/LoginContext';

const ButtonGoRed = () => {
  const { isLogin, setShow } = useContext(loginCtx);
  const navigate = useNavigate();

  const gotoReport = () => {
    if (isLogin) {
      return navigate('/report#form-report');
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
        bgcolor: '#DE002C',
        color: '#fff',
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
      }}>
      Buat Pengaduan <ArrowForwardIcon />
    </Button>
  );
};

export default ButtonGoRed;
