import { Box, Typography } from '@mui/material';
import React from 'react';

const Sticker = () => {
  return (
    <Box
      sx={{
        width: '341px',
        height: '387px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: '100px',
        borderRadius: '6px',
        borderTop: '6px solid #DE002C',
        borderRight: '6px solid #DE002C',
        borderLeft: '1px solid #DE002C',
        borderBottom: '1px solid #DE002C',
      }}>
      <img
        src="/images/STOP_KEKERASAN.jpg"
        width={260}
        height={160}
        alt="stop kekerasan"
      />
      <Typography
        sx={{
          color: '#FF0032',
          fontSize: '25px',
          fontWeight: '600',
          lineHeight: '37.5px',
          textAlign: 'center',
        }}>
        Ayo Hentikan Kekerasan Terhadap Perempuan dan Anak
      </Typography>
    </Box>
  );
};

export default Sticker;
