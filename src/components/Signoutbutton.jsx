import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config';
import { useContext, useState } from 'react';
import { loginCtx } from '../context/LoginContext';
import Loading from './Loading';

const Signoutbutton = () => {
  const { isLogin, setIsLogin } = useContext(loginCtx);
  const [isLoading, setIsLoading] = useState(false);
  const signOutWIthGoogle = async () => {
    try {
      setIsLoading(true);
      await signOut(auth, googleProvider)
        .then((res) => {
          localStorage.removeItem('user-active');
          localStorage.removeItem('user-email');
          setIsLogin(false);
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <Button
      variant="contained"
      color="warning"
      sx={{
        bgcolor: '#fff',
        color: '#FF0032',
      }}
      onClick={(e) => signOutWIthGoogle()}>
      <Loading open={isLoading} />
      <LogoutIcon />
      Keluar
    </Button>
  );
};

export default Signoutbutton;
