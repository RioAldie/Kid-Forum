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
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        borderBottom: '20px #BE0025 solid',
        borderBottomRightRadius: '80px',
        gap: '50px',
        justifyContent: 'space-around',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '30px',
        }}>
        <Typography
          sx={{
            fontSize: { xs: 30, sm: 30, md: 36 },
            fontFamily: 'sans-serif',
            fontWeight: '600',
            lineBreak: { xs: 0, sm: 0, md: 1 },
            width: { lg: '600px', sm: '90%', xs: '90%' },
            maxHeight: '250px',
            color: '#fff',
          }}>
          Laporan Penanganan Aduan{' '}
          <span style={{ color: '#FFE351' }}>
            Kasus Kekerasan Terhadap Perempuan dan Anak
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
          Ayo laporkan aduanmu kepada dinsos PPPA Nganjuk secara
          langsung dimanapun kamu berada.
        </Typography>
        <ButtonGoLapor />
      </Box>
      <Box
        sx={{
          display: {
            sm: 'none',
            xs: 'none',
            lg: 'block',
            md: 'block',
          },
        }}>
        <img
          src="/images/thum-lapak.png"
          alt="anak-anak indonesia"
          width={582}
          height={562}
        />
      </Box>
    </Box>
  );
};

export default Hero;
