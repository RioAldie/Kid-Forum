import { Box, Typography } from '@mui/material';
import React from 'react';

const StatusReport = (props) => {
  const { status } = props;

  console.log(status);
  return (
    <Box>
      {status === 'pending' && (
        <Typography
          color={'#FFD80B'}
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
          }}>
          Menunggu
        </Typography>
      )}
      {status === 'terima' && (
        <Typography
          color={'#31C818'}
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
          }}>
          Selesai
        </Typography>
      )}
      {status === 'tolak' && (
        <Typography
          color={'#FF0032'}
          sx={{
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
          }}>
          Ditolak
        </Typography>
      )}
    </Box>
  );
};

export default StatusReport;
