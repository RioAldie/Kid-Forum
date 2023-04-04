import { Alert, Box, Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../config';
import { Link, useNavigate } from 'react-router-dom';
import { adminCtx } from '../context/AdminContext';

const AdminLogin = () => {
  const [error, setError] = useState(false);
  const { setIsAdmin } = useContext(adminCtx);
  const navigate = useNavigate();
  const signInWIthGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        if (
          res.user.uid === 'oEwShCczjleSZvyIFLtpbLXhw513' ||
          res.user.uid === 'enyZVoCsNwVbhYswZMQwM492Fbp2'
        ) {
          localStorage.setItem(
            'admin-active',
            JSON.stringify(res.user.uid)
          );
          setIsAdmin(true);
          navigate('../admin', { replace: true });
        }
        return setError(true);
      });
    } catch (error) {
      console.error(error);
      return setError(true);
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
