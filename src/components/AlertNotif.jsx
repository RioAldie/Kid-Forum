import { Box, Button, Modal, Stack, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { StatusCtx } from '../context/StatusContext';

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
};
const AlertNotif = () => {
  const [open, setOpen] = useState();
  const { status, setStatus } = useContext(StatusCtx);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Modal
      open={status}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Box
        bgcolor={'background.default'}
        p={3}
        borderRadius={3}
        textAlign={'center'}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          minHeight: '300px',
          width: { xs: 300, sm: 400, md: 400 },
          gap: '30px',
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
          Laporanmu Terkirim
        </Typography>
        <Box>
          <CheckCircleOutlineIcon
            sx={{
              fontSize: '124px',
              color: '#31C818',
            }}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '600',
              marginTop: '20px',
            }}>
            Tunggu Balasan Dari Kami , Terima Kasih telah melapor
          </Typography>
          <Button
            variant="outlined"
            sx={{
              marginTop: '30px',
            }}
            onClick={() => setStatus(!status)}>
            Kembali
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AlertNotif;
