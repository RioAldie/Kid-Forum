import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import Feature from './Feature';

const Hero = () => {
  return (
    <>
      <Box sx={{ marginTop: '50px' }}>
        <Typography
          sx={{
            fontSize: '36px',
            fontFamily: 'sans-serif',
            fontWeight: '600',
            lineBreak: '1',
          }}>
          Ayo Laporkan Aduanmu Kepada Kami
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
            fontFamily: 'sans-serif',
            marginTop: '5px',
          }}>
          Kami akan melakukan yang terbaik demi membantu kesejahteraan
          anak diseluruh indonesia
        </Typography>
      </Box>
      <div>Thumbail</div>
    </>
  );
};

export default Hero;
