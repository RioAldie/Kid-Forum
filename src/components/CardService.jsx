import { Box, Typography } from '@mui/material';
import React from 'react';

const CardService = (props) => {
  const { name, no } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        flex: 'row',
        alignItems: 'center',
        width: '80%',
        height: '50px',
        gap: '30px',
      }}>
      <Typography
        sx={{
          width: '41px',
          height: '41px',
          border: '2px solid #fff',
          borderRadius: '50%',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
        }}>
        {no}
      </Typography>
      <Typography
        sx={{
          color: '#fff',
          fontSize: '18px',
          fontWeight: '600',
        }}>
        {name}
      </Typography>
    </Box>
  );
};

export default CardService;
