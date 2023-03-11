import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import Services from '../components/Services';
import Sticker from '../components/Sticker';

const Report = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '0',
        width: '100%',
        overflow: 'hidden',
      }}>
      <Services />
      <Sticker />
    </Box>
  );
};

export default Report;
