import { Container } from '@mui/material';
import React from 'react';
import Footer from './Footer';
import ResponsiveAppBar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
