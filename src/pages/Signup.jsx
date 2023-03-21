import React from 'react';
import { Box, CssBaseline, Stack } from '@mui/material';
import SignupForm from './FormSignup';

const Signup = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Stack
        justifyContent="space-between"
        direction="row"
        spacing={2}>
        <SignupForm />
      </Stack>
    </Box>
  );
};

export default Signup;
