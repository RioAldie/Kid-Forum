import { Box, Container } from '@mui/material';
import React from 'react';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Sticker from '../components/Sticker';
import Footer from '../layout/Footer';
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
        <Services />
      </Box>
      <Footer />
    </>
  );
};

export default Home;
