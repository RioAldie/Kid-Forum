import {
  Box,
  Button,
  FormControl,
  TextField,
  Typography,
} from '@mui/material';
import { bgcolor } from '@mui/system';
import React from 'react';
import { TrixEditor } from 'react-trix';

const FormReport = () => {
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
        />
        <TextField
          fullWidth
          id="title"
          label="Judul Laporan / Tema Laporan"
          type="text"
          variant="outlined"
        />
        <TextField
          id="outline-basic"
          label="Isi Laporan anda"
          multiline
          rows={4}
          variant="outlined"
        />
        <TextField
          fullWidth
          id="No HP"
          label="No HP"
          type="number"
          variant="outlined"
        />
        <TextField
          fullWidth
          id="email"
          label="Email"
          type="email"
          variant="outlined"
        />
        <Button
          variant="contained"
          sx={{
            height: '50px',
          }}>
          Lapor!
        </Button>
      </FormControl>
    </Box>
  );
};

export default FormReport;
