import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import React, { useContext, useEffect, useRef } from 'react';
import { StatusCtx } from '../context/StatusContext';
import AlertNotif from './AlertNotif';

const FormReport = () => {
  const { status, setStatus } = useContext(StatusCtx);
  const name = useRef('');
  const email = useRef('');
  const title = useRef('');
  const body = useRef('');
  const phone = useRef('');

  const handleStatus = () => {
    // setStatus(!status);

    const dataReport = {
      name,
      email,
      title,
      body,
      phone,
    };
    console.log(' report : ', dataReport);
  };
  const handleInputValue = (value, ref) => {
    ref.current = value;
  };

  return (
    <Box
      sx={{
        width: {
          lg: '400px',
          xs: '350px',
        },
        border: 'solid 2px #bfbfbf',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        marginTop: '50px',
        height: '700px',
        padding: '10px',
        borderRadius: '8px',
      }}>
      <AlertNotif status={status} />
      <Typography
        variant="h6"
        sx={{
          maxWidth: '350px',
          height: '60px',
          bgcolor: '#ff0032',
          color: '#fff',
          borderRadius: '6px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontWeight: '600',
        }}>
        Form Pengaduan
      </Typography>
      <FormControl
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '50px',
          height: '600px',
        }}>
        <TextField
          fullWidth
          id="name"
          label="Nama"
          type="text"
          variant="outlined"
          onChange={(e) => handleInputValue(e.target.value, name)}
        />
        <TextField
          fullWidth
          id="title"
          label="Judul Laporan / Tema Laporan"
          type="text"
          variant="outlined"
          onChange={(e) => handleInputValue(e.target.value, title)}
        />
        <TextField
          id="outline-basic"
          label="Isi Laporan anda"
          type={'text'}
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => handleInputValue(e.target.value, body)}
        />
        <TextField
          fullWidth
          id="No HP"
          label="No HP"
          type="number"
          variant="outlined"
          onChange={(e) => handleInputValue(e.target.value, phone)}
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => handleInputValue(e.target.value, email)}
        />
        <Button
          variant="contained"
          sx={{
            height: '50px',
          }}
          onClick={() => handleStatus()}>
          Lapor!
        </Button>
        {/* <a href="https://wa.me/send?phone=0895702695858&text=tes&app_absent=0" target={'_blank'}>
          
        </a> */}
      </FormControl>
    </Box>
  );
};

export default FormReport;
