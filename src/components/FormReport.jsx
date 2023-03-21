import {
  Box,
  Button,
  FormControl,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import { addDoc, collection } from 'firebase/firestore';
import React, {
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { db } from '../config';
import { StatusCtx } from '../context/StatusContext';
import AlertNotif from './AlertNotif';

const FormReport = () => {
  const { status, setStatus } = useContext(StatusCtx);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [phone, setPhone] = useState('');

  const handleStatus = () => {
    // setStatus(!status);

    const dataReport = {
      name,
      email,
      title,
      body,
      phone,
      date: new Date().getDate(),
      status: 'pending',
      uid: localStorage.getItem('user-active'),
    };
    handleSubmitReport(dataReport);
  };

  const reportsCollectionRef = collection(db, 'reports');

  const handleSubmitReport = async (dataReport) => {
    try {
      await addDoc(reportsCollectionRef, dataReport).then((res) => {
        console.log(res);
        console.log('lapor sukses');
      });
    } catch (error) {
      console.error(error);
    }
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
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          id="title"
          label="Judul Laporan / Tema Laporan"
          type="text"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <TextField
          id="outline-basic"
          label="Isi Laporan anda"
          type={'text'}
          multiline
          rows={4}
          variant="outlined"
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <TextField
          fullWidth
          id="No HP"
          label="No HP"
          type="number"
          variant="outlined"
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button
          variant="contained"
          sx={{
            height: '50px',
          }}
          onClick={() => handleStatus()}>
          Lapor!
        </Button>
      </FormControl>
    </Box>
  );
};

export default FormReport;
