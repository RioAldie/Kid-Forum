import { Alert, Box, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config';
import { Link, useNavigate } from 'react-router-dom';
import { loginCtx } from '../context/LoginContext';
import { adminCtx } from '../context/AdminContext';

const AdminLogin = () => {
  const [error, setError] = useState(false);
  const { isLogin, setIsLogin } = useContext(loginCtx);
  const { setIsAdmin } = useContext(adminCtx);
  const navigate = useNavigate();
  const signInWIthGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        console.log(res.user.uid);

        if (res.user.uid !== 'ln3hI9s6hQUvkmgxI9xsa9g7ugF3') {
          console.log('bukan admin');
          return setError(true);
        }
        localStorage.setItem(
          'user-active',
          JSON.stringify(res.user.uid)
        );
        setIsAdmin(true);
        navigate('../admin', { replace: true });
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
      <Button
        variant="outlined"
        size="small"
        onClick={() => signInWIthGoogle()}>
        <AccountCircleIcon /> admin
      </Button>

      {error && <Alert severity="error">Maaf Anda bukan Admin</Alert>}
    </Box>
  );
};

export default AdminLogin;
