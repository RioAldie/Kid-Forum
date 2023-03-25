import { Box, CircularProgress, Modal } from '@mui/material';
import React, { useState } from 'react';

const style = {
  position: 'absolute',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};
const Loading = (props) => {
  const { open } = props;

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={style}>
        <CircularProgress sx={{ color: '#FF0032' }} />
      </Box>
    </Modal>
  );
};

export default Loading;
