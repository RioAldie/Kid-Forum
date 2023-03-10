import { Box, Container } from '@mui/material';
import React from 'react';
import Hero from '../components/Hero';
import ResponsiveAppBar from '../layout/Navbar';

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          padding: '0',
          width: '100%',
          overflow: 'hidden',
        }}>
        <Hero />
      </Box>
    </>
  );
};

export default Home;
