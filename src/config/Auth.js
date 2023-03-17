import { Box, Button } from '@mui/material';
import { auth, googleProvider } from '.';
import { signInWithPopup, signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { loginCtx } from '../context/LoginContext';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isLogin, setIsLogin } = useContext(loginCtx);

  const signInWIthGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider).then((res) => {
        console.log('user data: ', res.user.uid);
        localStorage.setItem(
          'user-active',
          JSON.stringify(res.user.uid)
        );
        setIsLogin(true);
      });
    } catch (error) {
      console.error(error);
    }
  };
  const signOutWIthGoogle = async () => {
    try {
      await signOut(auth, googleProvider)
        .then((res) => {
          localStorage.removeItem('user-active');
          setIsLogin(false);
        })
        .finally(() => console.log('logout'));
    } catch (error) {
      console.error(error);
    }
  };
  console.log(isLogin);
  return (
    <Box>
      {!isLogin && (
        <Button
          variant="outlined"
          sx={{ color: '#fff' }}
          onClick={() => signInWIthGoogle()}>
          Login
        </Button>
      )}
      {isLogin && (
        <Button
          variant="outlined"
          sx={{ color: '#fff' }}
          onClick={() => signOutWIthGoogle()}>
          Logout
        </Button>
      )}
    </Box>
  );
};

export default Auth;
