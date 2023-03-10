import { Box, Typography } from '@mui/material';
import * as React from 'react';
import ButtonGoLapor from './ButtonGoLapor';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FF0032',
        height: '600px',
        padding: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        width: '100%',
        borderBottom: '20px #F0A5B4 solid',
        borderBottomRightRadius: '80px',
        gap: '30px',
      }}>
      <Typography
        sx={{
          fontSize: '36px',
          fontFamily: 'sans-serif',
          fontWeight: '600',
          lineBreak: '1',
          width: { lg: '600px', sm: '90%', xs: '90%' },
          maxHeight: '250px',
          color: '#fff',
        }}>
        Layanan Pengaduan Online{' '}
        <span style={{ color: '#FFE351' }}>
          Dinas Sosial PPPA Nganjuk
        </span>
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          fontFamily: 'sans-serif',
          marginTop: '5px',
          width: { lg: '600px', sm: '90%', xs: '80%' },
          maxHeight: '101px',
          color: '#fff',
          fontWeight: '400',
          lineHeight: '27px',
        }}>
        ayo laporkan keluhanmu kepada dinsos nganjuk secara langsung
        dimanapun kamu berada
      </Typography>
      <ButtonGoLapor />
    </Box>
  );
};

export default Hero;
