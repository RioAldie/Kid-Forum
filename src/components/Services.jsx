import { Box, Typography } from '@mui/material';
import React from 'react';
import dataService from '../services/layanan';
import CardService from './CardService';

const Services = () => {
  return (
    <Box
      sx={{
        minWidth: '50%',
        marginTop: '100px',
        display: 'flex',
        flexFlow: 'column',
        gap: '30px',
        alignItems: 'center',
      }}>
      <Box>
        <Typography
          sx={{
            fontSize: '26px',
            lineHeight: '39px',
            fontWeight: '600',
            color: '#DE002C',
          }}>
          Layanan
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            lineHeight: '24px',
            fontWeight: '500',
            marginTop: '20px',
          }}>
          Tindak Lanjut bagi Korban Kekerasan terhadap perempuan dan
          anak{' '}
          <span
            style={{
              fontWeight: '600',
            }}>
            (KTPA)
          </span>{' '}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '407px',
          height: '690px',
        }}>
        <Box
          sx={{
            width: '389px',
            height: '658px',
            bgcolor: '#FF0032',
            position: 'absolute',
            zIndex: '1000',
            marginLeft: '30px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          {dataService.map((data, i) => {
            return (
              <CardService key={i} name={data.name} no={data.no} />
            );
          })}
        </Box>
        <Box
          sx={{
            width: '389px',
            height: '658px',
            bgcolor: '#F56C87',
            position: 'absolute',
            marginTop: '15px',
            marginLeft: '15px',
            zIndex: '100',
          }}></Box>
        <Box
          sx={{
            width: '389px',
            height: '658px',
            bgcolor: '#FFC2CE',
            position: 'absolute',
            marginTop: '30px',
          }}></Box>
      </Box>
    </Box>
  );
};

export default Services;
