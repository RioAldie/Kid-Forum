import { Box, Typography } from '@mui/material';
import React from 'react';

const CardFeature = (props) => {
  const { name, icon } = props;
  return (
    <Box
      sx={{
        width: '250px',
        cursor: 'pointer',
        height: '60px',
        border: 'solid 2px #F0A5B4',
        justifyContent: 'flex-start',
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        borderRadius: '6px',
        paddingLeft: '50px',
      }}>
      <img src={`/icons/${icon}`} width={40} height={40} alt="" />
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#DE002C',
        }}>
        {name}
      </Typography>
    </Box>
  );
};

export default CardFeature;
