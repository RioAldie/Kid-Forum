import { Box, Typography } from '@mui/material';
import React from 'react';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

const CardFeature = () => {
  return (
    <Box
      sx={{
        width: '200px',
        height: '60px',
        border: 'solid 2px #bfbfbf',
        justifyContent: 'center',
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        borderRadius: '6px',
      }}>
      <FamilyRestroomIcon sx={{ color: '#E90064' }} />
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '600',
          color: '#E90064',
        }}>
        Keluarga
      </Typography>
    </Box>
  );
};

export default CardFeature;
