import { Button } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonGoLapor = () => {
  return (
    <Button
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
        border: 'solid #DE002C 2px',
        textTransform: 'none',
      }}>
      Buat Pengaduan <ArrowForwardIcon />
    </Button>
  );
};

export default ButtonGoLapor;
