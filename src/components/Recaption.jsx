import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import RecapCheck from './RecapCheck';
import { RecapCtx } from '../context/RecapContext';

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

export default function Recaption(props) {
  const { open, setOpen } = React.useContext(RecapCtx);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { recap, id } = props;

  return (
    <Box>
      <Button onClick={handleOpen}>Cek Rekap</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <RecapCheck recaption={recap} id={id} />
        </Box>
      </Modal>
    </Box>
  );
}
