import {
  Alert,
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
import Loading from './Loading';

const FormReport = () => {
  const { status, setStatus } = useContext(StatusCtx);
  const [err, setErr] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [phone, setPhone] = useState('');

  const handleStatus = () => {
    // setStatus(!status);
    let day = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    const date = `${day}-${month}-${year}`;
    const dataReport = {
      name,
      email,
      title,
      body,
      phone: `62${phone}`,
      date: date,
      status: 'pending',
      uid: localStorage.getItem('user-active'),
    };

    handleSubmitReport(dataReport);
  };

  const reportsCollectionRef = collection(db, 'reports');

  const resetForm = () => {
    setName('');
    setBody('');
    setEmail('');
    setPhone('');
    setTitle('');
  };

  const handleSubmitReport = async (dataReport) => {
    try {
      if (
        dataReport.title === '' ||
        dataReport.name === '' ||
        dataReport.body === '' ||
        dataReport.phone === '' ||
        dataReport.email === ''
      ) {
        return setErr(true);
      }
      await addDoc(reportsCollectionRef, dataReport).then((res) => {
        setStatus(true);
        resetForm();
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      sx={{
        width: {
          lg: '800px',
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
      <Loading open={true} />
      <Typography
        variant="h6"
        sx={{
          maxWidth: '100%',
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
        {err && (
          <Alert severity="warning">Tolong di isi Semua!</Alert>
        )}

        <TextField
          fullWidth
          id="name"
          label="Nama"
          type="text"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <TextField
          fullWidth
          id="title"
          label="Judul Laporan / Tema Laporan"
          type="text"
          variant="outlined"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
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
          value={body}
          required
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            gap: '10px',
          }}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xs: '50px', md: '100px' },
              height: '100%',
              background: '#ff0032',
              color: '#fff',
              justifyContent: 'center',
              borderRadius: '3px',
            }}>
            +62
          </Typography>
          <TextField
            fullWidth
            id="No HP"
            label="No HP"
            type="number"
            variant="outlined"
            onChange={(e) => setPhone(`${e.target.value}`)}
            value={phone}
            required
          />
        </Box>

        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
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
