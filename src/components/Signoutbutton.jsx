import { Button } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { signOut } from 'firebase/auth';
import { auth, googleProvider } from '../config';
import { useContext } from 'react';
import { loginCtx } from '../context/LoginContext';

const Signoutbutton = () => {
  const { isLogin, setIsLogin } = useContext(loginCtx);
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
  return (
    <Button variant="contained" onClick={(e) => signOutWIthGoogle()}>
      <LogoutIcon />
      Keluar
    </Button>
  );
};

export default Signoutbutton;
