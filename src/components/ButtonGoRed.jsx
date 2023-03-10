import { Button } from '@mui/material';
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ButtonGoRed = () => {
  return (
    <Button
      variant="contained"
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
