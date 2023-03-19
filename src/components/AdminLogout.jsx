import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { signOut } from 'firebase/auth';
import React from 'react';
import { auth, googleProvider } from '../config';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';

const AdminLogout = () => {
  const navigate = useNavigate();
  const signOutWIthGoogle = async () => {
    try {
      await signOut(auth, googleProvider)
        .then((res) => {
          localStorage.removeItem('user-active');
        })
        .finally(() => {
          console.log('logout');
        });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ListItemButton onClick={() => signOutWIthGoogle()}>
      <ListItemIcon>
        <LogoutIcon color="primary" />
      </ListItemIcon>
      <ListItemText
        primary="Keluar"
        sx={{
          color: '#ff0032',
          fontWeight: '600',
        }}
      />
    </ListItemButton>
  );
};

export default AdminLogout;
