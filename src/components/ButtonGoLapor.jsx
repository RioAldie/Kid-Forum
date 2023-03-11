import { Button } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const ButtonGoLapor = () => {
  return (
    <Link to={'/report'} sx={{}}>
      <Button
        variant="contained"
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
    </Link>
  );
};

export default ButtonGoLapor;
