import { Box, Container } from '@mui/material';
import React from 'react';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Sticker from '../components/Sticker';
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
        <Feature />
        <Sticker />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
