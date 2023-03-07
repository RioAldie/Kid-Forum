import { Container } from '@mui/material';
import React from 'react';
import Feature from '../components/Feature';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import ResponsiveAppBar from '../layout/Navbar';

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Container>
        <Hero />
        <Feature />
      </Container>
    </>
  );
};

export default Home;
