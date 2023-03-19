import { Button, ButtonGroup } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const BoxAction = (props) => {
  const { phone } = props;
  return (
    <ButtonGroup
      sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '15px',
        justifyContent: 'center',
      }}>
      <a
        href={`https://wa.me/${phone}`}
        target="_blank"
        rel="noreferrer">
        <Button
          variant="contained"
          color="success"
          sx={{
            bgcolor: '#31C818',
          }}>
          <WhatsAppIcon />
        </Button>
      </a>

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
