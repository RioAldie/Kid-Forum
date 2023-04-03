import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { signOut } from 'firebase/auth';
import React, { useContext } from 'react';
import { auth, googleProvider } from '../config';
import LogoutIcon from '@mui/icons-material/Logout';
import { adminCtx } from '../context/AdminContext';

const AdminLogout = () => {
  const { setIsAdmin } = useContext(adminCtx);
  const signOutWIthGoogle = async () => {
    try {
      await signOut(auth, googleProvider)
        .then((res) => {
          localStorage.removeItem('admin-active');
        })
        .finally(() => {
          setIsAdmin(false);
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
