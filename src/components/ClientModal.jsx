import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
};

export default function ClientModal({ props }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {
    name,
    adress,
    email,
    phone,
    gender,
    job,
    degree,
    relation,
    age,
  } = props;

  const DisplayClientData = (value) => {
    return (
      <TextField
        id="outlined-read-only-input"
        label={value.type}
        defaultValue={value.value}
        InputProps={{
          readOnly: true,
        }}
      />
    );
  };
  return (
    <div>
      <Button onClick={handleOpen}>Lihat</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography
            variant="h5"
            color={'error'}
            sx={{
              width: '100%',
              textAlign: 'center',
            }}>
            Biodata
          </Typography>
          <DisplayClientData value={name} type={'Nama'} />
          <DisplayClientData value={email} type={'Email'} />
          <DisplayClientData value={phone} type={'No Telp/Wa'} />
          <DisplayClientData value={adress} type={'Alamat'} />
          <DisplayClientData value={age} type={'Umur'} />
          <DisplayClientData value={gender} type={'Gender'} />
          <DisplayClientData value={degree} type={'Pendidikan'} />
          <DisplayClientData value={job} type={'Pekerjaan'} />
          <DisplayClientData value={relation} type={'Hubungan'} />
        </Box>
      </Modal>
    </div>
  );
}
