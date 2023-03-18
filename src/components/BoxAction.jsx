import { Button, ButtonGroup } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const BoxAction = () => {
  return (
    <ButtonGroup
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        justifyContent: 'center',
      }}>
      <Button
        variant="contained"
        color="success"
        sx={{
          bgcolor: '#31C818',
        }}>
        <WhatsAppIcon />
      </Button>
      <Button
        variant="contained"
        color="info"
        sx={{
          bgcolor: '#2979ff',
        }}>
        <EmailIcon />
      </Button>
    </ButtonGroup>
  );
};

export default BoxAction;
