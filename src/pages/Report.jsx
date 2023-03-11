import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import FormReport from '../components/FormReport';
import Services from '../components/Services';
import Sticker from '../components/Sticker';

const Report = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        padding: '0',
        width: '100%',
        overflow: 'hidden',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        gap: '50px',
      }}>
      <FormReport />
      <Sticker />
      <Services />
    </Box>
  );
};

export default Report;
