import {
  Alert,
  AppBar,
  Box,
  Button,
  Link,
  MenuItem,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import AuthWithGoogle from '../config/AuthWithGoogle';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config';
import Loading from '../components/Loading';

const BoxStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: 700,
  minWidth: '350px',
});

export default function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [notif, setNotif] = useState(false);
  const [err, setErr] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const signupWithEmail = async () => {
    try {
      setIsLoading(true);
      await createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          setNotif(true);
        })
        .finally(() => setIsLoading(false));
    } catch (error) {
      setErr(true);
      setIsLoading(false);
    }
  };

  return (
    <Box flex={0.5} p={2} justifyContent="center" alignItems="center">
      <Loading open={isLoading} />
      <BoxStyled p={2}>
        {notif && (
          <Alert severity="success">
            Berhasil Daftar - silahkan Login
          </Alert>
        )}
        {err && <Alert severity="error">Daftar Tidak Berhasil</Alert>}
        <Typography variant="h5" color={'primary'}>
          Daftar Akun
        </Typography>

        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          id="outlined-basic"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary"
          onClick={() => signupWithEmail()}>
          Daftar
        </Button>
        <AuthWithGoogle />
        <Typography variant="subtitle1">
          Sudah Punya Akun ?
          <Link href="#" underline="none">
            {' Sign In'}
          </Link>
        </Typography>
      </BoxStyled>
    </Box>
  );
}
