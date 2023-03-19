import { PhotoCamera } from '@mui/icons-material';
import {
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
  const gender = [
    {
      role: 'pria',
      label: 'Pria',
    },
    {
      role: 'wanita',
      label: 'Wanita',
    },
  ];

  return (
    <Box flex={0.5} p={2} justifyContent="center" alignItems="center">
      <BoxStyled p={2}>
        <Typography variant="h5" color={'primary'}>
          Daftar Akun
        </Typography>

        <TextField
          fullWidth
          id="name"
          label="Nama"
          type="text"
          variant="outlined"
        />
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
        <TextField
          fullWidth
          id="role"
          select
          label="Gender"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText="Tolong pilih Gender anda">
          {gender.map((role) => (
            <MenuItem color="grey" key={role.role} value={role.role}>
              {role.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          fullWidth
          size="large"
          variant="contained"
          color="primary">
          Daftar
        </Button>
        <AuthWithGoogle />
        <Typography variant="subtitle1">
          Have an Account?
          <Link href="#" underline="none">
            {' Sign In'}
          </Link>
        </Typography>
      </BoxStyled>
    </Box>
  );
}
