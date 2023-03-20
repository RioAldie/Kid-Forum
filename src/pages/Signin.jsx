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
import { useContext, useEffect, useReducer, useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import AuthWithGoogle from '../config/AuthWithGoogle';
import AdminLogin from '../components/AdminLogin';

const StyledModal = styled(Modal)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});
const Signin = () => {
  const [open, setOpen] = useState(false);
  const [err, setErr] = useState(false);
  return (
    <>
      <Button variant="contained" onClick={(e) => setOpen(true)}>
        {' '}
        <AccountCircleIcon /> Login{' '}
      </Button>

      <StyledModal
        open={open}
        onClose={(e) => setOpen(false)}
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
          <Typography variant="h5">Welcome Back!</Typography>
          <Typography variant="subtitle2" sx={{ color: 'grey' }}>
            a lot creator share their content today, check it now!
          </Typography>
          <TextField
            fullWidth
            id="email"
            label="Email"
            type="email"
            variant="outlined"
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="outlined"
          />
          <Button
            sx={{ height: 50 }}
            variant="contained"
            size="large">
            Sign In
          </Button>
          <AuthWithGoogle />
          <Typography variant="subtitle1">
            Belum Punya Akun?
            <Link to={'/Signup'}>{' Sign Up'}</Link>
          </Typography>
          <AdminLogin />
          {err && (
            <Stack sx={{ width: '100%' }}>
              <Alert severity="error">
                Password or Email is Wrong
              </Alert>
            </Stack>
          )}
        </Box>
      </StyledModal>
    </>
  );
};

export default Signin;
