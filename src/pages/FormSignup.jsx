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

const BoxStyled = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  height: 700,
  minWidth: '350px',
});
const NavBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
export default function SignupForm() {
  const [value, setValue] = useState('guest');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('pria');
  const [notif, setNotif] = useState(false);

  const genders = [
    {
      role: 'pria',
      label: 'Pria',
    },
    {
      role: 'wanita',
      label: 'Wanita',
    },
  ];

  const signupWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((res) => {
        console.log('user data: ', res.user.uid);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box flex={0.5} p={2} justifyContent="center" alignItems="center">
      <BoxStyled p={2}>
        {!notif && (
          <Alert severity="success">
            Berhasil Daftar - silahkan Login
          </Alert>
        )}
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
        {/* <TextField
          fullWidth
          id="role"
          select
          label="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          helperText="Tolong pilih Gender anda">
          {genders.map((role) => (
            <MenuItem color="grey" key={role.role} value={role.role}>
              {role.label}
            </MenuItem>
          ))}
        </TextField> */}
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
