import {
  Box,
  Button,
  styled,
  TextField,
  Typography,
} from '@mui/material';

import { useEffect, useState } from 'react';

import ProfileBar from '../components/MenuProfile';
import UserReports from '../components/TableUser';

export default function Profile({ users }) {
  const [actived, setActived] = useState('Profile');

  const SectionActive = (actived) => {
    if (actived === 'Profile') {
      return <p>Info user</p>;
    }
    if (actived === 'Laporan') {
      return <UserReports />;
    }
  };
  return (
    <>
      <Box
        sx={{
          width: '100%',
          minHeight: '100vh',
          maxHeight: '200vh',
          bgcolor: '#F3F3F4',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            width: {
              md: '80%',
              sm: '90%',
              xs: '95%',
            },
            mb: '20px',
            pb: '40px',
            bgcolor: '#fff',
            mt: '100px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '100vh',
          }}>
          <ProfileBar actived={actived} setActived={setActived} />
          {SectionActive(actived)}
        </Box>
      </Box>
    </>
  );
}
