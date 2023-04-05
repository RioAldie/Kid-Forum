import {
  Alert,
  Box,
  Button,
  Modal,
  Stack,
  styled,
  TextField,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import AuthWithGoogle from '../config/AuthWithGoogle';
import AdminLogin from '../components/AdminLogin';
import { loginCtx } from '../context/LoginContext';
import { auth } from '../config';
import Loading from '../components/Loading';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const Signin = () => {
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setIsLogin, setShow, show } = useContext(loginCtx);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signInManual = async () => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          localStorage.setItem(
            'user-active',
            JSON.stringify(res.user.uid)
          );
          localStorage.setItem(
            'user-email',
            JSON.stringify(res.user.email)
          );
          setIsLogin(true);
          setShow(false);
          navigate('/');
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (error) {
      setErr(true);
      setIsLoading(false);
    }
  };
  return (
    <>
      <Loading open={isLoading} />
      <Button
        variant="contained"
        color="warning"
        sx={{ bgcolor: '#FFF', color: '#FF0032' }}
        onClick={(e) => setShow(true)}>
        {' '}
        <AccountCircleIcon /> Masuk{' '}
      </Button>

      <StyledModal
        open={show}
        onClose={() => setShow(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          width={500}
          height={500}
          bgcolor={'background.default'}
          color={'text.primary'}
          p={3}
          borderRadius={3}
          textAlign={'center'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>
          <Typography variant="h5">Masuk</Typography>
          {err && (
            <Stack sx={{ width: '100%' }}>
              <Alert severity="error">
                Email atau Password Salah
              </Alert>
            </Stack>
          )}
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
            sx={{ height: 50 }}
            variant="contained"
            size="large"
            onClick={(e) => signInManual()}>
            Masuk
          </Button>
          <AuthWithGoogle />
          <Typography variant="subtitle1">
            Belum Punya Akun?
            <Link
              to={'/Signup'}
              style={{ color: '#FF0032' }}
              onClick={() => setShow(false)}>
              {'Daftar disini'}
            </Link>
          </Typography>
          <AdminLogin />
        </Box>
      </StyledModal>
    </>
  );
};

export default Signin;
