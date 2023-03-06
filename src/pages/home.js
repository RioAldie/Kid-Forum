import React from 'react';
import Feature from '../components/Feature';
import Hero from '../components/Hero';
import ResponsiveAppBar from '../layout/Navbar';

const Home = () => {
  return (
    <>
      <ResponsiveAppBar />
      <Hero />
      <Feature />
    </>
  );
};

export default Home;
