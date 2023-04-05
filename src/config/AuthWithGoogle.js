import { Box, Button } from '@mui/material';
import { auth, googleProvider } from '.';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { loginCtx } from '../context/LoginContext';
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';

const AuthWithGoogle = () => {
  const { setIsLogin } = useContext(loginCtx);
  const navigate = useNavigate();
  const signInWIthGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        localStorage.setItem(
          'user-active',
          JSON.stringify(res.user.uid)
        );
        localStorage.setItem(
          'user-email',
          JSON.stringify(res.user.email)
        );
        setIsLogin(true);
        navigate('/');
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
      <GoogleButton
        onClick={() => {
          signInWIthGoogle();
        }}
      />
    </Box>
  );
};

export default AuthWithGoogle;
