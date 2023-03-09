import { Box, Container, Typography } from '@mui/material';
import * as React from 'react';
import ButtonGoLapor from './ButtonGoLapor';

const Hero = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FF0032',
        height: '600px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
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
