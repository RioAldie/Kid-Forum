import { Box, Typography } from '@mui/material';
import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
  return (
    <Box
      bgcolor={'primary'}
      sx={{
        minWidth: '350px',
        maxWidth: '100%',
        minHeight: '300px',
        marginTop: '100px',
        bgcolor: '#FF0032',
        borderTop: '20px #F0A5B4 solid',
        borderTopLeftRadius: '80px',
        display: 'flex',
        flexDirection: {
          md: 'row',
          sm: 'column',
          xs: 'column',
          lg: 'row',
        },
        alignItems: 'center',
        gap: '20px',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: '50px',
        }}>
        <img
          src="/images/dinsos.png"
          width={100}
          height={100}
          alt=""
        />
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#fff',
            maxWidth: '300px',
          }}>
          Dinas Sosial PPPA Kabupaten Nganjuk
        </Typography>
      </Box>
      <Box sx={{ marginTop: '30px' }}>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
          }}>
          {' '}
          <HomeIcon />
          Jalan Supriyadi , No. 7, nganjuk, 64412
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '20px',
          }}>
          {' '}
          <LocalPhoneIcon /> (0358)3550772{' '}
        </Typography>
      </Box>
      <Typography
        sx={{
          color: '#fff',
          width: '100%',
          marginBottom: '30px',
          marginTop: '20px',
          textAlign: 'center',
        }}>
        © 2019 Copyright All Reversed
      </Typography>
    </Box>
  );
};

export default Footer;
